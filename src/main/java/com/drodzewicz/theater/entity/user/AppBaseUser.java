package com.drodzewicz.theater.entity.user;

import org.springframework.security.core.userdetails.UserDetails;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@MappedSuperclass
@SuperBuilder
public abstract class AppBaseUser implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(name = "first_name", nullable = false)
    protected String firstName;

    @Column(name = "last_name", nullable = false)
    protected String lastName;

    @Column(name = "username", nullable = false, unique = true)
    @Size(max = 100)
    protected String username;

    @Column(name = "password", nullable = false)
    @Size(max = 100)
    protected String password;

    @Column(name = "date_created", nullable = false, updatable = false)
    private LocalDateTime dateCreated;

    @Builder.Default
    @Column(name = "active", nullable = false)
    private Boolean active = false;

    @PrePersist
    protected void onCreate() {
        this.dateCreated = LocalDateTime.now();
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
        return this.active;
    }
}
