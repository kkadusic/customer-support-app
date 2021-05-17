package ba.unsa.etf.ppis.techbip.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String school;

    private String degree;

    private String fieldOfStudy;

    private Date startDate;

    private Date endDate;

    @JsonIgnore
    @ManyToOne
    private Employee employee;

    public Education(String school, String degree, String fieldOfStudy, Date startDate, Date endDate, Employee employee) {
        this.school = school;
        this.degree = degree;
        this.fieldOfStudy = fieldOfStudy;
        this.startDate = startDate;
        this.endDate = endDate;
        this.employee = employee;
    }
}
