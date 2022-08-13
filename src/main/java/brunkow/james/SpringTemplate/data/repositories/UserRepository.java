package brunkow.james.SpringTemplate.data.repositories;


import brunkow.james.SpringTemplate.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public List<User> findAll();
    public List<User> findByStudentNameIgnoreCase(String studentName);
    public List<User>findByStudentIdIgnoreCase(String studentId);
    public List<User>findByDegreeTitleIgnoreCase(String degreeTitle);
    public List<User>findByProjectNameIgnoreCase(String projectName);
    public List<User>findBySupervisor1NameIgnoreCase(String supervisor1Name);
    public List<User>findBySupervisor1EmailIgnoreCase(String supervisor1Email);
    public List<User>findByGroupProjectEquals(Boolean groupProject);
    public List<User>findByCybersecProjectEquals(Boolean cybersecProject);
    public List<User>findByethicsReviewCheckEquals(Boolean ethicsReviewCheck);


    }

    // Todo add method to specify excactly what parameters to search by here