package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ForwardIncidentRequest {
    private Long currentEmployee;
    private Long incidentId;
    private Long employeeId;
}
