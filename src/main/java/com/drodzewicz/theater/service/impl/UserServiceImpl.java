package com.drodzewicz.theater.service.impl;

import java.util.Optional;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.repository.AppManagerUserRepository;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final AppUserRepository appUserRepository;
    private final AppManagerUserRepository appManagerUserRepository;

    @Override
    public Optional<AppBaseUser> findUserByUsername(String username) {
        log.debug("Querying user: {}", username);

        Optional<AppUser> regularUser = appUserRepository.findByUsername(username);
        if (regularUser.isPresent()) {
            return regularUser.map(AppBaseUser.class::cast);
        }

        Optional<AppManagerUser> managerUser = appManagerUserRepository.findByUsername(username);
        return managerUser.map(AppBaseUser.class::cast);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.debug("Loading user: {}", username);

        AppBaseUser user = findUserByUsername(username).orElseThrow(() -> {
            log.warn("User not found: {}", username);
            return new UsernameNotFoundException(username);
        });
        ;

        return User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(user.getAuthorities())
                .build();
    }
}
