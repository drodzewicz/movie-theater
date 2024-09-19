package com.drodzewicz.theater.controller;

import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.LocationDTO;
import com.drodzewicz.theater.dto.request.LocationFilterDTO;
import com.drodzewicz.theater.dto.util.PaginatedResponse;
import com.drodzewicz.theater.service.LocationService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/filter-options")
public class FilterOptionsController {

    private final LocationService locationService;

    @GetMapping("/cities")
    @ResponseStatus(HttpStatus.OK)
    public List<String> getAllDistinctCities() {
        List<String> cities = locationService.getAllDistinctCities();

        return cities;
    }

    @GetMapping("/countries")
    @ResponseStatus(HttpStatus.OK)
    public List<String> getAllDistinctCountries() {
        List<String> cities = locationService.getAllDistinctCountries();

        return cities;
    }
}
