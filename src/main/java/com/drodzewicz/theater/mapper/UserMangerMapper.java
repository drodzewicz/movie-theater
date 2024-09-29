package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.drodzewicz.theater.dto.domain.AppBaseUserDTO;
import com.drodzewicz.theater.dto.domain.AppManagerUserDTO;
import com.drodzewicz.theater.dto.request.RegisterManagerDTO;
import com.drodzewicz.theater.dto.request.SignUpDTO;
import com.drodzewicz.theater.dto.response.AppManagerUserListItemDTO;
import com.drodzewicz.theater.entity.user.AppBaseUser;
import com.drodzewicz.theater.entity.user.AppManagerUser;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface UserMangerMapper extends DTOMapper<AppManagerUser, AppManagerUserDTO> {

    @Mapping(target = "password", ignore = true)
    AppManagerUser fromSignUpDTO(SignUpDTO signUpDTO);

    @Mapping(target = "password", ignore = true)
    AppManagerUser fromRegisterManagerDTO(RegisterManagerDTO registerManagerDTO);

    AppBaseUserDTO toBaseUserDTO(AppManagerUser user);

    AppBaseUserDTO toBaseUserDTO(AppBaseUser user);

    AppManagerUserListItemDTO toListItemDTO(AppManagerUser user);

}
