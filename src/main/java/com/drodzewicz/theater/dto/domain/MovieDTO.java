package com.drodzewicz.theater.dto.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String title;

    private String description;

    @NotEmpty
    private BigDecimal rating;

    private String posterUrl;
}
