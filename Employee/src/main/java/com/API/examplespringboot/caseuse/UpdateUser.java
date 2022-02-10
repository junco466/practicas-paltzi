package com.API.examplespringboot.caseuse;

import com.API.examplespringboot.entity.User;
import com.API.examplespringboot.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class UpdateUser {
    private UserService userService;

    public UpdateUser(UserService userService) {
        this.userService = userService;
    }

    public User update(User newUser, Long id) {
        return userService.update(newUser,id);
    }
}
