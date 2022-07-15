package brunkow.james.SpringTemplate.api.controller;

import brunkow.james.SpringTemplate.api.dto.RegisterProjectRequestDto;
import brunkow.james.SpringTemplate.api.dto.RegisterProjectResponseDto;
import brunkow.james.SpringTemplate.data.repositories.UserRepository;
import brunkow.james.SpringTemplate.mapper.Mapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;


@RestController
public class Controller {
    private UserRepository userRepository;
    private Mapper mapper;
    private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);

    @Autowired
    public Controller(Mapper mapper, UserRepository userRepository) {
        this.mapper = mapper;
        this.userRepository = userRepository;
    }

    @GetMapping(value = "/getusers", produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<RegisterProjectRequestDto> getUsers() {
        return userRepository.findAll().stream().map(user -> mapper.mapToDto(user)).collect(Collectors.toList());
    }

    // TODO: 12/07/2022  Add logic to map inputs from json to framework that inputs data to sql
    @PostMapping (value = "/register", produces = "application/json", consumes = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.ACCEPTED)
    public RegisterProjectResponseDto registerProject(@RequestBody @Valid final RegisterProjectRequestDto requestDto){
        LOGGER.info(requestDto.toString());
        return new RegisterProjectResponseDto(requestDto.getInstanceId(), "Success!");
    }

}