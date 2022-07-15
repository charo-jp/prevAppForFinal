package brunkow.james.SpringTemplate.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotNull;

public class RegisterProjectResponseDto {

    @NotNull(message = "instanceID not found")
    @JsonProperty("instance_id")
    private Long instanceId;
    @JsonProperty("request_State")
    private String requestState;

    public RegisterProjectResponseDto(Long instanceId, String requestState){
        this.instanceId = instanceId;
        this.requestState = requestState;
    }
}