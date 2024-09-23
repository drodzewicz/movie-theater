package com.drodzewicz.theater.mapper;

import org.mapstruct.Mapper;
import com.drodzewicz.theater.dto.domain.LocationDTO;
import com.drodzewicz.theater.dto.request.CreateLocationDTO;
import com.drodzewicz.theater.dto.response.LocationListItemDTO;
import com.drodzewicz.theater.entity.Location;
import com.drodzewicz.theater.mapper.util.DTOMapper;

@Mapper(componentModel = "spring")
public interface LocationMapper extends DTOMapper<Location, LocationDTO> {
    Location fromCreateDTO(CreateLocationDTO locationDTO);

    LocationListItemDTO toListItemDTO(Location location);
}
