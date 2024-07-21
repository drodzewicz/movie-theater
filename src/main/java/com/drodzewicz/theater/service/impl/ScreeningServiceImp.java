package com.drodzewicz.theater.service.impl;

import java.util.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.request.CreateScreeningDTO;
import com.drodzewicz.theater.entity.Hall;
import com.drodzewicz.theater.entity.Movie;
import com.drodzewicz.theater.entity.Screening;
import com.drodzewicz.theater.entity.Seat;
import com.drodzewicz.theater.entity.Ticket;
import com.drodzewicz.theater.exception.AppException;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.ScreeningMapper;
import com.drodzewicz.theater.repository.HallRepository;
import com.drodzewicz.theater.repository.MovieRepository;
import com.drodzewicz.theater.repository.ScreeningRepository;
import com.drodzewicz.theater.repository.TicketRepository;
import com.drodzewicz.theater.service.ScreeningService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class ScreeningServiceImp implements ScreeningService {

    private final ScreeningRepository screeningRepository;
    private final HallRepository hallRepository;
    private final MovieRepository movieRepository;
    private final TicketRepository ticketRepository;

    private final ScreeningMapper screeningMapper;

    @Override
    public Screening getScreeningEntityById(Long screeningId) {
        log.debug("Getting screeing entity {}", screeningId);
        return screeningRepository.findById(screeningId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Screening does not exists with the following id" + screeningId));
    }

    @Override
    public ScreeningDTO getScreeningById(Long screeningId) {
        log.info("Getting screening {}", screeningId);
        Screening screening = getScreeningEntityById(screeningId);
        return screeningMapper.toDTO(screening);
    }

    @Override
    public List<ScreeningDTO> getMovieScreeningList(Long movieId) {
        log.info("Getting movie screenings");
        List<Screening> movieScreenings = screeningRepository.findAllByMovieId(movieId);
        return screeningMapper.toListDTO(movieScreenings);
    }

    @Override
    @Transactional
    public ScreeningDTO createScreening(CreateScreeningDTO screeningDTO) {
        log.info("Creating a new screening {}", screeningDTO);
        Hall hall = hallRepository.findById(screeningDTO.getHallId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Hall does not exists with the following id" + screeningDTO.getHallId()));

        Movie movie = movieRepository.findById(screeningDTO.getMovieId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Movie does not exists with the following id" + screeningDTO.getMovieId()));

        Screening screening = Screening
                .builder()
                .movie(movie)
                .hall(hall)
                .date(screeningDTO.getDate())
                .build();

        screeningRepository.save(screening);
        return screeningMapper.toDTO(screening);
    }

    @Override
    @Transactional
    public void publishScreening(Long screeningId) {
        log.info("Publish screening {}", screeningId);
        Screening screening = getScreeningEntityById(screeningId);

        if (screening.getPublished()) {
            log.info("Screening {} has already been published", screeningId);
            throw new AppException("Screenign is already published");
        }

        Hall hall = screening.getHall();

        List<Ticket> tickets = new ArrayList<>();

        for (Seat seat : hall.getSeats()) {
            Ticket ticket = Ticket
                    .builder()
                    .seat(seat)
                    .screening(screening)
                    .build();
            tickets.add(ticket);
        }

        List<Ticket> savedTickets = ticketRepository.saveAll(tickets);
        screening.setTickets(savedTickets);
    }

    @Override
    public void deleteScreening(Long screeningId) {
        log.info("Deleting screening {}", screeningId);
        Screening screening = getScreeningEntityById(screeningId);

        if (screening.getPublished()) {
            log.info("Screening {} is published and is not possible to delete", screeningId);
            throw new AppException("Can't delete a published screening");
        }
        screeningRepository.delete(screening);
    }

}
