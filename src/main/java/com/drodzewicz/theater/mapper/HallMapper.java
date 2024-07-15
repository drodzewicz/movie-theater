package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.request.CreateHallDTO;
import com.drodzewicz.theater.entity.Hall;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface HallMapper extends DTOMapper<Hall, HallDTO> {
    Hall fromCreateDTO(CreateHallDTO hallDTO);

}
