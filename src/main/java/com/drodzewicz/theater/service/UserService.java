package com.drodzewicz.theater.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.AppUserDTO;
import com.drodzewicz.theater.dto.request.AppManagerFilterDTO;
import com.drodzewicz.theater.dto.request.AppUserFilterDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;

public interface UserService extends UserDetailsService {
    Optional<AppBaseUser> findUserByUsername(String username);

    Page<AppUserDTO> getAppUserList(Pageable pageable, AppUserFilterDTO filters);

    Page<AppManagerUserDTO> getAppManagerList(Pageable pageable, AppManagerFilterDTO filters);
}
