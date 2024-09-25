package com.drodzewicz.theater.dto.request;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScreeningFilterDTO implements Serializable {

    private String title;

    private List<String> movie;

    private List<String> hall;

    private List<String> location;

    private Boolean published;
}