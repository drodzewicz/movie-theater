package com.drodzewicz.theater.service.impl;

import java.util.*;
import java.util.stream.Collectors;
import java.math.BigDecimal;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import com.drodzewicz.theater.dto.domain.ScreenigOrderDTO;
import com.drodzewicz.theater.dto.domain.ScreeningDTO;
import com.drodzewicz.theater.dto.request.CreateOrderDTO;
import com.drodzewicz.theater.entity.ScreeningOrder;
import com.drodzewicz.theater.entity.Ticket;
import com.drodzewicz.theater.entity.user.AppUser;
import com.drodzewicz.theater.exception.ResourceNotFoundException;
import com.drodzewicz.theater.mapper.OrderMapper;
import com.drodzewicz.theater.repository.AppUserRepository;
import com.drodzewicz.theater.repository.OrderRepository;
import com.drodzewicz.theater.repository.ScreeningRepository;
import com.drodzewicz.theater.repository.TicketRepository;
import com.drodzewicz.theater.service.OrderService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@AllArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final AppUserRepository appUserRepository;
    private final ScreeningRepository screeningRepository;
    private final TicketRepository ticketRepository;

    private final OrderMapper orderMapper;

    @Override
    public ScreeningOrder getOrderEntityById(Long orderId) {
        log.debug("Getting order entity {}", orderId);
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Order does not exists with the following id" + orderId));
    }

    @Override
    public ScreenigOrderDTO getOrderById(Long orderId) {
        log.info("Getting order {}", orderId);
        ScreeningOrder order = getOrderEntityById(orderId);
        return orderMapper.toDTO(order);
    }

    @Override
    @Transactional
    public ScreenigOrderDTO createOrder(CreateOrderDTO orderDTO, Long userId) {
        AppUser user = appUserRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "User does not exists with the following id" + userId));

        List<Ticket> tickets = ticketRepository.findAllByScreeningId(orderDTO.getScreeningId());
        List<Ticket> chosenTickets = tickets.stream()
                .filter(it -> orderDTO.getTickets().contains(it.getId()))
                .collect(Collectors.toList());

        BigDecimal pricePerTicket = new BigDecimal(2.2);
        BigDecimal ticketQuantity = new BigDecimal(chosenTickets.size());

        BigDecimal totalPrice = pricePerTicket.multiply(ticketQuantity);

        ScreeningOrder order = ScreeningOrder
                .builder()
                .price(totalPrice)
                .user(user)
                .tickets(chosenTickets)
                .build();

        ScreeningOrder savedOrder = orderRepository.save(order);
        return orderMapper.toDTO(savedOrder);
    }

    @Override
    public void deleteOrder(Long orderId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteOrder'");
    }

    @Override
    public void cancelOrder(Long orderId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'cancelOrder'");
    }

}
