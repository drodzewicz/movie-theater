package com.drodzewicz.theater.dto.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MovieDetailedDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String title;

    private String description;

    @NotEmpty
    private BigDecimal rating;

    private String posterUrl;

    private Integer duration;

    private LocalDateTime releaseDate;

    private String trailerUrl;

}
