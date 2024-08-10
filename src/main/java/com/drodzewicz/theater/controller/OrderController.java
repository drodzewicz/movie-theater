package com.drodzewicz.theater.controller;

import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.dto.domain.ScreenigOrderDTO;
import com.drodzewicz.theater.dto.request.CreateOrderDTO;
import com.drodzewicz.theater.mapper.OrderMapper;
import com.drodzewicz.theater.service.CurrentUserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/orders")
public class OrderController {

    private final CurrentUserService currentUserService;

    private final OrderMapper orderMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ScreenigOrderDTO createOrder(@Valid @RequestBody CreateOrderDTO orderDTO) {
        AppBaseUserDTO currentUser = currentUserService.getUser();

        // LocationDTO location = locationService.createLocation(locationDTO);
        return null;
    }
}
