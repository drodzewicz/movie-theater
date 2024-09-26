package com.drodzewicz.theater.specification;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.Screening;

public class ScreeningSpecification {

    public static Specification<Screening> hasMovie(List<String> movies) {
        return (root, query, builder) -> movies != null && !movies.isEmpty() ? root.get("movie").get("id").in(movies)
                : null;
    }

    public static Specification<Screening> hasHall(List<String> halls) {
        return (root, query, builder) -> halls != null && !halls.isEmpty() ? root.get("hall").get("id").in(halls)
                : null;
    }

    public static Specification<Screening> hasLocation(List<String> locations) {
        return (root, query, builder) -> locations != null && !locations.isEmpty()
                ? root.get("hall").get("location").get("id").in(locations)
                : null;
    }

    public static Specification<Screening> isPublished(Boolean published) {
        return (root, query, builder) -> published != null ? builder.equal(root.get("published"), published) : null;
    }
}