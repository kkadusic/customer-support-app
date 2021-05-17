package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.request.EmployeeFilterRequest;

import java.util.List;

public interface EmployeeFilterRepository {
    List<Employee> findByFilter(EmployeeFilterRequest filter);
}
