package brunkow.james.SpringTemplate.data.model;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name="projects", schema="example_schema")
//Maps data from java to table in database, currently example_schema table projects.
//Todo once this is on K8s, change the database from the temporary database example_schema to persistent db.
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    public Long instanceId;
    @Column(nullable = false)
    public String studentId;
    @Column(nullable = false)
    public String studentName;
    @Column(nullable = false)
    public String degreeTitle;
    @Column(nullable = false)
    public String projectName;
    @Column(nullable = false, name = "supervisor_1_name")
    public String supervisor1Name;
    @Column(name = "supervisor_1_email")
    @Email
    public String supervisor1Email;
    @Column(name = "supervisor_2_name")
    public String supervisor2Name;
    @Column(name = "supervisor_2_email")
    @Email
    public String supervisor2Email;
    @Column
    public Boolean specialResourcesCheck;
    @Column
    public String specialResourcesText;
    @Column
    public Boolean groupProject;
    @Column
    public Boolean ethicsReviewCheck;
    @Column
    public String ethicsReviewText;
    @Column
    public Boolean cybersecProject;


    public Long getInstanceId() {return instanceId;}
    public String getStudentId() {return studentId;}
    public String getStudentName() {return studentName;}
    public String getDegreeTitle() {return degreeTitle;}
    public String getProjectName() {return projectName;}
    public Boolean getGroupProject() {return groupProject;}
    public String getSupervisor1Name() {return supervisor1Name;}
    public String getSupervisor1Email() {return supervisor1Email;}
    public String getSupervisor2Name() {return supervisor2Name;}
    public String getSupervisor2Email() {return supervisor2Email;}
    public Boolean getCybersecProject() {return cybersecProject;}
    public Boolean getEthicsReviewCheck() {return ethicsReviewCheck;}
    public Boolean getSpecialResourcesCheck() {return specialResourcesCheck;}
    public String getEthicsReviewText() {return ethicsReviewText;}
    public String getSpecialResourcesText() {return specialResourcesText;}

    public void setInstanceId(Long instanceId) {this.instanceId = instanceId;}
    public void setStudentId(String studentId) {this.studentId = studentId;}
    public void setStudentName(String studentName) {this.studentName = studentName;}
    public void setDegreeTitle(String degreeTitle) {this.degreeTitle = degreeTitle;}
    public void setProjectName(String projectName) {this.projectName = projectName;}
    public void setGroupProject(Boolean groupProject) {this.groupProject = groupProject;}
    public void setSupervisor1Name(String supervisor1Name) {this.supervisor1Name = supervisor1Name;}
    public void setSupervisor1Email(String supervisor1Email) {this.supervisor1Email = supervisor1Email;}
    public void setSupervisor2Name(String supervisor2Name) {this.supervisor2Name = supervisor2Name;}
    public void setSupervisor2Email(String supervisor2Email) {this.supervisor2Email = supervisor2Email;}
    public void setCybersecProject(Boolean cybersecProject) {this.cybersecProject = cybersecProject;}
    public void setEthicsReviewCheck(Boolean ethicsReviewCheck) {this.ethicsReviewCheck = ethicsReviewCheck;}
    public void setEthicsReviewText(String ethicsReviewText) {this.ethicsReviewText = ethicsReviewText;}
    public void setSpecialResourcesCheck(Boolean specialResourcesCheck) {this.specialResourcesCheck = specialResourcesCheck;}
    public void setSpecialResourcesText(String specialResourcesText) {this.specialResourcesText = specialResourcesText;}
}

