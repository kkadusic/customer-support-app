package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Incident;
import ba.unsa.etf.ppis.techbip.request.EmployeeFilterRequest;
import ba.unsa.etf.ppis.techbip.request.IncidentFilterRequest;
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
public class IncidentFilterRepositoryImpl implements IncidentFilterRepository{
    private final EntityManager em;

    @Override
    public List<Incident> findByFilter(IncidentFilterRequest filter) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Incident> cq = cb.createQuery(Incident.class);

        Root<Incident> root = cq.from(Incident.class);
        List<Predicate> predicates = new ArrayList<>();

        if (filter.getTitle() != null && !filter.getTitle().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getTitle());
            predicates.add(cb.like(root.get("title"), pattern));
        }

        if (filter.getStatus() != null && !filter.getStatus().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getStatus());
            predicates.add(cb.like(root.get("status"), pattern));
        }

        if (filter.getCategory() != null && !filter.getCategory().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getCategory());
            predicates.add(cb.like(root.get("category"), pattern));
        }

        cq.where(predicates.toArray(new Predicate[0]));
        return em.createQuery(cq).getResultList();
    }
}
