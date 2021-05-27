package ba.unsa.etf.ppis.techbip.controller;

import ba.unsa.etf.ppis.techbip.exception.ResourceNotFoundException;
import ba.unsa.etf.ppis.techbip.model.Certificate;
import ba.unsa.etf.ppis.techbip.model.Education;
import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Incident;
import ba.unsa.etf.ppis.techbip.request.*;
import ba.unsa.etf.ppis.techbip.response.ReducedEmployeeResponse;
import ba.unsa.etf.ppis.techbip.response.Response;
import ba.unsa.etf.ppis.techbip.service.IncidentManagementService;
import ba.unsa.etf.ppis.techbip.service.KnowledgeManagementService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("/knowledge-management")
public class KnowledgeManagementController {

    private final KnowledgeManagementService knowledgeManagementService;

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getEmployees
            (@RequestParam(required = false) String firstName,
             @RequestParam(required = false) String lastName,
             @RequestParam(required = false) String email,
             @RequestParam(required = false) String username)
    {
        EmployeeFilterRequest employeeFilterRequest = new EmployeeFilterRequest(
                firstName, lastName, email, username
        );
        return ResponseEntity.ok(knowledgeManagementService.getEmployees(employeeFilterRequest));
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/employees/emp")
    public ResponseEntity<List<ReducedEmployeeResponse>> getOnlyEmployeesWithEmpRole()
    {
        return ResponseEntity.ok(knowledgeManagementService.getEmployeesWithEmpRole());
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id){
        Employee employee = knowledgeManagementService.getEmployee(id);
        return ResponseEntity.ok(employee);
    }



    @Secured("ROLE_ADMIN")
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Response> deleteEmployee(@PathVariable Long id){
        Response response = knowledgeManagementService.deleteEmployee(id);
        return ResponseEntity.ok(response);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/employees/certificate/{id}")
    public ResponseEntity<Certificate> getCertificate(@PathVariable Long id){
        Certificate certificate = knowledgeManagementService.getCertificate(id);
        return ResponseEntity.ok(certificate);
    }

    @Secured("ROLE_ADMIN")
    @PostMapping("/employees/certificate")
    public ResponseEntity<Response> addCertificate(@Valid @RequestBody CertificateRequest certificateRequest){
        Response response = knowledgeManagementService.addCertificate(certificateRequest);
        return ResponseEntity.ok(response);
    }

    @Secured("ROLE_ADMIN")
    @PutMapping("/employees/certificate")
    public ResponseEntity<Response> editCertificate(@Valid @RequestBody EditCerificateRequest editCerificateRequest){
        Response response = knowledgeManagementService.editCertificate(editCerificateRequest);
        return ResponseEntity.ok(response);
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/employees/certificate/{id}")
    public ResponseEntity<Response> deleteCertificate(@PathVariable Long id){
        Response response = knowledgeManagementService.deleteCertificate(id);
        return ResponseEntity.ok(response);
    }

    @Secured({ "ROLE_ADMIN", "ROLE_EMPLOYEE" })
    @GetMapping("/employees/education/{id}")
    public ResponseEntity<Education> getEducation(@PathVariable Long id){
        Education education = knowledgeManagementService.getEducation(id);
        return ResponseEntity.ok(education);
    }
    @Secured("ROLE_ADMIN")
    @PostMapping("/employees/education")
    public ResponseEntity<Response> addEducation(@Valid @RequestBody EducationRequest educationRequest){
        Response response = knowledgeManagementService.addEducation(educationRequest);
        return ResponseEntity.ok(response);
    }

    @Secured("ROLE_ADMIN")
    @PutMapping("/employees/education")
    public ResponseEntity<Response> editEducation(@Valid @RequestBody EditEducationRequest editEducationRequest){
        Response response = knowledgeManagementService.editEducation(editEducationRequest);
        return ResponseEntity.ok(response);
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/employees/education/{id}")
    public ResponseEntity<Response> deleteEducation(@PathVariable Long id){
        Response response = knowledgeManagementService.deleteEducation(id);
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
