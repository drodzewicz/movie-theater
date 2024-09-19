package com.drodzewicz.theater.specification;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.Hall;

public class HallSpecification {

    public static Specification<Hall> hasName(String name) {
        return (root, query, builder) -> name != null ? builder.like(root.get("name"), "%" + name + "%") : null;
    }

    // Filter by a list of Location identifiers
    public static Specification<Hall> hasLocationIdentifiers(List<String> locationIdentifiers) {
        return (root, query, builder) -> {
            if (locationIdentifiers != null && !locationIdentifiers.isEmpty()) {
                return root.get("location").get("identifier").in(locationIdentifiers);
            }
            return null;
        };
    }
}