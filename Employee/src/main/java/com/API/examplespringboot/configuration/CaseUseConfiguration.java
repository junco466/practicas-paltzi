package com.API.examplespringboot.configuration;

import com.API.examplespringboot.caseuse.GetUser;
import com.API.examplespringboot.caseuse.GetUserImplement;
import com.API.examplespringboot.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CaseUseConfiguration {

    @Bean
    public GetUser getUser(UserService userService){
        return new GetUserImplement(userService);
    }

}
