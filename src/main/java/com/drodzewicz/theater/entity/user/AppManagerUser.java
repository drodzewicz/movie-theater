package com.drodzewicz.theater.entity.user;

import java.util.*;

import org.springframework.security.core.GrantedAuthority;

import com.drodzewicz.theater.entity.Location;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Entity
@Table(name = "app_manager_user")
public class AppManagerUser extends AppBaseUser {

    @Enumerated(EnumType.STRING)
    @Column(name = "app_user_role", nullable = true)
    private AppManagerUserRole appUserRole;

    @Builder.Default
    @ManyToMany
    @JoinTable(name = "manager_user_location", joinColumns = @JoinColumn(name = "manager_user_id"), inverseJoinColumns = @JoinColumn(name = "location_id"))
    private Set<Location> locations = new HashSet<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.appUserRole != null) {
            return this.appUserRole.getGrantedAuthorities();
        } else {
            log.warn("Manager user {} has no authoriries", this.username);
            return Collections.emptyList();
        }
    }

}
