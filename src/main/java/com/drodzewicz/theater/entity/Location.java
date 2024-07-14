package com.drodzewicz.theater.entity;

import java.util.*;

import com.drodzewicz.theater.entity.user.AppManagerUser;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "street_name", nullable = false)
    private String streetName;

    @Column(name = "building_number", nullable = false)
    private String buildingNumber;

    @Column(name = "zip_code", nullable = false)
    private String zipCode;

    @OneToMany(mappedBy = "location")
    private List<Hall> halls;

    @Builder.Default
    @ManyToMany(mappedBy = "locations")
    private Set<AppManagerUser> appManagerUsers = new HashSet<>();
}
