package com.cwm.exam.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {

	private SecurityScheme createAPIKeyScheme() {
	    return new SecurityScheme().type(SecurityScheme.Type.HTTP)
	    	
	        .bearerFormat("Headers")
	        .scheme("Bearer");
	
	}
	
	
	@Bean
	public OpenAPI openAPI() {
	    return new OpenAPI()
	    		.addSecurityItem(new SecurityRequirement().
	            addList("Authentication"))
	        .components(new Components().addSecuritySchemes
	            ("Authentication", createAPIKeyScheme()))
	        .info(new Info().title("Exam Portal Appliction")
	            .description("Some custom description of API.")
	            .version("1.0").contact(new Contact().name("Mayur Bhosale")
	                .email( "mayurbhosale240@gmail.com").url("mayurbhosale240@gmail.com"))
	            .license(new License().name("License of API")
	                .url("API license URL")));
	}

}
