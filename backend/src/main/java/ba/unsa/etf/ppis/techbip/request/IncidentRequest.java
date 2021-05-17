package ba.unsa.etf.ppis.techbip.request;

import ba.unsa.etf.ppis.techbip.model.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IncidentRequest {
    private String title;
    private String description;
    private CategoryRequest category;
    private ClientRequest client;
}
