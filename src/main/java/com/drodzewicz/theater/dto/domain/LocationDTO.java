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
public class LocationDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String identifier;

    @NotEmpty
    private String country;

    @NotEmpty
    private String city;

    @NotEmpty
    private String streetName;

    @NotEmpty
    private String buildingNumber;

    @NotEmpty
    private String zipCode;

    @NotEmpty
    private Boolean active;
}
