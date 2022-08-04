package brunkow.james.SpringTemplate.api.dto;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

//DTO Stands for Data Transfer Object.
//It takes a Json input and splits the input based on the data labels given
//This applies to data from the database and from the frontend.
// Incoming data from JSON
public class RegisterProjectRequestDto {

    @NotBlank(message = "studentID not found")
    @JsonProperty("student_id")
    private String studentId;

    @NotBlank(message = "studentName not found")
    @JsonProperty("student_name")
    private String studentName;

    @NotBlank(message = "degreeTitle not found")
    @JsonProperty("degree_title")
    private String degreeTitle;

    @NotBlank(message = "projectName not found")
    @JsonProperty("project_name")
    private String projectName;

    @NotBlank(message = "supervisor1Name not found")
    @JsonProperty("supervisor_1_name")
    private String supervisor1Name;

    @NotBlank(message = "supervisor1Email not found")
    @JsonProperty("supervisor_1_email")
    private String supervisor1Email;

    @JsonProperty("supervisor_2_name")
    private String supervisor2Name;
    @JsonProperty("supervisor_2_email")
    private String supervisor2Email;
    
    @NotNull(message = "specialResourcesCheck quantifier not found")
    @JsonProperty("special_resources_check")
    private Boolean specialResourcesCheck;
    
    @JsonProperty("special_resources_text")
    private String specialResourcesText;
    @NotNull(message = "groupProject quantifier not found")
    @JsonProperty("group_project")
    private Boolean groupProject;
    @NotNull(message = "ethicsReviewCheck quantifier not found")
    @JsonProperty("ethics_review_check")
    private Boolean ethicsReviewCheck;
    @JsonProperty("ethics_review_text")
    private String ethicsReviewText;
    @NotNull(message = "cybersecProject quantifier not found")
    @JsonProperty("cybersec_project")
    private Boolean cybersecProject;




    public RegisterProjectRequestDto() {
    }
    public Boolean getCybersecProject() {return cybersecProject;}
    public void setCybersecProject(Boolean cybersecProject) {this.cybersecProject = cybersecProject;}
    public Boolean getGroupProject() {return groupProject;}
    public void setGroupProject(Boolean groupProject) {this.groupProject = groupProject;}
    public String getDegreeTitle() {return degreeTitle;}
    public void setDegreeTitle(String degreeTitle) {this.degreeTitle = degreeTitle;}
    public String getProjectName() {return projectName;}
    public void setProjectName(String projectName) {this.projectName = projectName;}
    public String getStudentId() {return studentId;}
    public void setStudentId(String studentId) {this.studentId = studentId;}
    public String getStudentName() {return studentName;}
    public void setStudentName(String studentName) {this.studentName = studentName;}
    public String getSupervisor1Email() {return supervisor1Email;}
    public void setSupervisor1Email(String supervisor1Email) {this.supervisor1Email = supervisor1Email;}
    public String getSupervisor1Name() {return supervisor1Name;}
    public void setSupervisor1Name(String supervisor1Name) {this.supervisor1Name = supervisor1Name;}
    public String getSupervisor2Email() {return supervisor2Email;}
    public void setSupervisor2Email(String supervisor2Email) {this.supervisor2Email = supervisor2Email;}
    public String getSupervisor2Name() {return supervisor2Name;}
    public void setSupervisor2Name(String supervisor2Name) {this.supervisor2Name = supervisor2Name;}
    public String getSpecialResourcesText() {return specialResourcesText;}
    public void setSpecialResourcesText(String specialResourcesText) {this.specialResourcesText = specialResourcesText;}
    public String getEthicsReviewText() {return ethicsReviewText;}
    public void setEthicsReviewText(String ethicsReviewText) {this.ethicsReviewText = ethicsReviewText;}
    public Boolean getSpecialResourcesCheck() {return specialResourcesCheck;}
    public void setSpecialResourcesCheck(Boolean specialResourcesCheck) {this.specialResourcesCheck = specialResourcesCheck;}
    public Boolean getEthicsReviewCheck() {return ethicsReviewCheck;}
    public void setEthicsReviewCheck(Boolean ethicsReviewCheck) {this.ethicsReviewCheck = ethicsReviewCheck;}

    @Override
    public String toString() {
        return "RegisterProjectRequestDto{" +
                "studentId='" + studentId + '\'' +
                ", studentName='" + studentName + '\'' +
                ", degreeTitle='" + degreeTitle + '\'' +
                ", projectName='" + projectName + '\'' +
                ", supervisor1Name='" + supervisor1Name + '\'' +
                ", supervisor1Email='" + supervisor1Email + '\'' +
                ", supervisor2Name='" + supervisor2Name + '\'' +
                ", supervisor2Email='" + supervisor2Email + '\'' +
                ", specialResourcesCheck=" + specialResourcesCheck +
                ", specialResourcesText='" + specialResourcesText + '\'' +
                ", groupProject=" + groupProject +
                ", ethicsReviewCheck=" + ethicsReviewCheck +
                ", ethicsReviewText='" + ethicsReviewText + '\'' +
                ", cybersecProject=" + cybersecProject +
                '}';
    }
}
