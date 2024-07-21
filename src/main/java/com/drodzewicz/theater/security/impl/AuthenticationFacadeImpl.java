package com.drodzewicz.theater.security.impl;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.drodzewicz.theater.security.AuthenticationFacade;

import org.springframework.security.core.Authentication;

@Component
public class AuthenticationFacadeImpl implements AuthenticationFacade {
    @Override
    public Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }
}
