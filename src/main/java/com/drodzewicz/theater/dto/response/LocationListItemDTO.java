package com.drodzewicz.theater.dto.response;

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
public class LocationListItemDTO implements Serializable {

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

    private LocalDateTime dateCreated;
}
