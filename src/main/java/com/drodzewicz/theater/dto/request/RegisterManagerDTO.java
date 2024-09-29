package com.drodzewicz.theater.dto.request;

import java.io.Serializable;
import java.util.List;

import com.drodzewicz.theater.entity.user.AppManagerUserRole;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterManagerDTO implements Serializable {

    @NotEmpty
    private String username;

    @NotEmpty
    private String password;

    @NotEmpty
    private String firstName;

    @NotEmpty
    private String lastName;

    @NotNull
    private AppManagerUserRole role;

    private List<Long> locationIds;
}
