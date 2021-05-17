package ba.unsa.etf.ppis.techbip.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "certificate")
public class Certificate{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String issuingOrganization;

    private Date issueDate;

    @JsonIgnore
    @ManyToOne
    private Employee employee;

    public Certificate(String name, String issuingOrganization, Date issueDate, Employee employee) {
        this.name = name;
        this.issuingOrganization = issuingOrganization;
        this.issueDate = issueDate;
        this.employee = employee;
    }
}
