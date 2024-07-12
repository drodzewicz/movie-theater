package com.drodzewicz.theater.entity;

import static com.drodzewicz.theater.entity.AppUserPermission.*;

import java.util.*;
import java.util.stream.*;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;

public enum AppUserRole {
    SUPER_USER(Sets.newHashSet(CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE)),
    ADMIN(Sets.newHashSet(CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE)),
    USER(Sets.newHashSet(CREATE_ORDER, UPDATE_ORDER, CANCEL_ORDER, ADD_MOVIE_SCORE, REMOVE_MOVIE_SCORE));

    private final Set<AppUserPermission> permissions;

    AppUserRole(Set<AppUserPermission> permissions) {
        this.permissions = permissions;
    }

    Set<AppUserPermission> getPermissions() {
        return this.permissions;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());

        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}
