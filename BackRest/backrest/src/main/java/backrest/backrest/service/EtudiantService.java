package backrest.backrest.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backrest.backrest.models.Etudiant;
import backrest.backrest.respository.EtudiantRepository;

@Service
public class EtudiantService {
    @Autowired
    private final EtudiantRepository etudiantRepository;

    public EtudiantService(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

     public Optional<Etudiant> findAll(Long id) {
        return etudiantRepository.findById(id);
    }
   
    public Etudiant createEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);

    }

    public Optional<Etudiant> updateEtudiant(Long id, Etudiant updatedEtudiant) {
        if (etudiantRepository.existsById(id)) {
            updatedEtudiant.setId(id); // Mettez à jour l'ID de l'objet avec l'ID fourni
            return Optional.of(etudiantRepository.save(updatedEtudiant));
        }
        return Optional.empty();
    }
    

    public boolean deleteEtudiant(Long id) {
        if (etudiantRepository.existsById(id)) {
            etudiantRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }
    public Optional<Etudiant> getEtudiantById(Long id) {
    return etudiantRepository.findById(id);

    }
    
    public List<Etudiant> getEtudiantByclassName(String className){
        return etudiantRepository.findByclassName(className);
    }
    
    public Map<String, Long> getStudentStatistics() {
        Map<String, Long> statistics = new HashMap<>();
        List<Etudiant> allStudents = etudiantRepository.findAll();
        
        long totalNumberOfStudents = allStudents.size();
        long numberOfStudentsWithAverageLessThanTen = allStudents.stream()
                                                                 .filter(etudiant -> etudiant.getMoy() < 10)
                                                                 .count();
        
        statistics.put("totalNumberOfStudents", totalNumberOfStudents);
        statistics.put("numberOfStudentsWithAverageLessThanTen", numberOfStudentsWithAverageLessThanTen);
        
        return statistics;
    }

    public double getGeneralAverage() {
        List<Etudiant> allStudents = etudiantRepository.findAll();        
        double generalAverage = allStudents.stream()
                                           .mapToDouble(Etudiant::getMoy)
                                           .average()
                                           .orElse(0.0);
        
        return generalAverage;
    }
    


     
    

    




}