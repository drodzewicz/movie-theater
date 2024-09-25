package com.drodzewicz.theater.specification;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.Hall;

public class HallSpecification {

    public static Specification<Hall> hasName(String name) {
        return (root, query, builder) -> name != null ? builder.like(root.get("name"), "%" + name + "%") : null;
    }

    public static Specification<Hall> hasLocationIdentifiers(List<String> locationIdentifiers) {
        return (root, query, builder) -> {
            if (locationIdentifiers != null && !locationIdentifiers.isEmpty()) {
                return root.get("location").get("id").in(locationIdentifiers);
            }
            return null;
        };
    }

    public static Specification<Hall> isActive(Boolean active) {
        return (root, query, builder) -> active != null ? builder.equal(root.get("active"), active) : null;
    }
}