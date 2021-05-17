package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditSolutionRequest {
    Long id;
    String title;
    String description;
}
