package com.drodzewicz.theater.dto.util;

import java.util.Date;
import java.util.Map;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorResponse {
    private Integer statusCode;
    private String message;
    @Builder.Default
    private Date timeStamp = new Date();
    private Map<String, String> errors;
}
