package com.drodzewicz.theater.service.impl;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.MovieDTO;
import com.drodzewicz.theater.dto.domain.MovieDetailedDTO;
import com.drodzewicz.theater.dto.request.CreateMovieDTO;
import com.drodzewicz.theater.dto.request.MovieFilterDTO;
import com.drodzewicz.theater.entity.Movie;
import com.drodzewicz.theater.entity.UserMovieRating;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.MovieMapper;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.repository.MovieRepository;
import com.drodzewicz.theater.repository.UserMovieRatingRepository;
import com.drodzewicz.theater.service.MovieService;
import com.drodzewicz.theater.specification.MovieSpecification;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;
    private final UserMovieRatingRepository userMovieRatingRepository;
    private final AppUserRepository appUserRepository;

    private final MovieMapper movieMapper;

    @Override
    public Movie getMovieEntityById(Long movieId) {
        log.debug("Getting movie entity {}", movieId);
        return movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Movie does not exists with the following id" + movieId));
    }

    @Override
    public MovieDTO getMovieById(Long movieId) {
        log.info("Getting movie {}", movieId);
        Movie movie = getMovieEntityById(movieId);
        return movieMapper.toDTO(movie);
    }

    @Override
    public Page<MovieDTO> getMovieList(Pageable pageable, MovieFilterDTO filters) {
        log.info("Getting movies pagination {} and filters {}", pageable, filters);
        Specification<Movie> spec = Specification.where(MovieSpecification.hasTitle(filters.getTitle()));

        Page<Movie> movies = movieRepository.findAll(spec, pageable);
        return movies.map(movieMapper::toDTO);
    }

    @Override
    public MovieDetailedDTO createMovie(CreateMovieDTO movieDTO) {
        log.info("Creating new movie {}", movieDTO);
        Movie movie = movieMapper.fromCreateDTO(movieDTO);
        Movie savedMovie = movieRepository.save(movie);

        return movieMapper.toDetailedDTO(savedMovie);
    }

    @Override
    public void deleteMovie(Long movieId) {
        log.info("Deleting movie {}", movieId);
        Movie movie = getMovieEntityById(movieId);
        movieRepository.delete(movie);
    }

    @Override
    public void addMovieUserRating(Long movieId, Long userId, BigDecimal rating) {
        log.info("Add movie {} rating {} from user {}", movieId, rating, userId);
        Movie movie = getMovieEntityById(movieId);
        AppUser user = appUserRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "User does not exists with the following id" + userId));

        Optional<UserMovieRating> existingUserMovieRating = userMovieRatingRepository.findByUserIdAndMovieId(userId,
                movieId);

        UserMovieRating userMovieRating;
        if (existingUserMovieRating.isPresent()) {
            log.info("Update exisitng user {} movie {} rating [ {} -> {} ]", userId, movieId,
                    existingUserMovieRating.get().getRating(), rating);
            userMovieRating = existingUserMovieRating.get();
            userMovieRating.setRating(rating);
        } else {
            log.info("Add new movie {} rating {} from user {}", movieId, rating, userId);
            userMovieRating = UserMovieRating
                    .builder()
                    .movie(movie)
                    .user(user)
                    .rating(rating)
                    .build();

        }

        userMovieRatingRepository.save(userMovieRating);
    }

    @Override
    public void removeMovieUserRating(Long movieId, Long userId) {
        log.info("Removing movie {} rating from user {}", movieId, userId);

        UserMovieRating rating = userMovieRatingRepository.findByUserIdAndMovieId(userId, movieId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "User does not exists with the following id" + userId));

        userMovieRatingRepository.delete(rating);
    }

    @Override
    public BigDecimal getMovieUserRating(Long movieId, Long userId) {
        log.info("Getting movie {} rating from user {}", movieId, userId);

        UserMovieRating userMovieRating = userMovieRatingRepository.findByUserIdAndMovieId(userId,
                movieId).orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Movie rating for this user and movie do not exists"));
        return userMovieRating.getRating();
    }

}
