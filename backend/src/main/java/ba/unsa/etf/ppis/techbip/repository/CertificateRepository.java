package ba.unsa.etf.ppis.techbip.repository;

import ba.unsa.etf.ppis.techbip.model.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {
}
