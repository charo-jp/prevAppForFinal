package brunkow.james.SpringTemplate.api.controller;

import brunkow.james.SpringTemplate.api.dto.InstanceDto;
import brunkow.james.SpringTemplate.api.dto.RequestDto;
import brunkow.james.SpringTemplate.api.dto.ResponseDto;
import brunkow.james.SpringTemplate.data.repositories.UserRepository;
import brunkow.james.SpringTemplate.mapper.Mapper;
import brunkow.james.SpringTemplate.service.UsersService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = {"http://localhost:8081", "http://localhost:8082", "http://localhost:8083", "http://localhost:8084"}) //allows java to accept request from the url
public class Controller {
    
    private final UserRepository userRepository;
    private final Mapper mapper;
    private final UsersService usersService;
    private static final Logger LOGGER = LoggerFactory.getLogger(Controller.class);


    // The autowired annotation is a component of spring's dependency injection.
    // It allows a single instance of an object to be used multiple times, instead of having to make a new object each time the controller is used.
    @Autowired
    public Controller(Mapper mapper, UserRepository userRepository, UsersService usersService) {
        this.mapper = mapper;
        this.userRepository = userRepository;
        this.usersService = usersService;
    }
    // The below are REST mapping methods, which maps specific http endpoints (listed in the brackets next to the @Mapping annotation) to the methods below
    // Uses UserRepository and Mapper objects


    // When this http is called, the below method runs and retrieves a list of all users.

    @GetMapping(value = "/getusers", produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<InstanceDto> getUsers() {
        return userRepository.findAll().stream().map(mapper::mapToDto).collect(Collectors.toList());
    }


    // When this http is called, the below method runs and attempts save the data currently mapped to the RegisterProjectRequestDto class to the database.
    // For more information, look at the UsersService class.
    @PostMapping(value = "/registerUser", produces = "application/json", consumes = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseDto registerUser (@RequestBody @Valid final RequestDto projectRequestDto) {
        LOGGER.info("Received register user request for user : " + projectRequestDto);
        return usersService.registerProject(projectRequestDto);
    }
}