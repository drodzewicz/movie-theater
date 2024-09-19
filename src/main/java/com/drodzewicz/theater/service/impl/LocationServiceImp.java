package com.drodzewicz.theater.service.impl;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.domain.LocationDTO;
import com.drodzewicz.theater.dto.request.CreateLocationDTO;
import com.drodzewicz.theater.dto.request.LocationFilterDTO;
import com.drodzewicz.theater.entity.Hall;
import com.drodzewicz.theater.entity.Location;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.exception.AppException;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.HallMapper;
import com.drodzewicz.theater.mapper.LocationMapper;
import com.drodzewicz.theater.mapper.UserMangerMapper;
import com.drodzewicz.theater.repository.AppManagerUserRepository;
import com.drodzewicz.theater.repository.HallRepository;
import com.drodzewicz.theater.repository.LocationRepository;
import com.drodzewicz.theater.service.LocationService;
import com.drodzewicz.theater.specification.LocationSpecification;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class LocationServiceImp implements LocationService {

    private final LocationRepository locationRepository;
    private final AppManagerUserRepository appManagerUserRepository;
    private final HallRepository hallRepository;

    private final LocationMapper locationMapper;
    private final UserMangerMapper userMangerMapper;
    private final HallMapper hallMapper;

    @Override
    public Location getLocationEntityById(Long locationId) {
        log.debug("Getting location entity {}", locationId);
        return locationRepository.findById(locationId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Location does not exists with the following id" + locationId));
    }

    @Override
    public LocationDTO getLocationById(Long locationId) {
        log.info("Getting location {}", locationId);
        Location location = getLocationEntityById(locationId);
        return locationMapper.toDTO(location);
    }

    @Override
    public Page<LocationDTO> getLocationList(Pageable pageable, LocationFilterDTO filters) {
        log.info("Getting locations with pagination {} and filters {}", pageable, filters);
        Specification<Location> spec = Specification.where(LocationSpecification.hasIdentifier(filters.getIdentifier()))
                .and(LocationSpecification.hasCities(filters.getCity()))
                .and(LocationSpecification.hasCountry(filters.getCountry()))
                .and(LocationSpecification.isActive(filters.getActive()));

        Page<Location> locations = locationRepository.findAll(spec, pageable);
        return locations.map(locationMapper::toDTO);
    }

    @Override
    public LocationDTO createLocation(CreateLocationDTO locationDTO) {
        log.info("Creating new location {}", locationDTO);
        Location location = locationMapper.fromCreateDTO(locationDTO);
        Location savedLocation = locationRepository.save(location);

        return locationMapper.toDTO(savedLocation);
    }

    @Override
    public void deleteLocation(Long locationId) {
        log.info("Deleting location {}", locationId);
        Location location = getLocationEntityById(locationId);
        locationRepository.delete(location);
    }

    @Override
    public List<AppManagerUserDTO> getLocationManagers(Long locationId) {
        log.info("Get location {} managers", locationId);
        List<AppManagerUser> managers = appManagerUserRepository.findByLocationId(locationId);
        return userMangerMapper.toListDTO(managers);
    }

    @Override
    public List<HallDTO> getLocationHalls(Long locationId) {
        log.info("Get location {} halls", locationId);
        List<Hall> halls = hallRepository.findByLocationId(locationId);
        return hallMapper.toListDTO(halls);
    }

    @Override
    public void addManagerToLocation(Long locationId, Long managerId) {
        log.info("Add manager {} to location {}", managerId, locationId);

        Location location = getLocationEntityById(locationId);
        AppManagerUser manager = appManagerUserRepository.findById(managerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Manager does not exists with the following id" + managerId));

        appManagerUserRepository.findManagerByLocationAndId(locationId, managerId)
                .ifPresent(existingManager -> {
                    throw new AppException("Manager is already a part of this location");
                });

        manager.getLocations().add(location);

        appManagerUserRepository.save(manager);
    }

    @Override
    public void removeManagerFromLocation(Long locationId, Long managerId) {
        log.info("Remove manager {} to location {}", managerId, locationId);

        Location location = getLocationEntityById(locationId);
        AppManagerUser manager = appManagerUserRepository.findManagerByLocationAndId(locationId, managerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Manager is not part of this location"));

        manager.getLocations().remove(location);
        appManagerUserRepository.save(manager);
    }

    @Override
    public void addHallToLocation(Long locationId, Long hallId) {
        log.info("Add hall {} to location {}", hallId, locationId);

        Location location = getLocationEntityById(locationId);
        Hall hall = hallRepository.findById(hallId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Hall does not exists with the following id" + hallId));

        hallRepository.findByIdAndLocation(hallId, locationId)
                .ifPresent(existingHall -> {
                    throw new AppException("Hall is already a part of this location");
                });

        hall.setLocation(location);
        hallRepository.save(hall);
    }

    @Override
    public void removeHallFromLocation(Long locationId, Long hallId) {
        log.info("Remove hall {} from location {}", hallId, locationId);

        getLocationEntityById(locationId);

        Hall hall = hallRepository.findByIdAndLocation(hallId, locationId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Hall is not a part of this location"));

        hall.setLocation(null);
        hallRepository.save(hall);
    }

    @Override
    public void updateLocationStatus(Long locationId, Boolean active) {
        log.info("Update location {} status to {}", locationId, active);

        Location location = getLocationEntityById(locationId);
        location.setActive(active);

        locationRepository.save(location);
    }

    @Override
    public List<String> getAllDistinctCities() {
        return locationRepository.findAllDistinctCities();
    }

    @Override
    public List<String> getAllDistinctCountries() {
        return locationRepository.findAllDistinctCountries();
    }

}
