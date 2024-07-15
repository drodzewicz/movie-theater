package com.drodzewicz.theater.dto.domain;

import java.time.LocalDateTime;

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
public class MovieDetailedDTO extends MovieDTO {
    private Integer duration;

    private String language;

    private LocalDateTime releaseDate;

    private String trailerUrl;

}
