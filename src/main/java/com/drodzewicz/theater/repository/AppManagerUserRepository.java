package com.drodzewicz.theater.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.drodzewicz.theater.entity.user.AppManagerUser;

@Repository
public interface AppManagerUserRepository extends JpaRepository<AppManagerUser, Long> {
    Optional<AppManagerUser> findByUsername(String username);

    @Query("""
                SELECT amu FROM AppManagerUser amu
                LEFT JOIN amu.locations loc
                WHERE loc.id = :locationId
            """)
    List<AppManagerUser> findByLocationId(Long locationId);

    @Query("""
                SELECT amu FROM AppManagerUser amu
                JOIN amu.locations loc
                WHERE amu.id = :managerId AND
                loc.id = :locationId
            """)
    Optional<AppManagerUser> findManagerByLocationAndId(Long locationId, Long managerId);
}
