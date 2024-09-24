package com.drodzewicz.theater.controller;

import java.util.*;
import java.math.BigDecimal;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.dto.domain.MovieDTO;
import com.drodzewicz.theater.dto.domain.MovieDetailedDTO;
import com.drodzewicz.theater.dto.request.CreateMovieDTO;
import com.drodzewicz.theater.dto.request.MovieFilterDTO;
import com.drodzewicz.theater.dto.response.MovieListItemDTO;
import com.drodzewicz.theater.dto.util.PaginatedResponse;
import com.drodzewicz.theater.service.CurrentUserService;
import com.drodzewicz.theater.service.MovieService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/movies")
public class MovieController {
    private final CurrentUserService currentUserService;

    private final MovieService movieService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MovieDetailedDTO createMovie(@Valid @RequestBody CreateMovieDTO movieDTO) {
        MovieDetailedDTO movie = movieService.createMovie(movieDTO);
        return movie;
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public MovieDTO getMovie(@PathVariable("id") Long movieId) {
        MovieDTO movie = movieService.getMovieById(movieId);
        return movie;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PaginatedResponse<MovieListItemDTO> getMovies(@PageableDefault(size = 15) Pageable pageable,
            @ModelAttribute MovieFilterDTO filters) {
        Page<MovieListItemDTO> movies = movieService.getMovieList(pageable, filters);
        return new PaginatedResponse<MovieListItemDTO>(movies);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteMovie(@PathVariable("id") Long movieId) {
        movieService.deleteMovie(movieId);
    }

    // FIXME fix response
    @GetMapping("{id}/user-rating")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, BigDecimal> currentUserRating(@PathVariable("id") Long movieId) {
        AppBaseUserDTO currentUser = currentUserService.getUser();
        BigDecimal rating = movieService.getMovieUserRating(movieId, currentUser.getId());
        Map<String, BigDecimal> res = new HashMap();
        res.put("rating", rating);
        return res;
    }

    @PostMapping("{id}/user-rating")
    @ResponseStatus(HttpStatus.OK)
    public void updateUserMovieRating(@PathVariable("id") Long movieId) {
        AppBaseUserDTO currentUser = currentUserService.getUser();
        movieService.addMovieUserRating(movieId, currentUser.getId(), null);
    }

    @DeleteMapping("{id}/user-rating")
    @ResponseStatus(HttpStatus.OK)
    public void removeUserMovieRating(@PathVariable("id") Long movieId) {
        AppBaseUserDTO currentUser = currentUserService.getUser();
        movieService.removeMovieUserRating(movieId, currentUser.getId());
    }

}
