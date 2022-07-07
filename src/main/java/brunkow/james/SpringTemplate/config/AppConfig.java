package brunkow.james.SpringTemplate.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableScheduling
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "brunkow.james.SpringTemplate.data.repositories")
public class AppConfig {
}
