package com.drodzewicz.theater.repository;

import java.util.*;
import com.drodzewicz.theater.entity.Screening;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreeningRepository extends JpaRepository<Screening, Long>, JpaSpecificationExecutor<Screening> {
    @Query("""
                SELECT s FROM Screening s
                WHERE s.movie.id = :movieId
            """)
    List<Screening> findAllByMovieId(Long movieId);
}