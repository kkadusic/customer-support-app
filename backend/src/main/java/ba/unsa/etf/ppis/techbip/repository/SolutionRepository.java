package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Incident;
import ba.unsa.etf.ppis.techbip.model.Solution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SolutionRepository extends JpaRepository<Solution, Long>, SolutionFilterRepository{
    List<Solution> findByEmployeeId(Long id);
    List<Solution> findByIncidentId(Long id);
}
