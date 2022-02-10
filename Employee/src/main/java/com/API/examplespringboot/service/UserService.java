package com.API.examplespringboot.service;

import com.API.examplespringboot.entity.User;
import com.API.examplespringboot.repository.UserRepository;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {
    private final Log LOG = LogFactory.getLog(UserService.class);
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void saveTRansactional(List<User> users){
        users.stream()
                .peek(user -> LOG.info("Usuario insertador" + user))
                .forEach(user -> userRepository.save(user));
                //forEach(userRespository::save);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User save(User newUser) {
        return userRepository.save(newUser);
    }

    public void delete(Long id) {
        userRepository.delete(new User(id));
    }

    public User update(User newUser, Long id) {
        return userRepository.findById(id)
                .map(user -> {
                                user.setEmail(newUser.getEmail());
                                user.setBirthDate(newUser.getBirthDate());
                                user.setName(newUser.getName());
                                return userRepository.save(user);
                             }
                ).get();
    }
}
