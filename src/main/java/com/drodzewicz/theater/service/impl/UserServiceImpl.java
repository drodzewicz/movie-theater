package com.drodzewicz.theater.service.impl;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.request.AppManagerFilterDTO;
import com.drodzewicz.theater.dto.request.AppUserFilterDTO;
import com.drodzewicz.theater.dto.response.AppManagerUserListItemDTO;
import com.drodzewicz.theater.dto.response.AppUserListItemDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.mapper.UserMangerMapper;
import com.drodzewicz.theater.mapper.UserMapper;
import com.drodzewicz.theater.repository.AppManagerUserRepository;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.service.UserService;
import com.drodzewicz.theater.specification.AppManagerSpecification;
import com.drodzewicz.theater.specification.AppUserSpecification;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final AppUserRepository appUserRepository;
    private final AppManagerUserRepository appManagerUserRepository;

    private final UserMapper appUserMapper;
    private final UserMangerMapper userMangerMapper;

    @Override
    public Optional<AppUser> findAppUserByUsername(String username) {
        log.debug("Querying user: {}", username);

        return appUserRepository.findByUsername(username);
    }

    @Override
    public Optional<AppManagerUser> findManagerByUsername(String username) {
        log.debug("Querying manager user: {}", username);

        return appManagerUserRepository.findByUsername(username);
    }

    @Override
    public Optional<AppBaseUser> findUserByUsername(String username) {
        log.debug("Querying user: {}", username);

        Optional<AppUser> regularUser = findAppUserByUsername(username);
        if (regularUser.isPresent()) {
            return regularUser.map(AppBaseUser.class::cast);
        }

        Optional<AppManagerUser> managerUser = findManagerByUsername(username);
        return managerUser.map(AppBaseUser.class::cast);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.debug("Loading user: {}", username);

        AppBaseUser user = findUserByUsername(username).orElseThrow(() -> {
            log.warn("User not found: {}", username);
            return new UsernameNotFoundException(username);
        });

        return User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(user.getAuthorities())
                .build();
    }

    @Override
    public Page<AppUserListItemDTO> getAppUserList(Pageable pageable, AppUserFilterDTO filters) {
        log.debug("Get app users with pagination: {} and filters", pageable, filters);

        Specification<AppUser> spec = Specification
                .where(AppUserSpecification.hasSearchTerm(filters.getSearchTerm()))
                .and(AppUserSpecification.isActive(filters.getActive()));

        Page<AppUser> users = appUserRepository.findAll(spec, pageable);
        return users.map(appUserMapper::toListItemDTO);
    }

    @Override
    public Page<AppManagerUserListItemDTO> getAppManagerList(Pageable pageable, AppManagerFilterDTO filters) {
        log.debug("Get app managers with pagination: {} and filters", pageable, filters);

        Specification<AppManagerUser> spec = Specification
                .where(AppManagerSpecification.hasSearchTerm(filters.getSearchTerm()))
                .and(AppManagerSpecification.isActive(filters.getActive()))
                .and(AppManagerSpecification.hasRoles(filters.getAppUserRole()));

        Page<AppManagerUser> users = appManagerUserRepository.findAll(spec, pageable);
        return users.map(userMangerMapper::toListItemDTO);
    }

    @Override
    public void updateUserStatus(String username, Boolean active) {
        log.info("Update user {} status to {}", username, active);

        Optional<AppUser> regularUser = findAppUserByUsername(username);
        if (regularUser.isPresent()) {
            AppUser appUser = regularUser.get();
            appUser.setActive(active);
            appUserRepository.save(appUser);
        }

        Optional<AppManagerUser> managerUser = findManagerByUsername(username);
        if (managerUser.isPresent()) {
            AppManagerUser appManagerUser = managerUser.get();
            appManagerUser.setActive(active);
            appManagerUserRepository.save(appManagerUser);
        }
    }
}
