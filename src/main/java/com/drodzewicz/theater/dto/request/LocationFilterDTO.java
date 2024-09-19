package com.drodzewicz.theater.dto.request;

import java.util.List;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LocationFilterDTO implements Serializable {

    private String identifier;
    private List<String> city;
    private List<String> country;
    private Boolean active;
}