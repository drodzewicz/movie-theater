package com.drodzewicz.theater.service;

import java.math.BigDecimal;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.drodzewicz.theater.dto.domain.MovieDTO;
import com.drodzewicz.theater.dto.domain.MovieDetailedDTO;
import com.drodzewicz.theater.dto.request.CreateMovieDTO;
import com.drodzewicz.theater.dto.request.MovieFilterDTO;
import com.drodzewicz.theater.dto.response.MovieListItemDTO;
import com.drodzewicz.theater.entity.Movie;

public interface MovieService {
    Movie getMovieEntityById(Long movieId);

    MovieDTO getMovieById(Long movieId);

    Page<MovieListItemDTO> getMovieList(Pageable pageable, MovieFilterDTO filters);

    MovieDetailedDTO createMovie(CreateMovieDTO movieDTO);

    void deleteMovie(Long movieId);

    BigDecimal getMovieUserRating(Long movieId, Long userId);

    void addMovieUserRating(Long movieId, Long userId, BigDecimal rating);

    void removeMovieUserRating(Long movieId, Long userId);

}
