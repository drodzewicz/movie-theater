package com.drodzewicz.theater.exception;

import java.util.*;
import java.util.stream.*;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import com.drodzewicz.theater.dto.util.ErrorResponse;

@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {
        @ExceptionHandler(ResourceNotFoundException.class)
        @ResponseStatus(value = HttpStatus.NOT_FOUND)
        public ErrorResponse handleResourceNotFoundException(ResourceNotFoundException ex,
                        WebRequest request) {
                return ErrorResponse
                                .builder()
                                .statusCode(HttpStatus.NOT_FOUND.value())
                                .message(ex.getMessage())
                                .build();
        }

        @ExceptionHandler(Exception.class)
        @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
        public ErrorResponse handleException(Exception ex, WebRequest request) {
                return ErrorResponse
                                .builder()
                                .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                                .message(ex.getMessage())
                                .build();
        }

        @ExceptionHandler(MethodArgumentNotValidException.class)
        @ResponseStatus(value = HttpStatus.BAD_REQUEST)
        public ErrorResponse handleValidationException(MethodArgumentNotValidException ex) {
                Map<String, String> errors = ex.getBindingResult().getFieldErrors()
                                .stream()
                                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));

                return ErrorResponse
                                .builder()
                                .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                                .message(ex.getMessage())
                                .errors(errors)
                                .build();
        }

        @ExceptionHandler(AccessDeniedException.class)
        @ResponseStatus(value = HttpStatus.FORBIDDEN)
        public ErrorResponse handleAccessDeniedException(AccessDeniedException ex) {
                return ErrorResponse
                                .builder()
                                .statusCode(HttpStatus.FORBIDDEN.value())
                                .message(ex.getMessage())
                                .build();
        }
}
