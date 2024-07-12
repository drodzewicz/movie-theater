package com.drodzewicz.theater.entity;

import java.util.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "app_user")
public class AppUser implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "username", nullable = false, unique = true)
    @Size(max = 100)
    private String username;

    @Column(name = "password", nullable = false)
    @Size(max = 100)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "app_user_role", nullable = true)
    private AppUserRole appUserRole;

    @OneToMany(mappedBy = "user")
    private List<ScreeningOrder> orders;

    @OneToMany(mappedBy = "user")
    private List<UserMovieRating> ratings;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.appUserRole != null) {
            return this.appUserRole.getGrantedAuthorities();
        } else {
            log.warn("User {} has no authoriries", this.username);
            return Collections.emptyList();
        }
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
