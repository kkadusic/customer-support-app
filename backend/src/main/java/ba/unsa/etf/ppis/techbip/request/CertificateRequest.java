package ba.unsa.etf.ppis.techbip.request;

import ba.unsa.etf.ppis.techbip.model.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.ManyToOne;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CertificateRequest {
    private String name;
    private String issuingOrganization;
    private Date issueDate;
    private Long employeeId;
}
