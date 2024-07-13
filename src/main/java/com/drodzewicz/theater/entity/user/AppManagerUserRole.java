package com.drodzewicz.theater.entity.user;

import java.util.*;
import java.util.stream.*;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;

public enum AppManagerUserRole {
    SUPER_USER(AppManagerUserPermission.getAllPermissions()),
    ADMIN(Sets.union(
            AppManagerUserPermission.getAllOrderPermissions(),
            AppManagerUserPermission.getAllMoviesPermissions())),
    MANAGER(AppManagerUserPermission.getAllOrderPermissions());

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
