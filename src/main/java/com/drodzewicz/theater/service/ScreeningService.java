package com.drodzewicz.theater.service;

import java.util.*;
import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.request.CreateScreeningDTO;
import com.drodzewicz.theater.entity.Screening;

public interface ScreeningService {
    Screening getScreeningEntityById(Long screeningId);

    ScreeningDTO getScreeningById(Long screeningId);

    List<ScreeningDTO> getMovieScreeningList(Long movieId);

    ScreeningDTO createScreening(CreateScreeningDTO screeningDTO);

    void publishScreening(Long screeningId);

    void deleteScreening(Long screeningId);
}
