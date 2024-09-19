package com.drodzewicz.theater.repository;

import com.drodzewicz.theater.entity.Hall;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HallRepository extends JpaRepository<Hall, Long>, JpaSpecificationExecutor<Hall> {
    List<Hall> findByLocationId(Long locationId);

    @Query("""
                SELECT h FROM Hall h
                WHERE h.id = :hallId
                AND h.location.id = :locationId
            """)
    Optional<Hall> findByIdAndLocation(Long hallId, Long locationId);
}
