package com.drodzewicz.theater.service;

import com.drodzewicz.theater.dto.domain.*;
import com.drodzewicz.theater.dto.request.*;

public interface AuthService {
    AppUserDTO registerUser(SignUpDTO signUpDTO);

    AppManagerUserDTO registerManager(SignUpDTO signUpDTO);
}
