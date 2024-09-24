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
public class HallListItemDTO implements Serializable {

    private Long id;

    @NotEmpty
    private String name;

    private String room;

    private String floor;

    private LocationSimpleDTO location;

    @NotEmpty
    private Boolean active;

    @NotEmpty
    private LocalDateTime dateCreated;
}
