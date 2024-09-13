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
public class CreateLocationDTO implements Serializable {

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
}
