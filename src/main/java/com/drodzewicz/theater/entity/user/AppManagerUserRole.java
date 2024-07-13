package com.drodzewicz.theater.entity.user;

import static com.drodzewicz.theater.entity.user.AppManagerUserPermission.*;

import java.util.*;
import java.util.stream.*;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;

public enum AppManagerUserRole {
    SUPER_USER(Sets.newHashSet(CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE)),
    ADMIN(Sets.newHashSet(CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE));

    private final Set<AppManagerUserPermission> permissions;

    AppManagerUserRole(Set<AppManagerUserPermission> permissions) {
        this.permissions = permissions;
    }

    Set<AppManagerUserPermission> getPermissions() {
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
