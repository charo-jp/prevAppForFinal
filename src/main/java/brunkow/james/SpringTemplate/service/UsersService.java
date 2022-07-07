package brunkow.james.SpringTemplate.service;

import brunkow.james.SpringTemplate.data.model.User;
import brunkow.james.SpringTemplate.data.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    private final UserRepository userRepository;

    @Autowired
    public UsersService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
   public List<User> getUsers(){
        return userRepository.findAll();
   }
}
