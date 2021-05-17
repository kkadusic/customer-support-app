package ba.unsa.etf.ppis.techbip.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "solution")
public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @CreationTimestamp
    @Column(updatable = false)
    private Date dateCreated;

    @UpdateTimestamp
    private Date dateUpdated;

    private String title;

    private String description;

    @ManyToOne
    private Employee employee;

    @JsonIgnore
    @ManyToOne
    private Incident incident;

    public Solution(Date dateCreated, Date dateUpdated, String title, String description, Employee employee, Incident incident) {
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateUpdated =dateUpdated;
        this.employee = employee;
        this.incident = incident;
    }
}
