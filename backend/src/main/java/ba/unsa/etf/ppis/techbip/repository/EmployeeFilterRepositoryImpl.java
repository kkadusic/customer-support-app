package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.request.EmployeeFilterRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Repository
public class EmployeeFilterRepositoryImpl implements EmployeeFilterRepository {

    private final EntityManager em;

    @Override
    public List<Employee> findByFilter(EmployeeFilterRequest filter) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);

        Root<Employee> root = cq.from(Employee.class);
        List<Predicate> predicates = new ArrayList<>();

        if (filter.getFirstName() != null && !filter.getFirstName().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getFirstName());
            predicates.add(cb.like(root.get("firstName"), pattern));
        }

        if (filter.getLastName() != null && !filter.getLastName().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getLastName());
            predicates.add(cb.like(root.get("lastName"), pattern));
        }

        if (filter.getEmail() != null && !filter.getEmail().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getEmail());
            predicates.add(cb.like(root.get("email"), pattern));
        }

        if (filter.getUsename() != null && !filter.getUsename().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getUsename());
            predicates.add(cb.like(root.get("username"), pattern));
        }

        cq.where(predicates.toArray(new Predicate[0]));
        return em.createQuery(cq).getResultList();
    }
}
