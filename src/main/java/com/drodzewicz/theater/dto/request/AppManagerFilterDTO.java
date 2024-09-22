package com.drodzewicz.theater.dto.request;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppManagerFilterDTO implements Serializable {

    private String searchTerm;

    private List<String> appUserRole;

}