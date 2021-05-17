package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Employee;
import ba.unsa.etf.ppis.techbip.model.Solution;
import ba.unsa.etf.ppis.techbip.request.EmployeeFilterRequest;
import ba.unsa.etf.ppis.techbip.request.SolutionFilterRequest;
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
public class SolutionFilterRepositoryImpl implements SolutionFilterRepository{
    private final EntityManager em;

    @Override
    public List<Solution> findByFilter(SolutionFilterRequest filter) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Solution> cq = cb.createQuery(Solution.class);

        Root<Solution> root = cq.from(Solution.class);
        List<Predicate> predicates = new ArrayList<>();

        if (filter.getTitle() != null && !filter.getTitle().isEmpty()) {
            String pattern = String.format("%%%s%%", filter.getTitle());
            predicates.add(cb.like(root.get("firstName"), pattern));
        }

        cq.where(predicates.toArray(new Predicate[0]));
        return em.createQuery(cq).getResultList();
    }
}
