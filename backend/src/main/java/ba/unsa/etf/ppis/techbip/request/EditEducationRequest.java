package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditEducationRequest {
    private Long id;
    private String school;
    private String degree;
    private String fieldOfStudy;
    private Date startDate;
    private Date endDate;
}
