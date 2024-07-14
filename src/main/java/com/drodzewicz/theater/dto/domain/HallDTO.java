package com.drodzewicz.theater.dto.domain;

import java.io.Serializable;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HallDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String name;

    private String room;

    private String floor;
}
