package brunkow.james.SpringTemplate.mapper;

import brunkow.james.SpringTemplate.api.dto.RegisterProjectRequestDto;
import brunkow.james.SpringTemplate.data.model.User;
import org.springframework.stereotype.Component;

@Component
public class Mapper {
// Uses getters for an object 'user' to set the values presented to the DTO
    public RegisterProjectRequestDto mapToDto(User user) {
        RegisterProjectRequestDto userDto = new RegisterProjectRequestDto();
        userDto.setInstanceId(user.getInstanceId());
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
}
