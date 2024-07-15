package com.drodzewicz.theater.dto.request;

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
public class CreateHallDTO implements Serializable {

    @NotEmpty
    private String name;

    private String room;

    private String floor;
}
