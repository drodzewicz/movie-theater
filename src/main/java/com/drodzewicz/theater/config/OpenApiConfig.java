package com.drodzewicz.theater.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
    info = @Info(
        description = "Open api description for theater app",
        title =  "Theater app specification",
        version = "1.0"
    ),
    security = {
        @SecurityRequirement(
            name =  "sessionAuth"
        )
    }
)
@SecurityScheme(
    name = "sessionAuth",
    type = SecuritySchemeType.APIKEY,
    in = SecuritySchemeIn.COOKIE,
    paramName = "JSESSIONID"
)
public class OpenApiConfig {
}
