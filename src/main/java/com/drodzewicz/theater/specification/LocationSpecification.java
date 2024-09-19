package com.drodzewicz.theater.specification;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.Location;

public class LocationSpecification {

    public static Specification<Location> hasCities(List<String> cities) {
        return (root, query, builder) -> cities != null && !cities.isEmpty() ? root.get("city").in(cities) : null;
    }

    public static Specification<Location> hasCountry(List<String> countries) {
        return (root, query, builder) -> countries != null && !countries.isEmpty() ? root.get("country").in(countries)
                : null;
    }

    public static Specification<Location> hasIdentifier(String identifier) {
        return (root, query,
                builder) -> identifier != null ? builder.like(root.get("identifier"), "%" + identifier + "%") : null;
    }
   
    public static Specification<Location> isActive(Boolean active) {
        return (root, query, builder) -> 
            active != null ? builder.equal(root.get("active"), active) : null;
    }
}