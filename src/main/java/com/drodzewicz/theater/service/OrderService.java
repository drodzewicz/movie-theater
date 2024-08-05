package com.drodzewicz.theater.service;

import com.drodzewicz.theater.dto.domain.ScreenigOrderDTO;
import com.drodzewicz.theater.dto.request.CreateOrderDTO;
import com.drodzewicz.theater.entity.ScreeningOrder;

public interface OrderService {
    ScreeningOrder getOrderEntityById(Long orderId);

    ScreenigOrderDTO getOrderById(Long orderId);

    ScreenigOrderDTO createOrder(CreateOrderDTO orderDTO, Long userId);

    void deleteOrder(Long orderId);

    void cancelOrder(Long orderId);
}
