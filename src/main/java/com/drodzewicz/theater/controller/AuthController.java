package com.drodzewicz.theater.controller;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.AppUserDTO;
import com.drodzewicz.theater.dto.domain.CredentialsDTO;
import com.drodzewicz.theater.dto.request.SignUpDTO;
import com.drodzewicz.theater.service.AuthService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@ResponseBody
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final AuthenticationManager authenticationManager;

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

    @PreAuthorize("hasPermission('user:create')")
    @PostMapping("/admin/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AppManagerUserDTO registerManager(@RequestBody @Valid SignUpDTO signUpDTO) {
        AppManagerUserDTO createdUser = authService.registerManager(signUpDTO);
        return createdUser;
    }

}
