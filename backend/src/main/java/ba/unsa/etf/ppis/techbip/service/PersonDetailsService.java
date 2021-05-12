package ba.unsa.etf.ppis.techbip.service;

import ba.unsa.etf.ppis.techbip.exception.NotFoundException;
import ba.unsa.etf.ppis.techbip.model.Person;
import ba.unsa.etf.ppis.techbip.repository.PersonRepository;
import ba.unsa.etf.ppis.techbip.security.PersonDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class PersonDetailsService implements UserDetailsService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonDetailsService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    @Transactional
    public PersonDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Person person = personRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("User not found with email: " + email));
        return new PersonDetails(person);
    }
}
