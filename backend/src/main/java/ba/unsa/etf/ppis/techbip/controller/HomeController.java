package ba.unsa.etf.ppis.techbip.controller;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Role;
import ba.unsa.etf.ppis.techbip.model.RoleName;
import ba.unsa.etf.ppis.techbip.repository.RoleRepository;
import ba.unsa.etf.ppis.techbip.request.*;
import ba.unsa.etf.ppis.techbip.response.LoginResponse;
import ba.unsa.etf.ppis.techbip.response.Response;
import ba.unsa.etf.ppis.techbip.security.CurrentUser;
import ba.unsa.etf.ppis.techbip.security.UserPrincipal;
import ba.unsa.etf.ppis.techbip.service.HomeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class HomeController {

    @Autowired
    private final RoleRepository roleRepository;

    private final HomeService homeService;

    @GetMapping("/home")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Database is initialized.");
    }


    @PostMapping("/registration")
    public ResponseEntity<Response> register(@Valid @RequestBody RegisterRequest registerRequest){
        String msg = homeService.register(registerRequest);
        return ResponseEntity.ok(new Response(msg));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authentication(@Valid @RequestBody LoginRequest loginRequest) {
        String jwt = homeService.authentication(loginRequest);
        return ResponseEntity.ok(new LoginResponse(jwt));
    }

    @GetMapping("/profil")
    public ResponseEntity<Employee> getProfil(@CurrentUser UserPrincipal userPrincipal) {
        Employee employee = homeService.getEmployeeByUsername(userPrincipal.getUsername());
        return ResponseEntity.ok(employee);
    }
}
