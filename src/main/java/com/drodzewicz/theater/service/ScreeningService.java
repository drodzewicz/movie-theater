package com.drodzewicz.theater.service;

import java.util.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.request.CreateScreeningDTO;
import com.drodzewicz.theater.dto.request.ScreeningFilterDTO;
import com.drodzewicz.theater.dto.response.ScreeningListItemDTO;
import com.drodzewicz.theater.entity.Screening;

public interface ScreeningService {
    Screening getScreeningEntityById(Long screeningId);

    ScreeningDTO getScreeningById(Long screeningId);

    Page<ScreeningListItemDTO> getScreeningList(Pageable pageable, ScreeningFilterDTO filters);

    ScreeningDTO createScreening(CreateScreeningDTO screeningDTO);

    void publishScreening(Long screeningId);

    void deleteScreening(Long screeningId);
}
