package brunkow.james.SpringTemplate.mapper;

import brunkow.james.SpringTemplate.api.dto.UserDto;
import brunkow.james.SpringTemplate.data.model.User;
import org.springframework.stereotype.Component;

@Component
public class Mapper {
// Takes the split Json input from UserDTO and maps it to java variables.
    public UserDto mapToDto(User user) {
        UserDto userDto = new UserDto();

        userDto.setUserId(user.getUserId());
        userDto.setUsername(user.getUsername());
        userDto.setUserEmail(user.getUserEmail());
        userDto.setUserFirstName(user.getUserFirstName());
        userDto.setUserLastName(user.getUserLastName());
        return userDto;
    }
}
