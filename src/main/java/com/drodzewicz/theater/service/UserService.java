package com.drodzewicz.theater.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.AppUserDTO;
import com.drodzewicz.theater.dto.request.AppManagerFilterDTO;
import com.drodzewicz.theater.dto.request.AppUserFilterDTO;
import com.drodzewicz.theater.dto.response.AppManagerUserListItemDTO;
import com.drodzewicz.theater.dto.response.AppUserListItemDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.entity.user.AppUser;

public interface UserService extends UserDetailsService {
    Optional<AppBaseUser> findUserByUsername(String username);

    Page<AppUserListItemDTO> getAppUserList(Pageable pageable, AppUserFilterDTO filters);

    Page<AppManagerUserListItemDTO> getAppManagerList(Pageable pageable, AppManagerFilterDTO filters);

    void updateUserStatus(String username, Boolean active);

    Optional<AppManagerUser> findManagerByUsername(String username);

    Optional<AppUser> findAppUserByUsername(String username);
}
