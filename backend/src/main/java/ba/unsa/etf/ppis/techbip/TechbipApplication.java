package ba.unsa.etf.ppis.techbip;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Role;
import ba.unsa.etf.ppis.techbip.model.RoleName;
import ba.unsa.etf.ppis.techbip.repository.EmployeeRepository;
import ba.unsa.etf.ppis.techbip.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;

@SpringBootApplication
public class TechbipApplication {

	public static void main(String[] args) {
		SpringApplication.run(TechbipApplication.class, args);
	}

}
