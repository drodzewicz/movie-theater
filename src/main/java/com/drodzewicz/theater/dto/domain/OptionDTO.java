package com.drodzewicz.theater.dto.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

import com.drodzewicz.theater.entity.user.AppManagerUserRole;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OptionDTO implements Serializable {
    private Long id;

    @NotEmpty
    private String label;

    @NotEmpty
    private String value;

}
