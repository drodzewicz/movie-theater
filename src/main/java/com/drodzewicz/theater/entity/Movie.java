package com.drodzewicz.theater.entity;

import java.util.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "rating", precision = 3, scale = 1)
    private BigDecimal rating;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "release_date")
    private LocalDateTime releaseDate;

    @Column(name = "poster_url", length = 255)
    private String posterUrl;

    @Column(name = "trailer_url", length = 255)
    private String trailerUrl;

    @OneToMany(mappedBy = "movie")
    private List<Screening> screenings;

    @OneToMany(mappedBy = "movie")
    private List<UserMovieRating> userRatings;

    @Column(name = "date_added", nullable = false, updatable = false)
    private LocalDateTime dateAdded;

    @PrePersist
    protected void onCreate() {
        this.dateAdded = LocalDateTime.now();
    }
}
