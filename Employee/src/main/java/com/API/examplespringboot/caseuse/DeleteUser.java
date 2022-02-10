package com.API.examplespringboot.caseuse;

import com.API.examplespringboot.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class DeleteUser {
    private UserService userService;

    public DeleteUser(UserService userService) {
        this.userService = userService;
    }

    public void remove(Long id) {
        userService.delete(id);
    }
}
