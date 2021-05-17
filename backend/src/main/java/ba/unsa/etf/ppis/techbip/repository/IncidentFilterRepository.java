package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Incident;
import ba.unsa.etf.ppis.techbip.request.EmployeeFilterRequest;
import ba.unsa.etf.ppis.techbip.request.IncidentFilterRequest;

import java.util.List;

public interface IncidentFilterRepository {
    List<Incident> findByFilter(IncidentFilterRequest filter);
}
