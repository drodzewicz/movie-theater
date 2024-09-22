package com.drodzewicz.theater.dto.request;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class CreateMovieDTO implements Serializable {

    @NotEmpty
    private String title;

    private String description;

    private String posterUrl;

    private Integer duration;

    private String language;

    private LocalDateTime releaseDate;

    private String trailerUrl;

}
