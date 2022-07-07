package brunkow.james.SpringTemplate.data.model;
import javax.persistence.*;
@Entity
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    public Long userId;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String userEmail;

    @Column(nullable = false)
    public String userFirstName;

    @Column(nullable = false)
    public String userLastName;

    public Long getUserId() { return userId; }
    public String getUsername() { return username; }
    public String getUserFirstName() { return userFirstName; }
    public String getUserLastName() { return userLastName; }
    public String getUserEmail() { return userEmail; }
}
