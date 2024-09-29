package com.drodzewicz.theater.service;

import java.util.*;

import com.drodzewicz.theater.dto.domain.*;
import com.drodzewicz.theater.dto.request.*;
import com.drodzewicz.theater.entity.user.AppManagerUserRole;

public interface AuthService {
    AppUserDTO registerUser(SignUpDTO signUpDTO);

    AppManagerUserDTO registerManager(RegisterManagerDTO registerManagerDTO);

    Set<String> getAllRoles();

    Set<String> getAllPermissions();

    Set<String> getRolePermissions(AppManagerUserRole role);

}
