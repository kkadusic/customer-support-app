package ba.unsa.etf.ppis.techbip.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;

@Data
@AllArgsConstructor
public class EmployeeWrapper {
    private String firstName;
    private String lastName;
    private String country;
    private String city;
    private String email;
    private String phoneNumber;
    private String username;
    private ArrayList<String> roles;
}
