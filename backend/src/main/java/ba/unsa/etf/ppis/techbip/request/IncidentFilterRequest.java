package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IncidentFilterRequest {
    private String title;
    private String status;
    private String category;
}