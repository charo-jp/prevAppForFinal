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
        userDto.setSupervisor2Name(user.getSupervisor2Name());
        userDto.setSupervisor2Email(user.getSupervisor2Email());
        userDto.setSpecialResourcesCheck(user.getSpecialResourcesCheck());
        userDto.setSpecialResourcesText(user.getSpecialResourcesText());
        userDto.setGroupProject(user.getGroupProject());
        userDto.setEthicsReviewCheck(user.getEthicsReviewCheck());
        userDto.setEthicsReviewText(user.getEthicsReviewText());
        userDto.setCybersecProject(user.getCybersecProject());
        return userDto;
    }
    public User mapCreateUserRequestToUser(RegisterProjectRequestDto requestDto) {
        User user = new User();
        user.setStudentId(user.getStudentId());
        user.setStudentName(user.getStudentName());
        user.setDegreeTitle(user.getDegreeTitle());
        user.setProjectName(user.getProjectName());
        user.setSupervisor1Name(user.getSupervisor1Name());
        user.setSupervisor1Email(user.getSupervisor1Email());
        user.setSupervisor2Name(user.getSupervisor2Name());
        user.setSupervisor2Email(user.getSupervisor2Email());
        user.setSpecialResourcesCheck(user.getSpecialResourcesCheck());
        user.setSpecialResourcesText(user.getSpecialResourcesText());
        user.setGroupProject(user.getGroupProject());
        user.setEthicsReviewCheck(user.getEthicsReviewCheck());
        user.setEthicsReviewText(user.getEthicsReviewText());
        user.setCybersecProject(user.getCybersecProject());
        return user;
    }
}
