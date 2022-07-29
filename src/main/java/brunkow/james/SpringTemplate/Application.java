package brunkow.james.SpringTemplate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// Main class for spring boot application, able to configure how spring boot runs in this class.
// We do not need to edit this
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
