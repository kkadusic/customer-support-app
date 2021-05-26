package ba.unsa.etf.ppis.techbip.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmployeeUpdate {

   private Long id;
   private String firstName;
   private String lastName;
   private String city;
   private String country;
   private String phoneNumber;

}
