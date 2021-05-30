package ba.unsa.etf.ppis.techbip.service;

import ba.unsa.etf.ppis.techbip.exception.ResourceNotFoundException;
import ba.unsa.etf.ppis.techbip.model.*;
import ba.unsa.etf.ppis.techbip.repository.*;
import ba.unsa.etf.ppis.techbip.request.*;
import ba.unsa.etf.ppis.techbip.response.Response;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class IncidentManagementService {

    private final IncidentRepository incidentRepository;
    private final SolutionRepository solutionRepository;
    private final CategoryRepository categoryRepository;
    private final ClientRepository clientRepository;
    private final EmployeeRepository employeeRepository;

    public List<Incident> getIncidents() {
        List<Incident> incidents = incidentRepository.findAll();
        if (incidents.size() == 0)
            throw new ResourceNotFoundException("Incident does not exist.");
        return incidents;
    }

    public List<Incident> getIncidentsStatus(String status) {
        List<Incident> incidents = incidentRepository.findByStatus(Status.valueOf(status));
        if (incidents.size() == 0)
            throw new ResourceNotFoundException("Incident does not exist.");
        return incidents;
    }

    public List<Incident> getIncidentsTitle(String title) {
        List<Incident> incidents = incidentRepository.findByTitle(title);
        if (incidents.size() == 0)
            throw new ResourceNotFoundException("Incident does not exist.");
        return incidents;
    }

    public List<Incident> getIncidentsCategory(Long category) {
        List<Incident> incidents = incidentRepository.findByCategoryId(category);
        if (incidents.size() == 0)
            throw new ResourceNotFoundException("Incident does not exist.");
        return incidents;
    }

    public Incident getIncident(Long id) {
        Optional<Incident> incident = incidentRepository.findById(id);
        if (incident.isEmpty())
            throw new ResourceNotFoundException("Incident with Id = " + id + " does not exist.");
        return incident.get();
    }

    public Response addIncident(IncidentRequest incidentRequest) {
        Optional<Category> newCategory = categoryRepository.findByName(incidentRequest.getCategory().getName());
        if (newCategory.isEmpty()) {
            categoryRepository.save(new Category(incidentRequest.getCategory().getName()));
        }
        Optional<Client> newClient = clientRepository.findByEmail(incidentRequest.getClient().getEmail());
        if (newClient.isEmpty()) {
            clientRepository.save(new Client(
                    incidentRequest.getClient().getFirstName(),
                    incidentRequest.getClient().getLastName(),
                    incidentRequest.getClient().getEmail(),
                    incidentRequest.getClient().getPhoneNumber(),
                    incidentRequest.getClient().getCity(),
                    incidentRequest.getClient().getCountry()));
        }

        Optional<Category> category = categoryRepository.findByName(incidentRequest.getCategory().getName());
        Optional<Client> client = clientRepository.findByEmail(incidentRequest.getClient().getEmail());

        Incident incident = new Incident(
                new Date(),
                new Date(),
                incidentRequest.getTitle(),
                incidentRequest.getDescription(),
                Status.UNPROCESSED);

        clientRepository.save(client.get());

        incident.setCategory(category.get());
        List<Incident> incidents = new ArrayList<>();
        incidents.add(incident);
        category.get().setIncidents(incidents);
        incident.setClient(client.get());
        client.get().setIncidents(incidents);

        categoryRepository.save(category.get());
        clientRepository.save(client.get());

        return new Response("Incident is saved.");
    }

    public Response editIncident(EditIncidentRequest editIncidentRequest) {
        Optional<Incident> incident = incidentRepository.findById(editIncidentRequest.getId());
        if (incident.isEmpty())
            throw new ResourceNotFoundException("Incident with Id = " + editIncidentRequest.getId() + " does not exist.");

        Optional<Category> newCategory = categoryRepository.findByName(editIncidentRequest.getCategory().getName());
        if (newCategory.isEmpty()) {
            categoryRepository.save(new Category(editIncidentRequest.getCategory().getName()));
        }

        Category category = categoryRepository.findByName(editIncidentRequest.getCategory().getName()).get();

        incident.get().setTitle(editIncidentRequest.getTitle());
        incident.get().setDescription(editIncidentRequest.getDescription());
        incident.get().setStatus(editIncidentRequest.getStatus());
        incident.get().setDateUpdated(new Date());

        incident.get().setCategory(category);
        List<Incident> incidents = new ArrayList<>();
        incidents.add(incident.get());
        category.setIncidents(incidents);

        categoryRepository.save(category);

        return new Response("Incident is updated.");
    }

    public Response deleteIncident(Long id) {
        Optional<Incident> incident = incidentRepository.findById(id);
        if (incident.isEmpty()) throw new ResourceNotFoundException("Incident with Id = " + id + " does not exist.");
        incidentRepository.delete(incident.get());
        return new Response("Incident is deleted.");
    }

    public Solution getSolution(Long id) {
        Optional<Solution> solution = solutionRepository.findById(id);
        if (solution.isEmpty()) throw new ResourceNotFoundException("Solution with Id = " + id + " does not exist.");
        return solution.get();
    }

    public Response addSolution(SolutionRequest solutionRequest) {
        Optional<Incident> incident = incidentRepository.findById(solutionRequest.getIncidentId());
        if (incident.isEmpty())
            throw new ResourceNotFoundException("Incident with Id = " + solutionRequest.getIncidentId() + " does not exist.");

        Optional<Employee> employee = employeeRepository.findById(solutionRequest.getEmployeeId());
        if (employee.isEmpty())
            throw new ResourceNotFoundException("Employee with Id = " + solutionRequest.getIncidentId() + " does not exist.");

        Solution solution = new Solution(new Date(), new Date(), solutionRequest.getTitle(), solutionRequest.getDescription(), employee.get(), incident.get());
        solutionRepository.save(solution);

        return new Response("Solution is saved.");
    }

    public Response editSolution(EditSolutionRequest editSolutionRequest) {
        Optional<Solution> solution = solutionRepository.findById(editSolutionRequest.getId());
        if (solution.isEmpty())
            throw new ResourceNotFoundException("Solution with Id = " + editSolutionRequest.getId() + " does not exist.");
        solution.get().setTitle(editSolutionRequest.getTitle());
        solution.get().setDescription(editSolutionRequest.getDescription());
        solution.get().setDateUpdated(new Date());

        solutionRepository.save(solution.get());

        return new Response("Solution is updated.");

    }

    public Response deleteSolution(Long id) {
        Optional<Solution> solution = solutionRepository.findById(id);
        if (solution.isEmpty()) throw new ResourceNotFoundException("Solution with Id = " + id + " does not exist.");
        solutionRepository.delete(solution.get());
        return new Response("Solution is deleted.");
    }

    public Response forwardIncident(ForwardIncidentRequest forwardIncidentRequest) {
        Optional<Incident> incident = incidentRepository.findById(forwardIncidentRequest.getIncidentId());
        if (incident.isEmpty())
            throw new ResourceNotFoundException("Incident with Id = " + forwardIncidentRequest.getIncidentId() + " does not exist.");
        Optional<Employee> newEmployee = employeeRepository.findById(forwardIncidentRequest.getEmployeeId());
        Optional<Employee> currentEmployee = employeeRepository.findById(forwardIncidentRequest.getCurrentEmployee());
        if (newEmployee.isEmpty() || currentEmployee.isEmpty())
            throw new ResourceNotFoundException("Employee with Id = " + forwardIncidentRequest.getIncidentId() + " does not exist.");

        Incident inc = incident.get();
        Employee emp = newEmployee.get(), currEmp = currentEmployee.get();
        // dodaj incident novom zaposleniku
        Set<Incident> empInc = emp.getIncidents();
        empInc.add(inc);
        emp.setIncidents(empInc);
        employeeRepository.save(emp);

        // ukloni incident starom zaposleniku
       /* Set<Incident> currInc = currEmp.getIncidents();
        Set<Incident> newHashSet = currInc.stream().filter(item -> (item.getId().equals(forwardIncidentRequest.getIncidentId()))).collect(Collectors.toCollection(HashSet::new));
        System.out.println(newHashSet);
        currEmp.setIncidents(newHashSet);
        employeeRepository.save(currEmp);  */
        return new Response("Incident is forwarded.");
    }

    public List<Solution> getSolutions() {
        List<Solution> solutions = solutionRepository.findAll();
        if (solutions.isEmpty())
            throw new ResourceNotFoundException("No solution was found.");
        return solutions;
    }

    public List<Solution> getSolutionsByProblem(Long incidentId) {
        List<Solution> solutions = solutionRepository.findByIncidentId(incidentId);
        if (solutions.isEmpty()) throw new ResourceNotFoundException("No solution was found.");
        return solutions;
    }

    public List<Solution> getSolutionsByEmployee(Long employeeId) {
        List<Solution> solutions = solutionRepository.findByIncidentId(employeeId);
        if (solutions.isEmpty()) throw new ResourceNotFoundException("No solution was found.");
        return solutions;
    }

    public Set<Incident> myIncidnets(Long employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        if (employee.isEmpty())
            throw new ResourceNotFoundException("Employee with Id = " + employee + " does not exist.");
        return employee.get().getIncidents();
    }
}
