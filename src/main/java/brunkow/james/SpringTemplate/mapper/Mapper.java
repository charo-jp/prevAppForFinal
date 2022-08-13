package brunkow.james.SpringTemplate.mapper;

import brunkow.james.SpringTemplate.api.dto.InstanceDto;
import brunkow.james.SpringTemplate.api.dto.RequestDto;
import brunkow.james.SpringTemplate.data.model.User;
import org.springframework.stereotype.Component;

@Component
public class Mapper {
// Uses getters for an object 'user' to set the values presented to the DTO
    public InstanceDto mapToDto(User user) {
        InstanceDto instanceDto = new InstanceDto();
        instanceDto.setStudentId(user.getStudentId());
        instanceDto.setStudentName(user.getStudentName());
        instanceDto.setDegreeTitle(user.getDegreeTitle());
        instanceDto.setProjectName(user.getProjectName());
        instanceDto.setSupervisor1Name(user.getSupervisor1Name());
        instanceDto.setSupervisor1Email(user.getSupervisor1Email());
        instanceDto.setSupervisor2Name(user.getSupervisor2Name());
        instanceDto.setSupervisor2Email(user.getSupervisor2Email());
        instanceDto.setSpecialResourcesCheck(user.getSpecialResourcesCheck());
        instanceDto.setSpecialResourcesText(user.getSpecialResourcesText());
        instanceDto.setGroupProject(user.getGroupProject());
        instanceDto.setEthicsReviewCheck(user.getEthicsReviewCheck());
        instanceDto.setEthicsReviewText(user.getEthicsReviewText());
        instanceDto.setCybersecProject(user.getCybersecProject());
        return instanceDto;

    }
    public User mapCreateUserRequestToUser(RequestDto requestDto) {
        User user = new User();
        user.setStudentId(requestDto.getStudentId());
        user.setStudentName(requestDto.getStudentName());
        user.setDegreeTitle(requestDto.getDegreeTitle());
        user.setProjectName(requestDto.getProjectName());
        user.setSupervisor1Name(requestDto.getSupervisor1Name());
        user.setSupervisor1Email(requestDto.getSupervisor1Email());
        user.setSupervisor2Name(requestDto.getSupervisor2Name());
        user.setSupervisor2Email(requestDto.getSupervisor2Email());
        user.setSpecialResourcesCheck(requestDto.getSpecialResourcesCheck());
        user.setSpecialResourcesText(requestDto.getSpecialResourcesText());
        user.setGroupProject(requestDto.getGroupProject());
        user.setEthicsReviewCheck(requestDto.getEthicsReviewCheck());
        user.setEthicsReviewText(requestDto.getEthicsReviewText());
        user.setCybersecProject(requestDto.getCybersecProject());
        return user;
    }
}
