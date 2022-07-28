package brunkow.james.SpringTemplate.data.repositories;


import brunkow.james.SpringTemplate.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public List<User> findAll();
    }

    // Todo add method to specify excactly what parameters to search by here