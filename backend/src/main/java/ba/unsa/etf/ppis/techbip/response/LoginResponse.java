package ba.unsa.etf.ppis.techbip.response;

public class LoginResponse {

    private String jwt;
    private Long id;
    private String firstName;
    private String lastName;
    private String email;

    public LoginResponse() {
    }

    public LoginResponse(String jwt, Long id, String firstName, String lastName, String email) {
        this.jwt = jwt;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
