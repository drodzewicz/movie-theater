package com.drodzewicz.theater.dto.request;

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
public class CreateScreeningDTO implements Serializable {

    private Long id;

    @NotEmpty
    private LocalDateTime date;

    @NotEmpty
    private Long movieId;

    @NotEmpty
    private Long hallId;

    private Long locationId;
}
