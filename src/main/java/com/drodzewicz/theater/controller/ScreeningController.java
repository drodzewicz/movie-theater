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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.request.CreateScreeningDTO;
import com.drodzewicz.theater.dto.request.ScreeningFilterDTO;
import com.drodzewicz.theater.dto.response.ScreeningListItemDTO;
import com.drodzewicz.theater.dto.util.PaginatedResponse;
import com.drodzewicz.theater.service.ScreeningService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/screenings")
public class ScreeningController {
    private final ScreeningService screeningService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ScreeningDTO createScreening(@Valid @RequestBody CreateScreeningDTO screeningDTO) {
        ScreeningDTO screening = screeningService.createScreening(screeningDTO);
        return screening;
    }

    // TODO useless enpoding, make it more cusotmizable with differnt filters and
    // pagination
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PaginatedResponse<ScreeningListItemDTO> getScreenings(
            @PageableDefault(size = 15, sort = "dateCreated", direction = Sort.Direction.DESC) Pageable pageable,
            @ModelAttribute ScreeningFilterDTO filters) {
        Page<ScreeningListItemDTO> screenings = screeningService.getScreeningList(pageable, filters);
        return new PaginatedResponse<ScreeningListItemDTO>(screenings);
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ScreeningDTO getScreening(@PathVariable("id") Long screeningId) {
        ScreeningDTO screening = screeningService.getScreeningById(screeningId);

        return screening;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteScreening(@PathVariable("id") Long screeningId) {
        screeningService.deleteScreening(screeningId);
    }

    @PostMapping("{id}/publish")
    @ResponseStatus(HttpStatus.OK)
    public void publishScreening(@PathVariable("id") Long screeningId) {
        screeningService.publishScreening(screeningId);
    }
}
