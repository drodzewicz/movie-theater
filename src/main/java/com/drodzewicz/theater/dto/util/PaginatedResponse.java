package com.drodzewicz.theater.dto.util;

import java.util.List;
import org.springframework.data.domain.Page;
import lombok.Getter;

@Getter
public class PaginatedResponse<T> {

    private List<T> data;

    private long itemsCount;

    private int pageCount;

    public PaginatedResponse(Page<T> page) {
        this.data = page.getContent();
        this.itemsCount = page.getTotalElements();
        this.pageCount = page.getTotalPages();
    }
}
