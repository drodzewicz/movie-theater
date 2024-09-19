package com.drodzewicz.theater.repository;

import java.util.*;

import com.drodzewicz.theater.entity.Location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>, JpaSpecificationExecutor<Location> {

    @Query("SELECT DISTINCT l.city FROM Location l")
    List<String> findAllDistinctCities();

    @Query("SELECT DISTINCT l.country FROM Location l")
    List<String> findAllDistinctCountries();
}
