package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationRequest {
    private String school;
    private String degree;
    private String fieldOfStudy;
    private Date startDate;
    private Date endDate;
    private Long employeeId;
}
