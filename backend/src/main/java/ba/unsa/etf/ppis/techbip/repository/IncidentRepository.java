package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Incident;
import ba.unsa.etf.ppis.techbip.model.Solution;
import ba.unsa.etf.ppis.techbip.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long>, IncidentFilterRepository {
    List<Incident> findByStatus(Status status);
    List<Incident> findByCategoryId(Long id);
    List<Incident> findByTitle(String title);
}
