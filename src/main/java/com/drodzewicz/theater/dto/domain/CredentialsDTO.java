package com.drodzewicz.theater.dto.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CredentialsDTO {

    @NotEmpty
    private String username;

    @NotEmpty
    private String password;
}
