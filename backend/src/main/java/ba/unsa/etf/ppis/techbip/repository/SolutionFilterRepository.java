package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Solution;
import ba.unsa.etf.ppis.techbip.request.EmployeeFilterRequest;
import ba.unsa.etf.ppis.techbip.request.SolutionFilterRequest;

import java.util.List;

public interface SolutionFilterRepository {
    List<Solution> findByFilter(SolutionFilterRequest filter);
}
