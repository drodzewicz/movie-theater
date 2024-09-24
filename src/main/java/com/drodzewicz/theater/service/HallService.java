package com.drodzewicz.theater.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.request.CreateHallDTO;
import com.drodzewicz.theater.dto.request.HallFilterDTO;
import com.drodzewicz.theater.dto.response.HallListItemDTO;
import com.drodzewicz.theater.entity.Hall;

public interface HallService {
    Hall getHallEntityById(Long hallId);

    HallDTO getHallById(Long hallId);

    Page<HallListItemDTO> getHallList(Pageable pageable, HallFilterDTO filters);

    HallDTO createHall(CreateHallDTO hallDTO, Long locationId);

    void deleteHall(Long hallId);

    void updateHallStatus(Long hallId, Boolean active);
}
