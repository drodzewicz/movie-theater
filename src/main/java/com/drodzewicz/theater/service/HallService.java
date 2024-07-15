package com.drodzewicz.theater.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.request.CreateHallDTO;
import com.drodzewicz.theater.entity.Hall;

public interface HallService {
    Hall getHallEntityById(Long hallId);

    HallDTO getHallById(Long hallId);

    Page<HallDTO> getHallList(Pageable pageable);

    HallDTO createHall(CreateHallDTO hallDTO);

    void deleteHall(Long hallId);
}
