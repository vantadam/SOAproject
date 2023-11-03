package backrest.backrest.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backrest.backrest.models.Enseignant;
import backrest.backrest.respository.EnseignantRespository;


@Service
public class EnseignantService {
     @Autowired
    private final EnseignantRespository enseignantRepository; 

    public EnseignantService(EnseignantRespository enseignantRepository) {
        this.enseignantRepository=enseignantRepository;
    }

    public Optional<Enseignant> findAll(Long id) {
        return enseignantRepository.findById(id);
    }
   
    public Enseignant createEnseignant(Enseignant enseignant) {
        return enseignantRepository.save(enseignant);

    }

    public Optional<Enseignant> updateEnseignant(Long id, Enseignant updatedEnseignant) {
        if (enseignantRepository.existsById(id)) {
            updatedEnseignant.setId(id); // Mettez à jour l'ID de l'objet avec l'ID fourni
            return Optional.of(enseignantRepository.save(updatedEnseignant));
        }
        return Optional.empty();
    }
    

    public boolean deleteEnseignant(Long id) {
        if (enseignantRepository.existsById(id)) {
            enseignantRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Enseignant> getAllEnseignants() {
        return enseignantRepository.findAll();
    }
    public Optional<Enseignant> getEnseignantById(Long id) {
        return enseignantRepository.findById(id);
    }
}