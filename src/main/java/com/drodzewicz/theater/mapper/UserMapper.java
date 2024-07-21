package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.dto.domain.AppUserDTO;
import com.drodzewicz.theater.dto.request.SignUpDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface UserMapper extends DTOMapper<AppUser, AppUserDTO> {

    @Mapping(target = "password", ignore = true)
    AppUser fromSignUpDTO(SignUpDTO signUpDTO);

    AppBaseUserDTO toBaseUserDTO(AppUser user);

    AppBaseUserDTO toBaseUserDTO(AppBaseUser user);
}
