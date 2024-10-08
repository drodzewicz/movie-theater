package com.drodzewicz.theater.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.request.HallFilterDTO;
import com.drodzewicz.theater.dto.response.HallListItemDTO;
import com.drodzewicz.theater.dto.util.PaginatedResponse;
import com.drodzewicz.theater.service.HallService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/halls")
public class HallController {
    private final HallService hallService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PaginatedResponse<HallListItemDTO> getHalls(
            @PageableDefault(size = 15, sort = "dateCreated", direction = Sort.Direction.DESC) Pageable pageable,
            @ModelAttribute HallFilterDTO filters) {
        Page<HallListItemDTO> halls = hallService.getHallList(pageable, filters);

        return new PaginatedResponse<HallListItemDTO>(halls);
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public HallDTO getHall(@PathVariable("id") Long hallId) {
        HallDTO hall = hallService.getHallById(hallId);

        return hall;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteHall(@PathVariable("id") Long hallId) {
        hallService.deleteHall(hallId);
    }

    @PatchMapping("{id}/status")
    @ResponseStatus(HttpStatus.OK)
    public void updateHallStatus(@PathVariable("id") Long hallId,
            @RequestParam(required = true) Boolean active) {
        hallService.updateHallStatus(hallId, active);
    }
}
