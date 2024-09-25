package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;
import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.response.ScreeningListItemDTO;
import com.drodzewicz.theater.entity.Screening;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface ScreeningMapper extends DTOMapper<Screening, ScreeningDTO> {

    ScreeningListItemDTO toListItemDTO(Screening screening);
}
