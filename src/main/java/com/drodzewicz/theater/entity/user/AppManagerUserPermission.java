package com.drodzewicz.theater.entity.user;

import java.util.Set;

import com.google.common.collect.Sets;

public enum AppManagerUserPermission {
    // ORDER
    CREATE_ORDER("order:create"),
    UPDATE_ORDER("order:update"),
    DELETE_ORDER("order:delete"),
    CANCEL_ORDER("order:cancel"),
    // MOVIES
    CREATE_MOVIE("movie:create"),
    UPDATE_MOVIE("movie:update"),
    DELETE_MOVIE("movie:delete"),
    // LCOATIONS
    CREATE_LOCATION("location:create"),
    UPDATE_LOCATION("location:update"),
    DELETE_LOCATION("location:delete"),
    // USERS
    CREATE_USER("user:create"),
    UPDATE_USER("user:update"),
    DELETE_USER("user:delete");

    private final String permission;

    AppManagerUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return this.permission;
    }

    static Set<AppManagerUserPermission> getAllPermissions() {
        return Sets.newHashSet(
                CREATE_ORDER,
                UPDATE_ORDER,
                DELETE_ORDER,
                CANCEL_ORDER,
                // MOVIES
                CREATE_MOVIE,
                UPDATE_MOVIE,
                DELETE_MOVIE,
                // LCOATIONS
                CREATE_LOCATION,
                UPDATE_LOCATION,
                DELETE_LOCATION,
                // USERS
                CREATE_USER,
                UPDATE_USER,
                DELETE_USER);
    }

    static Set<AppManagerUserPermission> getAllUserPermissions() {
        return Sets.newHashSet(CREATE_USER, UPDATE_USER, DELETE_USER);
    }

    static Set<AppManagerUserPermission> getAllLocationPermissions() {
        return Sets.newHashSet(CREATE_LOCATION, UPDATE_LOCATION, DELETE_LOCATION);
    }

    static Set<AppManagerUserPermission> getAllMoviesPermissions() {
        return Sets.newHashSet(CREATE_MOVIE, UPDATE_MOVIE, DELETE_MOVIE);
    }

    static Set<AppManagerUserPermission> getAllOrderPermissions() {
        return Sets.newHashSet(CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER, CANCEL_ORDER);
    }

}
