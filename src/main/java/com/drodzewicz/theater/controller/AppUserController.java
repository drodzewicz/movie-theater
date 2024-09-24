package com.drodzewicz.theater.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.request.AppUserFilterDTO;
import com.drodzewicz.theater.dto.response.AppUserListItemDTO;
import com.drodzewicz.theater.dto.util.PaginatedResponse;
import com.drodzewicz.theater.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/users")
public class AppUserController {

    private final UserService userService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PaginatedResponse<AppUserListItemDTO> getAppUsers(
            @PageableDefault(size = 15, sort = "dateCreated", direction = Sort.Direction.DESC) Pageable pageable,
            @ModelAttribute AppUserFilterDTO filters) {
        Page<AppUserListItemDTO> users = userService.getAppUserList(pageable, filters);

        return new PaginatedResponse<AppUserListItemDTO>(users);
    }

    @PatchMapping("{username}/status")
    @ResponseStatus(HttpStatus.OK)
    public void updateAppUserStatus(@PathVariable("username") String username,
            @RequestParam(required = true) Boolean active) {
        userService.updateUserStatus(username, active);
    }

}
