package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;

import com.drodzewicz.theater.dto.domain.ScreenigOrderDTO;
import com.drodzewicz.theater.entity.ScreeningOrder;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface OrderMapper extends DTOMapper<ScreeningOrder, ScreenigOrderDTO> {
}
