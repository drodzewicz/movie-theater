package com.drodzewicz.theater.entity;

import java.util.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "seat")
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "row")
    private Integer row;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Builder.Default
    @Column(name = "blocked")
    private Boolean blocked = false;

    @ManyToOne
    @JoinColumn(name = "hall_id")
    private Hall hall;

    @OneToMany(mappedBy = "seat")
    private List<Ticket> tickets;
}
