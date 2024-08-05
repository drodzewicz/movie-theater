package com.drodzewicz.theater.repository;

import java.util.*;
import com.drodzewicz.theater.entity.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    @Query("""
                SELECT t FROM Ticket t
                WHERE t.screening.id = :screeningId
            """)
    List<Ticket> findAllByScreeningId(Long screeningId);
}
