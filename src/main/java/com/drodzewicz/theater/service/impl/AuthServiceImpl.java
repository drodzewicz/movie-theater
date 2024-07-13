package com.drodzewicz.theater.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.*;
import com.drodzewicz.theater.dto.request.*;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.entity.user.AppManagerUserRole;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.exception.AppException;
import com.drodzewicz.theater.mapper.UserMangerMapper;
import com.drodzewicz.theater.mapper.UserMapper;
import com.drodzewicz.theater.repository.AppManagerUserRepository;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.service.AuthService;
import com.drodzewicz.theater.service.UserService;

import java.nio.CharBuffer;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final UserService userService;
    private final AppUserRepository appUserRepository;
    private final AppManagerUserRepository appManagerUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final UserMangerMapper userManagerMapper;

    public AppUserDTO registerUser(SignUpDTO signUpDTO) {
        log.info("Register user {}", signUpDTO);

        userService.findUserByUsername(signUpDTO.getUsername())
                .ifPresent(existingUser -> {
                    throw new AppException("User with this username already exists");
                });

        AppUser user = userMapper.fromSignUpDTO(signUpDTO);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDTO.getPassword())));

        AppUser savedUser = appUserRepository.save(user);
        log.info("Saving user {}", signUpDTO.getUsername());

        return userMapper.toDTO(savedUser);
    }

    public AppManagerUserDTO registerManager(SignUpDTO signUpDTO) {
        log.info("Register user {}", signUpDTO);

        userService.findUserByUsername(signUpDTO.getUsername())
                .ifPresent(existingUser -> {
                    throw new AppException("User with this username already exists");
                });

        AppManagerUser user = userManagerMapper.fromSignUpDTO(signUpDTO);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDTO.getPassword())));
        user.setAppUserRole(AppManagerUserRole.ADMIN);
        
        AppManagerUser savedUser = appManagerUserRepository.save(user);
        log.info("Saving user {}", signUpDTO.getUsername());

        return userManagerMapper.toDTO(savedUser);
    }
}
