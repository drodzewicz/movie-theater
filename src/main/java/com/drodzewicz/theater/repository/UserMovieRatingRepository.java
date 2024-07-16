package com.drodzewicz.theater.repository;

import com.drodzewicz.theater.entity.UserMovieRating;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMovieRatingRepository extends JpaRepository<UserMovieRating, Long> {
    @Query("SELECT umr FROM UserMovieRating umr WHERE umr.user.id = :userId AND umr.movie.id = :movieId")
    Optional<UserMovieRating> findByUserIdAndMovieId(Long userId, Long movieId);
}
