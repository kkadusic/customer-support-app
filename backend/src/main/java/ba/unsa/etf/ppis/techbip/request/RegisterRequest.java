package ba.unsa.etf.ppis.techbip.request;

import ba.unsa.etf.ppis.techbip.model.RoleName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "First name can't be blank")
    @Size(min = 2, max = 50, message = "First name must contain between 2 and 50 characters")
    private String firstName;

    @NotBlank(message = "Last name can't be blank")
    @Size(min = 2, max = 50, message = "Last name must contain between 2 and 50 characters")
    private String lastName;

    private String username;

    @NotBlank(message = "Email can't be blank")
    @Email(message = "Email format must be valid")
    @Size(max = 320, message = "Email can't be longer than 320 characters")
    private String email;

    private String phoneNumber;

    private String country;

    private String city;

    private RoleName roleName;

    @NotBlank(message = "Password can't be blank")
    @Size(min = 8, max = 128, message = "Password must contain between 8 and 128 characters")
    private String password;
}
