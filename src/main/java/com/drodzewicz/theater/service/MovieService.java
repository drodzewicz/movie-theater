package com.drodzewicz.theater.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.drodzewicz.theater.dto.domain.MovieDTO;
import com.drodzewicz.theater.dto.domain.MovieDetailedDTO;
import com.drodzewicz.theater.dto.request.CreateMovieDTO;
import com.drodzewicz.theater.entity.Movie;

public interface MovieService {
    Movie getMovieEntityById(Long movieId);

    MovieDTO getMovieById(Long movieId);

    Page<MovieDTO> getMovieList(Pageable pageable);

    MovieDetailedDTO createMovie(CreateMovieDTO movieDTO);

    void deleteMovie(Long movieId);
}
