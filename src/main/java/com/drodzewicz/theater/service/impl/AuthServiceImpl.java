package com.drodzewicz.theater.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.*;
import com.drodzewicz.theater.dto.request.*;
import com.drodzewicz.theater.entity.*;
import com.drodzewicz.theater.exception.AppException;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.UserMapper;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.service.AuthService;

import java.nio.CharBuffer;
import java.util.Optional;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public AppUserDTO login(CredentialsDTO credentialsDTO) {
        log.info("Login in to user {}", credentialsDTO);
        AppUser user = appUserRepository.findByUsername(credentialsDTO.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Bad login credentials"));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDTO.getPassword()), user.getPassword())) {
            return userMapper.toDTO(user);
        }
        throw new ResourceNotFoundException("Bad login credentials");
    }

    public AppUserDTO register(SignUpDTO signUpDTO) {
        Optional<AppUser> optionalUser = appUserRepository.findByUsername(signUpDTO.getUsername());

        if (optionalUser.isPresent()) {
            throw new AppException("User with this username already exists");
        }

        AppUser user = userMapper.fromSignUpDTO(signUpDTO);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDTO.getPassword())));

        AppUser savedUser = appUserRepository.save(user);

        return userMapper.toDTO(savedUser);
    }
}
