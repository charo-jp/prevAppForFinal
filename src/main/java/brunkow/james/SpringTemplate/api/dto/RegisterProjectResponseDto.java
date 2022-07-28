package brunkow.james.SpringTemplate.api.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class RegisterProjectResponseDto {


    @JsonProperty("request_State")
    private String requestState;

    public RegisterProjectResponseDto(String requestState){
      this.requestState = requestState;
    }
}