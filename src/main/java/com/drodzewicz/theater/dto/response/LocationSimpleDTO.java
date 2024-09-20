package com.drodzewicz.theater.dto.response;

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
public class LocationSimpleDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String identifier;

}
