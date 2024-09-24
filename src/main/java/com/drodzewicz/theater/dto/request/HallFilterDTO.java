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
public class HallFilterDTO implements Serializable {

    private String name;
    private List<String> location;
    private Boolean active;
}