package com.drodzewicz.theater.specification;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.Movie;

public class MovieSpecification {

    public static Specification<Movie> hasTitle(String title) {
        return (root, query,
                builder) -> title != null ? builder.like(root.get("title"), "%" + title + "%") : null;
    }

}