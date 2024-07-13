package com.drodzewicz.theater.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.drodzewicz.theater.entity.user.AppManagerUser;

@Repository
public interface AppManagerUserRepository extends JpaRepository<AppManagerUser, Long> {
    Optional<AppManagerUser> findByUsername(String username);
}
