package com.drodzewicz.theater.service;

import java.util.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.domain.LocationDTO;
import com.drodzewicz.theater.dto.request.CreateLocationDTO;
import com.drodzewicz.theater.dto.request.LocationFilterDTO;
import com.drodzewicz.theater.entity.Location;

public interface LocationService {
    Location getLocationEntityById(Long locationId);

    LocationDTO getLocationById(Long locationId);

    Page<LocationDTO> getLocationList(Pageable pageable, LocationFilterDTO filters);

    LocationDTO createLocation(CreateLocationDTO locationDTO);

    void deleteLocation(Long locationId);

    void updateLocationStatus(Long locationId, Boolean active);

    List<AppManagerUserDTO> getLocationManagers(Long locationId);

    List<HallDTO> getLocationHalls(Long locationId);

    void addManagerToLocation(Long locationId, Long managerId);

    void removeManagerFromLocation(Long locationId, Long managerId);

    void addHallToLocation(Long locationId, Long hallId);

    void removeHallFromLocation(Long locationId, Long hallId);

    List<String> getAllDistinctCities();

    List<String> getAllDistinctCountries();
}
