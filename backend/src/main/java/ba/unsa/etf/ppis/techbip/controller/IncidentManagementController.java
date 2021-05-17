package ba.unsa.etf.ppis.techbip.controller;

import ba.unsa.etf.ppis.techbip.exception.ResourceNotFoundException;
import ba.unsa.etf.ppis.techbip.model.Incident;
import ba.unsa.etf.ppis.techbip.model.Solution;
import ba.unsa.etf.ppis.techbip.request.*;
import ba.unsa.etf.ppis.techbip.response.Response;
import ba.unsa.etf.ppis.techbip.service.IncidentManagementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/incident-management")
public class IncidentManagementController {

    private final IncidentManagementService incidentManagementService;

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/incidents")
    public ResponseEntity<List<Incident>> getIncidents()
    {
        return ResponseEntity.ok(incidentManagementService.getIncidents());
    }


    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/incidents/{id}")
    public ResponseEntity<Incident> getIncident(@PathVariable Long id) {
        Incident incident = incidentManagementService.getIncident(id);
        return ResponseEntity.ok(incident);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @PostMapping("/incidents")
    public ResponseEntity<Response> addIncident(@Valid @RequestBody IncidentRequest incidentRequest) {
        Response response = incidentManagementService.addIncident(incidentRequest);
        return ResponseEntity.ok(response);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @PutMapping("/incidents")
    public ResponseEntity<Response> editIncident(@Valid @RequestBody EditIncidentRequest editIncidentRequest) {
        Response response = incidentManagementService.editIncident(editIncidentRequest);
        return ResponseEntity.ok(response);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @DeleteMapping("/incidents/{id}")
    public ResponseEntity<Response> deleteIncident(@PathVariable Long id) {
        Response response = incidentManagementService.deleteIncident(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/solutions")
    public ResponseEntity<List<Solution>> getSolutionsByIncident(@RequestParam(required = true) Long incidentId) {
        List<Solution> solutions = incidentManagementService.getSolutionsByProblem(incidentId);
        return ResponseEntity.ok(solutions);
    }


    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/solutions/{id}")
    public ResponseEntity<Solution> getSolution(@PathVariable Long id) {
        Solution solution = incidentManagementService.getSolution(id);
        return ResponseEntity.ok(solution);

    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @PostMapping("/solutions")
    public ResponseEntity<Response> addSolution(@Valid @RequestBody SolutionRequest solutionRequest) {
        Response response = incidentManagementService.addSolution(solutionRequest);
        return ResponseEntity.ok(response);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @PutMapping("/solutions")
    public ResponseEntity<Response> editSolution(@Valid @RequestBody EditSolutionRequest editSolutionRequest) {
        Response response = incidentManagementService.editSolution(editSolutionRequest);
        return ResponseEntity.ok(response);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @DeleteMapping("/solutions/{id}")
    public ResponseEntity<Response> deleteSolution(@PathVariable Long id) {
        Response response = incidentManagementService.deleteSolution(id);
        return ResponseEntity.ok(response);
    }

    @Secured("ROLE_EMPLOYEE")
    @PostMapping("/forward-incident")
    public ResponseEntity<Response> forwardIncident(@Valid @RequestBody ForwardIncidentRequest forwardIncidentRequest) {
        Response response = incidentManagementService.forwardIncident(forwardIncidentRequest);
        return ResponseEntity.ok(response);
    }

    @Secured("ROLE_EMPLOYEE")
    @GetMapping("/my-received-incidents")
    public ResponseEntity<Set<Incident>> myIncidents(@RequestParam(required = true) Long employeeId) {
        Set<Incident> response = incidentManagementService.myIncidnets(employeeId);
        return ResponseEntity.ok(response);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response handleNoSuchElementFoundException(ConstraintViolationException exception) {
        StringBuilder message = new StringBuilder();
        List<String> messages = exception.getConstraintViolations().stream()
                .map(ConstraintViolation::getMessage).collect(Collectors.toList());
        for (int i = 0; i < messages.size(); i++)
            if (i < messages.size() - 1) message.append(messages.get(i)).append("; ");
            else message.append(messages.get(i));
        return new Response(message.toString(), 400);
    }

    @ExceptionHandler({ResourceNotFoundException.class})
    public final Response handleException(Exception e) {
        if (e instanceof ResourceNotFoundException) {
            ResourceNotFoundException exception = (ResourceNotFoundException) e;
            String poruka = exception.getMessage();
            return new Response(poruka, 400);
        }
        return null;
    }

}
