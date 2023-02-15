package com.employeeapi.app.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.employeeapi.app.repository")
public class GeneralConfig {
}
