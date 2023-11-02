package backrest.backrest.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import backrest.backrest.models.Etudiant;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Long>{
    
}