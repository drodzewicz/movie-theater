package com.drodzewicz.theater.entity;

public enum AppUserPermission {
    // ORDER
    CREATE_ORDER("order:create"),
    UPDATE_ORDER("order:update"),
    DELETE_ORDER("order:delete"),
    CANCEL_ORDER("order:cancel"),
    // MOVIES
    CREATE_MOVIE("movie:create"),
    UPDATE_MOVIE("movie:update"),
    DELETE_MOVIE("movie:delete"),
    // SCORE
    ADD_MOVIE_SCORE("movie-score:add"),
    REMOVE_MOVIE_SCORE("movie-score:delete");

    private final String permission;

    AppUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return this.permission;
    }
}
