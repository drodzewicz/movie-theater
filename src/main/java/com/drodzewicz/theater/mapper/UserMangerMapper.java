package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.request.SignUpDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface UserMangerMapper extends DTOMapper<AppManagerUser, AppManagerUserDTO> {

    @Mapping(target = "password", ignore = true)
    AppManagerUser fromSignUpDTO(SignUpDTO signUpDTO);

    AppBaseUserDTO toBaseUserDTO(AppManagerUser user);

    AppBaseUserDTO toBaseUserDTO(AppBaseUser user);

}
