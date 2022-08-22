package brunkow.james.SpringTemplate.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class InstanceDto {
    @NotNull(message = "instanceId is mandatory")
    @JsonProperty ("instance_id")
    private Long instanceId;
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
    // @NotBlank(message = "supervisor1Email not found")
    @JsonProperty("supervisor_1_email")
    private String supervisor1Email;
    @JsonProperty("supervisor_2_name")
    private String supervisor2Name;
    @JsonProperty("supervisor_2_email")
    private String supervisor2Email;
    // @NotNull(message = "specialResourcesCheck quantifier not found")
    @JsonProperty("special_resources_check")
    private Boolean specialResourcesCheck;
    @JsonProperty("special_resources_text")
    private String specialResourcesText;
    // @NotNull(message = "groupProject quantifier not found")
    @JsonProperty("group_project")
    private Boolean groupProject;
    // @NotNull(message = "ethicsReviewCheck quantifier not found")
    @JsonProperty("ethics_review_check")
    private Boolean ethicsReviewCheck;
    @JsonProperty("ethics_review_text")
    private String ethicsReviewText;
    // @NotNull(message = "cybersecProject quantifier not found")
    @JsonProperty("cybersec_project")
    private Boolean cybersecProject;
    @JsonProperty("project_status")
    private String projectStatus;
    @JsonProperty("ethics_status")
    private String ethicsStatus;

    public InstanceDto(){}
// getters
    public Long getInstanceId() {return instanceId;}
    public String getStudentId() {return studentId;}
    public String getStudentName() {return studentName;}
    public String getDegreeTitle() {return degreeTitle;}
    public String getProjectName() {return projectName;}
    public String getSupervisor1Name() {return supervisor1Name;}
    public String getSupervisor1Email() {return supervisor1Email;}
    public String getSupervisor2Name() {return supervisor2Name;}
    public String getSupervisor2Email() {return supervisor2Email;}
    public Boolean getSpecialResourcesCheck() {return specialResourcesCheck;}
    public String getSpecialResourcesText() {return specialResourcesText;}
    public Boolean getGroupProject() {return groupProject;}
    public Boolean getEthicsReviewCheck() {return ethicsReviewCheck;}
    public String getEthicsReviewText() {return ethicsReviewText;}
    public Boolean getCybersecProject() {return cybersecProject;}
    public String getProjectStatus() {return projectStatus;}
    public String getEthicsStatus() {return ethicsStatus;}
// Setters
    public void setInstanceId(Long instanceId) {this.instanceId = instanceId;}
    public void setStudentId(String studentId) {this.studentId = studentId;}
    public void setStudentName(String studentName) {this.studentName = studentName;}
    public void setDegreeTitle(String degreeTitle) {this.degreeTitle = degreeTitle;}
    public void setProjectName(String projectName) {this.projectName = projectName;}
    public void setSupervisor1Name(String supervisor1Name) {this.supervisor1Name = supervisor1Name;}
    public void setSupervisor1Email(String supervisor1Email) {this.supervisor1Email = supervisor1Email;}
    public void setSupervisor2Name(String supervisor2Name) {this.supervisor2Name = supervisor2Name;}
    public void setSupervisor2Email(String supervisor2Email) {this.supervisor2Email = supervisor2Email;}
    public void setSpecialResourcesCheck(Boolean specialResourcesCheck) {this.specialResourcesCheck = specialResourcesCheck;}
    public void setSpecialResourcesText(String specialResourcesText) {this.specialResourcesText = specialResourcesText;}
    public void setGroupProject(Boolean groupProject) {this.groupProject = groupProject;}
    public void setEthicsReviewCheck(Boolean ethicsReviewCheck) {this.ethicsReviewCheck = ethicsReviewCheck;}
    public void setEthicsReviewText(String ethicsReviewText) {this.ethicsReviewText = ethicsReviewText;}
    public void setCybersecProject(Boolean cybersecProject) {this.cybersecProject = cybersecProject;}
    public void setProjectStatus(String projectStatus) {this.projectStatus = projectStatus;}
    public void setEthicsStatus(String ethicsStatus) {this.ethicsStatus = ethicsStatus;}
// ToString
    @Override
    public String toString() {
        return "InstanceDto{" +
                "instanceId=" + instanceId +
                ", studentId='" + studentId + '\'' +
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
                ", projectStatus=" + projectStatus  +
                ", ethicsStatus=" + ethicsStatus +
                '}';
    }
}
