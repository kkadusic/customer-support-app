package ba.unsa.etf.ppis.techbip.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReducedEmployeeResponse {
    private Long id;
    private String firstName;
    private String lastName;
}
