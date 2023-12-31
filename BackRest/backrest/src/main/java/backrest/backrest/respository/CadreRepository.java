package backrest.backrest.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backrest.backrest.models.Cadre;

@Repository
public interface CadreRepository extends JpaRepository<Cadre, Long> {
    
}