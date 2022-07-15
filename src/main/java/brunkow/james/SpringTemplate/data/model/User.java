package brunkow.james.SpringTemplate.data.model;
import javax.persistence.*;
@Entity
@Table(name="projects", schema="example_schema")
//Using methods from DTO, this class provides getters for the newly attributed java fields.
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
    @Column(nullable = false)
    public String supervisor1Name;
    @Column(nullable = false)
    public String supervisor1Email;
    @Column(nullable = false)
    public Boolean groupProject;
    @Column(nullable = true)
    public String supervisor2Name;
    @Column(nullable = true)
    public String supervisor2Email;
    @Column(nullable = false)
    public Boolean cybersecProject;
    @Column(nullable = false)
    public Boolean ethicsRequired;



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
    public Boolean getEthicsRequired() {return ethicsRequired;}
}
