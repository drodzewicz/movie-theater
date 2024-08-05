package com.drodzewicz.theater.repository;

import com.drodzewicz.theater.entity.ScreeningOrder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<ScreeningOrder, Long> {
}