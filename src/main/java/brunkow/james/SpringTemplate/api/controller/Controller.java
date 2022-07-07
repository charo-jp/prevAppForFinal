package brunkow.james.SpringTemplate.api.controller;
import brunkow.james.SpringTemplate.api.dto.UserDto;
import brunkow.james.SpringTemplate.data.repositories.UserRepository;
import brunkow.james.SpringTemplate.mapper.Mapper;
import brunkow.james.SpringTemplate.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
public class Controller {
    private UserRepository userRepository;
    private Mapper mapper;

    @Autowired
    public Controller(Mapper mapper, UserRepository userRepository) {
        this.mapper = mapper;
        this.userRepository = userRepository;
    }

    @GetMapping(value = "/getusers", produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(user -> mapper.mapToDto(user)).collect(Collectors.toList());
    }
}