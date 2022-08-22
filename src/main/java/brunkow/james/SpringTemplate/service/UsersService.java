package brunkow.james.SpringTemplate.service;

import brunkow.james.SpringTemplate.api.dto.RequestDto;
import brunkow.james.SpringTemplate.api.dto.ResponseDto;
import brunkow.james.SpringTemplate.data.model.User;
import brunkow.james.SpringTemplate.data.repositories.UserRepository;
import brunkow.james.SpringTemplate.enums.CreateProjectRequestResponseEnum;
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
    private final UserRepository userRepository;

    @Autowired
    public UsersService(final Mapper mapper, final UserRepository userRepository) {
        this.mapper = mapper;
        this.userRepository = userRepository;
    }
    public ResponseDto registerProject(final RequestDto requestDto) {
        User user = mapper.mapCreateUserRequestToUser(requestDto);

// Check to see if Student name and ID already exist in database. If so, return warning string
        // if (!userRepository.findByStudentNameIgnoreCase(requestDto.getStudentName()).isEmpty()) {
        //     LOGGER.warn("Tried to register user with Student Name " + requestDto.getStudentName() + " however Student already exists");
        //     return new ResponseDto(CreateProjectRequestResponseEnum.STUDENTNAME_ALREADY_EXISTS.getResponse());
        // }
        // if (!userRepository.findByStudentIdIgnoreCase(requestDto.getStudentId()).isEmpty()) {
        //     LOGGER.warn("Tried to register user with Student ID " + requestDto.getStudentId() + " however this Student ID already exists");
        //     return new ResponseDto(CreateProjectRequestResponseEnum.STUDENTID_ALREADY_EXISTS.getResponse());
        // }
// Save new entry to DB
        try {
            userRepository.save(user);
            return new ResponseDto(CreateProjectRequestResponseEnum.SUCCESS.getResponse());
        }
        catch (Exception e) {
            LOGGER.warn("Failed to save user " + user + " to the DB with exception" + e);
            return new ResponseDto(CreateProjectRequestResponseEnum.FAILURE.getResponse());
        }
    }
}
