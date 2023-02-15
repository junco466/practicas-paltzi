package com.API.examplespringboot.caseuse;

import com.API.examplespringboot.entity.User;
import com.API.examplespringboot.service.UserService;

import java.util.List;

public class GetUserImplement implements GetUser{
    private UserService userService;

    public GetUserImplement(UserService userService) {
        this.userService = userService;
    }

    @Override
    public List<User> getAll() {
        return userService.getAllUsers();
    }
}
