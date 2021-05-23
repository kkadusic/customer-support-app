package ba.unsa.etf.ppis.techbip;

import ba.unsa.etf.ppis.techbip.model.Role;
import ba.unsa.etf.ppis.techbip.model.RoleName;
import ba.unsa.etf.ppis.techbip.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TechbipApplication {

	public static void main(String[] args) {
		SpringApplication.run(TechbipApplication.class, args);
	}


	@Bean
	public CommandLineRunner demo(RoleRepository roleRepository) {
		return (args) -> {
			Role admin = new Role(0L, RoleName.ROLE_ADMIN);
			Role employee = new Role(1L, RoleName.ROLE_EMPLOYEE);
			roleRepository.save(admin);
			roleRepository.save(employee);
		};
	}
}
