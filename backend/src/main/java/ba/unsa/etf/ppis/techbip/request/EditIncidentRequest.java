package ba.unsa.etf.ppis.techbip.request;

import ba.unsa.etf.ppis.techbip.model.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditIncidentRequest {
    private Long id;
    private String title;
    private String description;
    private Status status;
    private CategoryRequest category;
}
