package ba.unsa.etf.ppis.techbip.service;

import ba.unsa.etf.ppis.techbip.exception.ResourceNotFoundException;
import ba.unsa.etf.ppis.techbip.model.*;
import ba.unsa.etf.ppis.techbip.repository.CertificateRepository;
import ba.unsa.etf.ppis.techbip.repository.EducationRepository;
import ba.unsa.etf.ppis.techbip.repository.EmployeeRepository;
import ba.unsa.etf.ppis.techbip.request.*;
import ba.unsa.etf.ppis.techbip.response.ReducedEmployeeResponse;
import ba.unsa.etf.ppis.techbip.response.Response;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class KnowledgeManagementService {
    private final EmployeeRepository employeeRepository;
    private final EducationRepository educationRepository;
    private final CertificateRepository certificateRepository;

    public List<Employee> getEmployees(EmployeeFilterRequest employeeFilterRequest) {
        List<Employee> employees = employeeRepository.findByFilter(employeeFilterRequest);
        if (employees.size() == 0) throw new ResourceNotFoundException("Employee does not exist.");
        return employees;
    }

    public List<ReducedEmployeeResponse> getEmployeesWithEmpRole() {
        List<Employee> emp = employeeRepository.findAll();
        List<ReducedEmployeeResponse> empRoleEmployees = new ArrayList<>();
        for (Employee employee: emp) {
            for (Role role : employee.getRoles()) {
                if (role.getRolename() == RoleName.ROLE_EMPLOYEE) {
                    empRoleEmployees.add(new ReducedEmployeeResponse(employee.getId(), employee.getFirstName(), employee.getLastName()));
                }
            }
        }
        return empRoleEmployees;
    }

    public Employee getEmployee(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if(employee.isEmpty()) throw new ResourceNotFoundException("Employee with Id = " + id + " does not exist.");
        return employee.get();
    }

    public Response deleteEmployee(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if(employee.isEmpty()) throw new ResourceNotFoundException("Employee with Id = " + id + " does not exist.");
        employeeRepository.delete(employee.get());
        return new Response("Employee is deleted.");
    }

    public Certificate getCertificate(Long id) {
        Optional<Certificate> certificate = certificateRepository.findById(id);
        if(certificate.isEmpty()) throw new ResourceNotFoundException("Certificate with Id = " + id + " does not exist.");
        return certificate.get();
    }

    public Response addCertificate(CertificateRequest certificateRequest) {
        Optional<Employee> employee = employeeRepository.findById(certificateRequest.getEmployeeId());
        if(employee.isEmpty()) throw new ResourceNotFoundException("Employee with Id = " + certificateRequest.getEmployeeId() + " does not exist.");
        Certificate certificate = new Certificate(certificateRequest.getName(), certificateRequest.getIssuingOrganization(),
                certificateRequest.getIssueDate(), employee.get());
        certificateRepository.save(certificate);
        return new Response("Certificate is saved.");
    }

    public Response editCertificate(EditCerificateRequest editCerificateRequest) {
        Optional<Certificate> certificate = certificateRepository.findById(editCerificateRequest.getId());
        if(certificate.isEmpty()) throw new ResourceNotFoundException("Certificate with Id = " + editCerificateRequest.getId() + " does not exist.");
        certificate.get().setName(editCerificateRequest.getName());
        certificate.get().setIssuingOrganization(editCerificateRequest.getIssuingOrganization());
        certificate.get().setIssueDate(editCerificateRequest.getIssueDate());
        certificateRepository.save(certificate.get());
        return new Response("Certificate is updated.");
    }

    public Response deleteCertificate(Long id) {
        Optional<Certificate> certificate = certificateRepository.findById(id);
        if(certificate.isEmpty()) throw new ResourceNotFoundException("Certificate with Id = " + id + " does not exist.");
        certificateRepository.delete(certificate.get());
        return new Response("Certificate is deleted.");
    }

    public Education getEducation(Long id) {
        Optional<Education> education = educationRepository.findById(id);
        if(education.isEmpty()) throw new ResourceNotFoundException("Education with Id = " + id + " does not exist.");
        return education.get();
    }

    public Response addEducation(EducationRequest educationRequest) {
        Optional<Employee> employee = employeeRepository.findById(educationRequest.getEmployeeId());
        if(employee.isEmpty()) throw new ResourceNotFoundException("Employee with Id = " + educationRequest.getEmployeeId() + " does not exist.");
        Education education = new Education(educationRequest.getSchool(), educationRequest.getDegree(), educationRequest.getFieldOfStudy(),
                educationRequest.getStartDate(), educationRequest.getEndDate(), employee.get());
        educationRepository.save(education);
        return new Response("Education is saved.");
    }

    public Response editEducation(EditEducationRequest editEducationRequest) {
        Optional<Education> education = educationRepository.findById(editEducationRequest.getId());
        if(education.isEmpty()) throw new ResourceNotFoundException("Education with Id = " + editEducationRequest.getId() + " does not exist.");
        education.get().setSchool(editEducationRequest.getSchool());
        education.get().setDegree(editEducationRequest.getDegree());
        education.get().setFieldOfStudy(editEducationRequest.getFieldOfStudy());
        education.get().setStartDate(editEducationRequest.getStartDate());
        education.get().setEndDate(editEducationRequest.getEndDate());
        educationRepository.save(education.get());
        return new Response("Education is updated.");
    }

    public Response deleteEducation(Long id) {
        Optional<Education> education = educationRepository.findById(id);
        if(education.isEmpty()) throw new ResourceNotFoundException("Education with Id = " + id + " does not exist.");
        educationRepository.delete(education.get());
        return new Response("Education is deleted.");
    }

}
