package backrest.backrest.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import backrest.backrest.models.Enseignant;

@Repository

public interface EnseignantRespository extends JpaRepository<Enseignant, Long>{
    
}