package com.drodzewicz.theater.controller;

import java.util.*;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.AppUserDTO;
import com.drodzewicz.theater.dto.domain.CredentialsDTO;
import com.drodzewicz.theater.dto.request.RegisterManagerDTO;
import com.drodzewicz.theater.dto.request.SignUpDTO;
import com.drodzewicz.theater.entity.user.AppManagerUserRole;
import com.drodzewicz.theater.service.AuthService;
import com.drodzewicz.theater.service.CurrentUserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@AllArgsConstructor
@RestController
@ResponseBody
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authenticationManager;
    private final CurrentUserService currentUserService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public void login(@RequestBody @Valid CredentialsDTO credentialsDTO, HttpServletRequest request) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                credentialsDTO.getUsername(), credentialsDTO.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(authentication);
        HttpSession session = request.getSession(true);
        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, sc);
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AppUserDTO registerUser(@RequestBody @Valid SignUpDTO signUpDTO) {
        AppUserDTO createdUser = authService.registerUser(signUpDTO);
        return createdUser;
    }

    @PreAuthorize("hasAuthority('user:create')")
    @PostMapping("/admin/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AppManagerUserDTO registerManager(@RequestBody @Valid RegisterManagerDTO registerManagerDTO) {
        AppManagerUserDTO createdUser = authService.registerManager(registerManagerDTO);
        return createdUser;
    }

    @GetMapping("/current-user")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("isAuthenticated()")
    public AppBaseUserDTO getCurrentLoggedInUser() {
        AppBaseUserDTO currentUser = currentUserService.getUser();
        return currentUser;
    }

    @GetMapping("/roles")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("isAuthenticated()")
    public List<String> getRoleList() {
        return authService.getAllRoles().stream().sorted().toList();
    }

    @GetMapping("/permissions")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("isAuthenticated()")
    public List<String> getPermissions(@RequestParam(required = false) String role) {
        if (role != null) {
            AppManagerUserRole userRole = AppManagerUserRole.valueOf(role.toUpperCase());
            return authService.getRolePermissions(userRole).stream().sorted().toList();
        }
        return authService.getAllPermissions().stream().sorted().toList();
    }

}
