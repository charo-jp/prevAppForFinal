package brunkow.james.SpringTemplate.service;

import brunkow.james.SpringTemplate.api.dto.RegisterProjectRequestDto;
import brunkow.james.SpringTemplate.api.dto.RegisterProjectResponseDto;
import brunkow.james.SpringTemplate.data.model.User;
import brunkow.james.SpringTemplate.data.repositories.UserRepository;
import brunkow.james.SpringTemplate.mapper.Mapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


// Service annotation is a more specialised version of @component which allows the detection and injection of other classes within the program, which are autowired.
// Service classes are meant to be constantly active.
// Means less 'Class class = new Class()' need to happen, more efficient code.
@Service
public class UsersService {
    private static final Logger LOGGER = LoggerFactory.getLogger(UsersService.class);
    private final Mapper mapper;
    private UserRepository userRepository;

    @Autowired
    public UsersService(final Mapper mapper, final UserRepository userRepository) {
        this.mapper = mapper;
        this.userRepository = userRepository;
    }
    public RegisterProjectResponseDto registerProject(final RegisterProjectRequestDto requestDto) {
        User user = mapper.mapCreateUserRequestToUser(requestDto);
        // TODO - Validate that username, email, and names are valid before writing to DB
        try {
            userRepository.save(user);
            return new RegisterProjectResponseDto("success");
        }
        catch (Exception e) {
            LOGGER.warn("Failed to save user " + user + " to the DB with exception" + e);
            return new RegisterProjectResponseDto("failure");
        }
    }
}
