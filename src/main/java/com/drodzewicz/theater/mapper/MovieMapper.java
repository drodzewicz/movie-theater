package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;

import com.drodzewicz.theater.dto.domain.MovieDTO;
import com.drodzewicz.theater.dto.domain.MovieDetailedDTO;
import com.drodzewicz.theater.dto.request.CreateMovieDTO;
import com.drodzewicz.theater.dto.response.MovieListItemDTO;
import com.drodzewicz.theater.entity.Movie;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface MovieMapper extends DTOMapper<Movie, MovieDTO> {
    Movie fromCreateDTO(CreateMovieDTO movieDTO);

    MovieDetailedDTO toDetailedDTO(Movie movie);

    MovieListItemDTO toListDTO(Movie movie);
}
