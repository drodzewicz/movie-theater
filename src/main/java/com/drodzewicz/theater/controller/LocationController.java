package com.drodzewicz.theater.controller;

import java.util.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.domain.LocationDTO;
import com.drodzewicz.theater.dto.request.CreateHallDTO;
import com.drodzewicz.theater.dto.request.CreateLocationDTO;
import com.drodzewicz.theater.dto.request.LocationFilterDTO;
import com.drodzewicz.theater.dto.response.LocationListItemDTO;
import com.drodzewicz.theater.dto.util.PaginatedResponse;
import com.drodzewicz.theater.service.HallService;
import com.drodzewicz.theater.service.LocationService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@AllArgsConstructor
@RestController
@ResponseBody
@PreAuthorize("isAuthenticated()")
@RequestMapping("/api/locations")
public class LocationController {

    private final LocationService locationService;
    private final HallService hallService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LocationDTO createLocation(@Valid @RequestBody CreateLocationDTO locationDTO) {
        LocationDTO location = locationService.createLocation(locationDTO);
        return location;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PaginatedResponse<LocationListItemDTO> getLocations(
            @PageableDefault(size = 15, sort = "dateCreated", direction = Sort.Direction.DESC) Pageable pageable,
            @ModelAttribute LocationFilterDTO filters) {

        Page<LocationListItemDTO> locations = locationService.getLocationList(pageable, filters);

        return new PaginatedResponse<LocationListItemDTO>(locations);
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public LocationDTO getLocation(@PathVariable("id") Long locationId) {
        LocationDTO location = locationService.getLocationById(locationId);

        return location;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletelocation(@PathVariable("id") Long locationId) {
        locationService.deleteLocation(locationId);
    }

    @GetMapping("{id}/managers")
    @ResponseStatus(HttpStatus.OK)
    public List<AppManagerUserDTO> getLocationManagers(@PathVariable("id") Long locationId) {
        return locationService.getLocationManagers(locationId);
    }

    @PatchMapping("{id}/status")
    @ResponseStatus(HttpStatus.OK)
    public void updateLocationStatus(@PathVariable("id") Long locationId,
            @RequestParam(required = true) Boolean active) {
        locationService.updateLocationStatus(locationId, active);
    }

    @PatchMapping("{id}/managers/{managerId}")
    @ResponseStatus(HttpStatus.OK)
    public void addManagerToLocation(
            @PathVariable("id") Long locationId,
            @PathVariable("managerId") Long managerId) {
        locationService.addManagerToLocation(locationId, managerId);
    }

    @DeleteMapping("{id}/managers/{managerId}")
    @ResponseStatus(HttpStatus.OK)
    public void removeManagerToLocation(
            @PathVariable("id") Long locationId,
            @PathVariable("managerId") Long managerId) {
        locationService.removeManagerFromLocation(locationId, managerId);
    }

    @GetMapping("{id}/halls")
    @ResponseStatus(HttpStatus.OK)
    public List<HallDTO> getLocationHalls(@PathVariable("id") Long locationId) {
        return locationService.getLocationHalls(locationId);
    }

    @PostMapping("{id}/halls")
    @ResponseStatus(HttpStatus.CREATED)
    public HallDTO createHall(@PathVariable("id") Long locationId, @Valid @RequestBody CreateHallDTO hallDTO) {
        HallDTO hall = hallService.createHall(hallDTO, locationId);
        return hall;
    }

    @PatchMapping("{id}/halls/{hallId}")
    @ResponseStatus(HttpStatus.OK)
    public void addHallToLocation(
            @PathVariable("id") Long locationId,
            @PathVariable("hallId") Long hallId) {
        locationService.addHallToLocation(locationId, hallId);
    }

    @DeleteMapping("{id}/halls/{hallId}")
    @ResponseStatus(HttpStatus.OK)
    public void removeHallToLocation(
            @PathVariable("id") Long locationId,
            @PathVariable("hallId") Long hallId) {
        locationService.removeHallFromLocation(locationId, hallId);
    }

}
