package backrest.backrest.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import backrest.backrest.models.Cadre;
import backrest.backrest.respository.CadreRepository;


@Service
public class CadreService {
        @Autowired
    private final CadreRepository cadreRepository;

    public CadreService(CadreRepository cadreRepository) {
        this.cadreRepository=cadreRepository;
    }
    public Optional<Cadre> findAll(Long id) {
        return cadreRepository.findById(id);
    }
   
    public Cadre createCadre (Cadre cadre) {
        return cadreRepository.save(cadre);

    }

    public Optional<Cadre> updateCadre(Long id, Cadre updatedCadre) {
        if (cadreRepository.existsById(id)) {
            updatedCadre.setId(id); // Mettez à jour l'ID de l'objet avec l'ID fourni
            return Optional.of(cadreRepository.save(updatedCadre));
        }
        return Optional.empty();
    }
    

    public boolean deleteCadre(Long id) {
        if (cadreRepository.existsById(id)) {
            cadreRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Cadre> getAllCadres() {
        return cadreRepository.findAll();
    }
    public Optional<Cadre>getCadreById(Long id) {
        return cadreRepository.findById(id);
    }
}