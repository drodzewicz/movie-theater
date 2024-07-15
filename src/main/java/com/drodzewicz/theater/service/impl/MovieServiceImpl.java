package com.drodzewicz.theater.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.domain.MovieDTO;
import com.drodzewicz.theater.dto.domain.MovieDetailedDTO;
import com.drodzewicz.theater.dto.request.CreateHallDTO;
import com.drodzewicz.theater.dto.request.CreateMovieDTO;
import com.drodzewicz.theater.entity.Hall;
import com.drodzewicz.theater.entity.Movie;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.MovieMapper;
import com.drodzewicz.theater.repository.MovieRepository;
import com.drodzewicz.theater.service.HallService;
import com.drodzewicz.theater.service.MovieService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

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
    public Page<MovieDTO> getMovieList(Pageable pageable) {
        log.info("Getting movies");
        Page<Movie> movies = movieRepository.findAll(pageable);
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

}
