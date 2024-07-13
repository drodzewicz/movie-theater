package com.drodzewicz.theater.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.drodzewicz.theater.entity.user.AppBaseUser;

public interface UserService extends UserDetailsService {
    Optional<AppBaseUser> findUserByUsername(String username);
}
