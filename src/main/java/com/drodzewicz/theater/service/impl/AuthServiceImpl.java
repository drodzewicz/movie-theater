package com.drodzewicz.theater.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drodzewicz.theater.dto.domain.*;
import com.drodzewicz.theater.dto.request.*;
import com.drodzewicz.theater.entity.Location;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.entity.user.AppManagerUserPermission;
import com.drodzewicz.theater.entity.user.AppManagerUserRole;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.exception.AppException;
import com.drodzewicz.theater.mapper.UserMangerMapper;
import com.drodzewicz.theater.mapper.UserMapper;
import com.drodzewicz.theater.repository.AppManagerUserRepository;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.repository.LocationRepository;
import com.drodzewicz.theater.service.AuthService;
import com.drodzewicz.theater.service.UserService;

import java.nio.CharBuffer;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final UserService userService;

    private final AppUserRepository appUserRepository;
    private final AppManagerUserRepository appManagerUserRepository;
    private final LocationRepository locationRepository;

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
        user.setActive(true);

        AppUser savedUser = appUserRepository.save(user);
        log.info("Saving user {}", signUpDTO.getUsername());

        return userMapper.toDTO(savedUser);
    }

    @Transactional
    public AppManagerUserDTO registerManager(RegisterManagerDTO registerManagerDTO) {
        log.info("Register user {}", registerManagerDTO);

        userService.findUserByUsername(registerManagerDTO.getUsername())
                .ifPresent(existingUser -> {
                    throw new AppException("User with this username already exists");
                });

        AppManagerUser user = userManagerMapper.fromRegisterManagerDTO(registerManagerDTO);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(registerManagerDTO.getPassword())));
        user.setAppUserRole(registerManagerDTO.getRole());

        if (registerManagerDTO.getRole() != AppManagerUserRole.SUPER_USER) {
            if (registerManagerDTO.getLocationIds().size() == 0) {
                throw new AppException("Locations were not provided for " + registerManagerDTO.getRole() + " role");
            }

            Set<Location> locations = registerManagerDTO.getLocationIds().stream()
                    .map(locationId -> locationRepository.findById(locationId)
                            .orElseThrow(() -> new AppException("Location with ID " + locationId + " not found")))
                    .collect(Collectors.toSet());

            user.setLocations(locations);
        }

        AppManagerUser savedUser = appManagerUserRepository.save(user);
        log.info("Saving user {}", registerManagerDTO.getUsername());

        return userManagerMapper.toDTO(savedUser);
    }

    @Override
    public Set<String> getAllRoles() {
        return Stream.of(AppManagerUserRole.values())
                .map(AppManagerUserRole::name)
                .collect(Collectors.toSet());
    }

    @Override
    public Set<String> getAllPermissions() {
        return Stream.of(AppManagerUserPermission.values())
                .map(AppManagerUserPermission::getPermission)
                .collect(Collectors.toSet());
    }

    @Override
    public Set<String> getRolePermissions(AppManagerUserRole role) {
        return role.getPermissions()
                .stream()
                .map(AppManagerUserPermission::getPermission)
                .collect(Collectors.toSet());
    }
}
