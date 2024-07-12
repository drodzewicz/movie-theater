package com.drodzewicz.theater.mapper.util;

import java.util.List;

public interface DTOMapper<T, D> {

    D toDTO(T entity);

    T fromDTO(D dto);

    List<D> toListDTO(List<T> entityList);

    List<T> fromListDTO(List<D> dtoList);
}
