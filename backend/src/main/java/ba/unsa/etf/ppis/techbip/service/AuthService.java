package ba.unsa.etf.ppis.techbip.service;

import ba.unsa.etf.ppis.techbip.exception.ConflictException;
import ba.unsa.etf.ppis.techbip.exception.NotFoundException;
import ba.unsa.etf.ppis.techbip.exception.UnauthorizedException;
import ba.unsa.etf.ppis.techbip.model.Person;
import ba.unsa.etf.ppis.techbip.repository.PersonRepository;
import ba.unsa.etf.ppis.techbip.request.LoginRequest;
import ba.unsa.etf.ppis.techbip.request.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final PersonRepository personRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(PersonRepository personRepository, PasswordEncoder passwordEncoder) {
        this.personRepository = personRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Person register(RegisterRequest registerRequest) {
        if (personRepository.existsByEmail(registerRequest.getEmail())) {
            throw new ConflictException("Email already in use");
        }
        Person person = personRepository.save(new Person(
                registerRequest.getFirstName(),
                registerRequest.getLastName(),
                registerRequest.getEmail(),
                passwordEncoder.encode(registerRequest.getPassword()))
        );
        person.setPassword(null);
        return person;
    }

    public Person login(LoginRequest loginRequest) {
        Person person = personRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new NotFoundException("User not found with email: " + loginRequest.getEmail()));
        if (person == null || !passwordEncoder.matches(loginRequest.getPassword(), person.getPassword())) {
            throw new UnauthorizedException("Wrong username or password");
        }
        person.setPassword(null);
        return person;
    }
}
