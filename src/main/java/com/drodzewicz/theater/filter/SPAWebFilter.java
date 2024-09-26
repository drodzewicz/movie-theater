package com.drodzewicz.theater.filter;

import java.io.IOException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class SPAWebFilter extends OncePerRequestFilter {

    private static final String FORWARD_TO = "/index.html";
    private static final String EXCLUDED_EXTENSIONS_REGEX = ".*\\.(xml|js|json|jpg|jpeg|gif|png|css)$";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String path = request.getRequestURI().toLowerCase();
        log.debug("SpaWebFilter path: " + path);

        if (path.equals("/")
                || path.startsWith("/api")
                || path.startsWith("/static")
                || path.startsWith("/manifest.json")
                || path.startsWith("/favicon.ico")
                || path.startsWith("/robots.txt")
                || path.matches(EXCLUDED_EXTENSIONS_REGEX)) {
            filterChain.doFilter(request, response);
        } else {
            log.debug("SpaWebFilter forwarding to " + FORWARD_TO + " from path: " + path);
            request.getRequestDispatcher(FORWARD_TO).forward(request, response);
        }
    }
}