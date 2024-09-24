package com.drodzewicz.theater.specification;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.user.AppUser;

import jakarta.persistence.criteria.Predicate;

public class AppUserSpecification {

    public static Specification<AppUser> hasSearchTerm(String searchTerm) {
        return (root, query, builder) -> {
            if (searchTerm != null && !searchTerm.isEmpty()) {
                Predicate usernamePredicate = builder.like(root.get("username"), "%" + searchTerm + "%");
                Predicate firstNamePredicate = builder.like(root.get("firstName"), "%" + searchTerm + "%");
                Predicate lastNamePredicate = builder.like(root.get("lastName"), "%" + searchTerm + "%");

                return builder.or(usernamePredicate, firstNamePredicate, lastNamePredicate);
            }
            return null;
        };
    }

    public static Specification<AppUser> isActive(Boolean active) {
        return (root, query, builder) -> active != null ? builder.equal(root.get("active"), active) : null;
    }
}