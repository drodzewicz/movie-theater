package com.drodzewicz.theater.dto.response;

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
public class MovieListItemDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String title;

    @NotEmpty
    private BigDecimal rating;

    private String posterUrl;

    private String trailerUrl;

    private LocalDateTime releaseDate;
}
