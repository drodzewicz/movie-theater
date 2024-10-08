package com.drodzewicz.theater.service.impl;

import java.util.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.request.CreateScreeningDTO;
import com.drodzewicz.theater.dto.request.ScreeningFilterDTO;
import com.drodzewicz.theater.dto.response.ScreeningListItemDTO;
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
import com.drodzewicz.theater.specification.ScreeningSpecification;

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
    public Page<ScreeningListItemDTO> getScreeningList(Pageable pageable, ScreeningFilterDTO filters) {
        log.info("Getting screenings with pagination {} and filters {}", pageable, filters);
        Specification<Screening> spec = Specification.where(ScreeningSpecification.hasHall(filters.getHall()))
                .and(ScreeningSpecification.hasLocation(filters.getLocation()))
                .and(ScreeningSpecification.hasLocation(filters.getMovie()))
                .and(ScreeningSpecification.isPublished(filters.getPublished()));

        Page<Screening> movieScreenings = screeningRepository.findAll(spec, pageable);
        return movieScreenings.map(screeningMapper::toListItemDTO);
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
        screening.setPublished(true);

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
        log.info("Created {} number of tickets for a published screening {}", tickets.size(), screeningId);

        List<Ticket> savedTickets = ticketRepository.saveAll(tickets);
        screening.setTickets(savedTickets);
        screeningRepository.save(screening);
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
