package com.drodzewicz.theater.entity.user;

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
    CREATE_LOCATION("LOCATION:create"),
    UPDATE_LOCATION("LOCATION:update"),
    DELETE_LOCATION("LOCATION:delete"),
    // USERS
    CREATE_USER("USER:create"),
    UPDATE_USER("USER:update"),
    DELETE_USER("USER:delete");

    private final String permission;

    AppManagerUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return this.permission;
    }
}
