package com.drodzewicz.theater.entity.user;

import java.util.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.drodzewicz.theater.entity.ScreeningOrder;
import com.drodzewicz.theater.entity.UserMovieRating;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Entity
@Table(name = "app_user")
public class AppUser extends AppBaseUser {
    @OneToMany(mappedBy = "user")
    private List<ScreeningOrder> orders;

    @OneToMany(mappedBy = "user")
    private List<UserMovieRating> ratings;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
    }

}
