package ba.unsa.etf.ppis.techbip.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @NotBlank
    private LocalDateTime dateIssued;

    @NotBlank
    private LocalDateTime dateExpired;

    @NotBlank
    private String name;

    private String type;

    public Certificate() {
    }

    public Certificate(Employee employee, @NotBlank LocalDateTime dateIssued, @NotBlank LocalDateTime dateExpired,
                       @NotBlank String name, String type) {
        this.employee = employee;
        this.dateIssued = dateIssued;
        this.dateExpired = dateExpired;
        this.name = name;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateIssued() {
        return dateIssued;
    }

    public void setDateIssued(LocalDateTime dateIssued) {
        this.dateIssued = dateIssued;
    }

    public LocalDateTime getDateExpired() {
        return dateExpired;
    }

    public void setDateExpired(LocalDateTime dateExpired) {
        this.dateExpired = dateExpired;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
