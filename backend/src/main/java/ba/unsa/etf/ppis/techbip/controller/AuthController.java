package ba.unsa.etf.ppis.techbip.controller;

import ba.unsa.etf.ppis.techbip.model.Person;
import ba.unsa.etf.ppis.techbip.request.LoginRequest;
import ba.unsa.etf.ppis.techbip.request.RegisterRequest;
import ba.unsa.etf.ppis.techbip.response.LoginResponse;
import ba.unsa.etf.ppis.techbip.response.RegisterResponse;
import ba.unsa.etf.ppis.techbip.security.JwtUtils;
import ba.unsa.etf.ppis.techbip.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtUtils jwtTokenUtil;
    private final AuthService personService;

    public AuthController(JwtUtils jwtTokenUtil, AuthService personService) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.personService = personService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody @Valid RegisterRequest registerRequest) {
        Person person = personService.register(registerRequest);
        return ResponseEntity.ok(new RegisterResponse(
                person.getFirstName(),
                person.getLastName(),
                person.getEmail()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        Person person = personService.login(loginRequest);
        return ResponseEntity.ok(new LoginResponse(
                jwtTokenUtil.generateToken(person),
                person.getId(),
                person.getFirstName(),
                person.getLastName(),
                person.getEmail()
        ));
    }
}
