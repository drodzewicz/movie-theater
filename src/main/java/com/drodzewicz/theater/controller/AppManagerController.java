package com.drodzewicz.theater.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.request.AppManagerFilterDTO;
import com.drodzewicz.theater.dto.response.AppManagerUserListItemDTO;
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
@RequestMapping("/api/managers")
public class AppManagerController {

    private final UserService userService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PaginatedResponse<AppManagerUserListItemDTO> getAppManagers(
            @PageableDefault(size = 15, sort = "dateCreated", direction = Sort.Direction.DESC) Pageable pageable,
            @ModelAttribute AppManagerFilterDTO filters) {
        Page<AppManagerUserListItemDTO> users = userService.getAppManagerList(pageable, filters);

        return new PaginatedResponse<AppManagerUserListItemDTO>(users);
    }

    @PatchMapping("{username}/status")
    @ResponseStatus(HttpStatus.OK)
    public void updateAppUserStatus(@PathVariable("username") String username,
            @RequestParam(required = true) Boolean active) {
        userService.updateUserStatus(username, active);
    }

}
