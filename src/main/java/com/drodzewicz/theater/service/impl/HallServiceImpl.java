package com.drodzewicz.theater.service.impl;

import java.util.*;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.HallDTO;
import com.drodzewicz.theater.dto.request.CreateHallDTO;
import com.drodzewicz.theater.entity.Hall;
import com.drodzewicz.theater.entity.Location;
import com.drodzewicz.theater.entity.Seat;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.HallMapper;
import com.drodzewicz.theater.repository.HallRepository;
import com.drodzewicz.theater.repository.LocationRepository;
import com.drodzewicz.theater.repository.SeatRepository;
import com.drodzewicz.theater.service.HallService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class HallServiceImpl implements HallService {

    private final HallRepository hallRepository;
    private final LocationRepository locationRepository;
    private final SeatRepository seatRepository;

    private final HallMapper hallMapper;

    @Override
    public Hall getHallEntityById(Long hallId) {
        log.debug("Getting hall entity {}", hallId);
        return hallRepository.findById(hallId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Hall does not exists with the following id" + hallId));
    }

    @Override
    public HallDTO getHallById(Long hallId) {
        log.info("Getting hall {}", hallId);
        Hall hall = getHallEntityById(hallId);
        return hallMapper.toDTO(hall);
    }

    @Override
    public Page<HallDTO> getHallList(Pageable pageable) {
        log.info("Getting halls");
        Page<Hall> halls = hallRepository.findAll(pageable);
        return halls.map(hallMapper::toDTO);
    }

    @Override
    @Transactional
    public HallDTO createHall(CreateHallDTO hallDTO, Long locationId) {
        log.info("Creating new hall {}", hallDTO);

        Location location = locationRepository.findById(locationId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Location does not exists with the following id" + locationId));

        Hall hall = hallMapper.fromCreateDTO(hallDTO);
        hall.setLocation(location);
        hall.setSeats(new ArrayList<>());

        Hall savedHall = hallRepository.save(hall);

        List<Seat> seats = new ArrayList<>();

        for (int rowIndex = 0; rowIndex < hallDTO.getRowCount(); rowIndex++) {
            for (int seatIndex = 0; seatIndex < hallDTO.getSeatCountPerRow(); seatIndex++) {
                Seat seat = Seat.builder()
                        .row(rowIndex)
                        .number(seatIndex)
                        .hall(savedHall)
                        .build();
                seats.add(seat);
            }
        }

        List<Seat> savedSeats = seatRepository.saveAll(seats);
        savedHall.setSeats(savedSeats);

        return hallMapper.toDTO(savedHall);
    }

    @Override
    public void deleteHall(Long hallId) {
        log.info("Deleting hall {}", hallId);
        Hall hall = getHallEntityById(hallId);
        hallRepository.delete(hall);
    }

}
