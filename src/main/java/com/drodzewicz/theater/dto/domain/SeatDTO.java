package com.drodzewicz.theater.dto.domain;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SeatDTO implements Serializable {

    private Long id;

    private Integer row;

    private Integer number;
    
    private Boolean blocked;
}
