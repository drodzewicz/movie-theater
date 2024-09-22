package com.drodzewicz.theater.specification;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.drodzewicz.theater.entity.user.AppManagerUser;

import jakarta.persistence.criteria.Predicate;

public class AppManagerSpecification {

    public static Specification<AppManagerUser> hasSearchTerm(String searchTerm) {
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

    public static Specification<AppManagerUser> hasRoles(List<String> appUserRoles) {
        return (root, query, builder) -> appUserRoles != null && !appUserRoles.isEmpty()
                ? root.get("appUserRole").in(appUserRoles)
                : null;
    }

}