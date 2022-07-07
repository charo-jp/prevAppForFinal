package brunkow.james.SpringTemplate.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

//DTO Stands for Data Transfer Object. It takes a Json input and splits the input based on the data labels given
//TODO Remap these with project specific variable names
public class UserDto {
    @NotNull(message = "userId is mandatory")
    @JsonProperty("user_id")
    private Long userId;

    @NotBlank(message = "username is mandatory")
    @JsonProperty("username")
    private String username;

    @NotBlank(message = "userEmail is mandatory")
    @JsonProperty("user_email")
    private String userEmail;

    @NotBlank(message = "userFirstName is mandatory")
    @JsonProperty("user_first_name")
    private String userFirstName;

    @NotBlank(message = "userLastName is mandatory")
    @JsonProperty("user_second_name")
    private String userLastName;

    public UserDto() {
    }

    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getUserEmail() {
        return userEmail;
    }
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getUserFirstName() {
        return userFirstName;
    }
    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }
    public String getUserLastName() {
        return userLastName;
    }
    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }
}
