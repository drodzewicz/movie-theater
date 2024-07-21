package com.drodzewicz.theater.service.impl;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.exception.AppException;
import com.drodzewicz.theater.mapper.UserMapper;
import com.drodzewicz.theater.security.AuthenticationFacade;
import com.drodzewicz.theater.service.CurrentUserService;
import com.drodzewicz.theater.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class CurrentUserServiceImpl implements CurrentUserService {
    private final AuthenticationFacade authenticationFacade;

    private final UserService userService;

    private final UserMapper userMapper;

    @Override
    public AppBaseUserDTO getUser() {
        Authentication authentication = authenticationFacade.getAuthentication();
        String username = authentication.getName();
        log.info("Retrieving current user {}", username);
        AppBaseUser currentUser = userService.findUserByUsername(username)
                .orElseThrow(() -> new AppException("User with this username already exists"));

        return userMapper.toBaseUserDTO(currentUser);
    }

}
