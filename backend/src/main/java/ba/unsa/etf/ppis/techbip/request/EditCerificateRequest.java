package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditCerificateRequest {
    private Long id;
    private String name;
    private String issuingOrganization;
    private Date issueDate;
}
