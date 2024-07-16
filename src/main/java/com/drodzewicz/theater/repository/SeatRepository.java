package com.drodzewicz.theater.repository;

import com.drodzewicz.theater.entity.Seat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Long> {
}
