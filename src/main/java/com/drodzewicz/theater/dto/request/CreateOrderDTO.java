package com.drodzewicz.theater.dto.request;

import java.util.*;
import java.io.Serializable;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateOrderDTO implements Serializable {

    @NotEmpty
    private Long screeningId;

    @NotEmpty
    private List<Long> tickets;
}
