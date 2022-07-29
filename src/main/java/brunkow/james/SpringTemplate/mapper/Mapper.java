package brunkow.james.SpringTemplate.mapper;

import brunkow.james.SpringTemplate.api.dto.RegisterProjectRequestDto;
import brunkow.james.SpringTemplate.data.model.User;
import org.springframework.stereotype.Component;

@Component
public class Mapper {
// Uses getters for an object 'user' to set the values presented to the DTO
    public RegisterProjectRequestDto mapToDto(User user) {
        RegisterProjectRequestDto userDto = new RegisterProjectRequestDto();
        userDto.setStudentId(user.getStudentId());
        userDto.setStudentName(user.getStudentName());
        userDto.setDegreeTitle(user.getDegreeTitle());
        userDto.setProjectName(user.getProjectName());
        userDto.setSupervisor1Name(user.getSupervisor1Name());
        userDto.setSupervisor1Email(user.getSupervisor1Email());
        userDto.setGroupProject(user.getGroupProject());
        userDto.setSupervisor2Name(user.getSupervisor2Name());
        userDto.setSupervisor2Email(user.getSupervisor2Email());
        userDto.setCybersecProject(user.getCybersecProject());
        userDto.setEthicsRequired(user.getEthicsRequired());
        return userDto;
    }
    public User mapCreateUserRequestToUser(RegisterProjectRequestDto requestDto) {
        User user = new User();
        user.setStudentId(requestDto.getStudentId());
        user.setStudentName(requestDto.getStudentName());
        user.setDegreeTitle(requestDto.getDegreeTitle());
        user.setProjectName(requestDto.getProjectName());
        user.setSupervisor1Name(requestDto.getSupervisor1Name());
        user.setSupervisor1Email(requestDto.getSupervisor1Email());
        user.setGroupProject(requestDto.getGroupProject());
        user.setSupervisor2Name(requestDto.getSupervisor2Name());
        user.setSupervisor2Email(requestDto.getSupervisor2Email());
        user.setCybersecProject(requestDto.getCybersecProject());
        user.setEthicsRequired(requestDto.getEthicsRequired());
        return user;
    }
}
