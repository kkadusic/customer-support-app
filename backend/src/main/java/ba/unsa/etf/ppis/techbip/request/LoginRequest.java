package ba.unsa.etf.ppis.techbip.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginRequest {

    @NotBlank(message = "Email can't be blank")
    @Email(message = "Email format must be valid")
    private String email;

    @NotBlank(message = "Password can't be blank")
    @Size(min = 8, max = 128, message = "Password must contain between 8 and 128 characters")
    private String password;

    public LoginRequest() {
    }

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
