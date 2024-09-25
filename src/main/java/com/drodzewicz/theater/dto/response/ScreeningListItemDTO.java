package com.drodzewicz.theater.dto.response;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.domain.MovieDTO;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScreeningListItemDTO implements Serializable {

    private Long id;

    @NotEmpty
    private LocalDateTime date;

    private MovieDTO movie;

    private HallDTO hall;

    private Boolean published;
}
