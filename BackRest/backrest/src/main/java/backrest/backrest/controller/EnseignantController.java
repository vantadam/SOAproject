package backrest.backrest.controller;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import backrest.backrest.models.Cadre;
import backrest.backrest.models.Enseignant;
import backrest.backrest.service.CadreService;
import backrest.backrest.service.EnseignantService;

@RestController
@RequestMapping("/Enseignant")
public class EnseignantController {
    private EnseignantService enseignantService;

public EnseignantController(EnseignantService enseignantService) {
    this.enseignantService= enseignantService;
}


    @GetMapping
    public List<Enseignant> getAllEnseignants() {
        return enseignantService.getAllEnseignants(); }


       @GetMapping("/{id}")
    public ResponseEntity<Enseignant> getEnseignantById(@PathVariable Long id) {
        return ((Object) enseignantService.getEnseignantById(id))
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

        @PostMapping(/*consumes = "application/json", produces = "application/json"*/)
    public Enseignant createEnseignant(@RequestBody Enseignant enseignant) {
        return enseignantService.createEnseignant(enseignant);
    }

     @PutMapping("/{id}")
    public ResponseEntity<Enseignant> updateEnseignant(@PathVariable Long id, @RequestBody Enseignant updatedEnseignant) {
        return enseignantService.updateEnseignant(id,updatedEnseignant)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public boolean deleteEnseignant(@PathVariable Long id) {
        return enseignantService.deleteEnseignant(id) ?
                ResponseEntity.noContent().build() != null :
                ResponseEntity.notFound().build() != null;
    }
    
}
