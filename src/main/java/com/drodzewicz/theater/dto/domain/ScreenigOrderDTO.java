package com.drodzewicz.theater.dto.domain;

import java.util.*;
import java.io.Serializable;
import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScreenigOrderDTO implements Serializable {

    private Long id;

    private BigDecimal price;

    private List<TicketDTO> tickets;
}
