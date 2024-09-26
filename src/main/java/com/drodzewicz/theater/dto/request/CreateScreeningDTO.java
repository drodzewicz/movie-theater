package com.drodzewicz.theater.dto.request;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateScreeningDTO implements Serializable {

    @NotNull
    private LocalDateTime date;

    @NotNull
    private Long movieId;

    @NotNull
    private Long hallId;

    private Long locationId;
}
