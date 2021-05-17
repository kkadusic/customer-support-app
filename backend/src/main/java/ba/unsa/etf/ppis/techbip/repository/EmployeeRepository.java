package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Incident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>, EmployeeFilterRepository {

    Optional<Employee> findByEmail(String email);

    Optional<Employee> findByUsername(String username);

    Optional<Employee> findById(Long id);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsById(Long id);
}
