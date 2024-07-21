package com.drodzewicz.theater.dto.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScreeningDTO implements Serializable {

    private Long id;

    @NotEmpty
    private LocalDateTime date;

    private String movieId;

    private String locationId;
}
