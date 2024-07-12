package com.drodzewicz.theater.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class AppException extends RuntimeException {
    private static final long serialVersionUID = 1;

    public AppException(String message) {
        super(message);
    }
}
