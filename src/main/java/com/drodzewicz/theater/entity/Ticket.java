package com.drodzewicz.theater.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    @Column(name = "blocked")
    private Boolean blocked = false;

    @Builder.Default
    @Column(name = "reserved")
    private Boolean reserved = false;

    @Builder.Default
    @Column(name = "purchased")
    private Boolean purchased = false;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;

    @ManyToOne
    @JoinColumn(name = "screening_order_id")
    private ScreeningOrder order;

    @ManyToOne
    @JoinColumn(name = "screening_id")
    private Screening screening;
}
