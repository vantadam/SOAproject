package backrest.backrest.controller;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import backrest.backrest.models.Etudiant;
import backrest.backrest.service.EtudiantService;

@RestController
@RequestMapping("/Etudiant")
@CrossOrigin(origins = "http://localhost:3000")
public class EtudiantController {

private final EtudiantService etudiantService;

public EtudiantController(EtudiantService etudiantService) {
    this.etudiantService =etudiantService;
}
    @GetMapping
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants(); }


    @GetMapping("id/{id}")
    public ResponseEntity<Etudiant> getEtudiantById(@PathVariable Long id) {
        return  etudiantService.getEtudiantById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping(/*consumes = "application/json", produces = "application/json"*/)
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantService.createEtudiant(etudiant);
    }

    @PutMapping("id/{id}")
    public ResponseEntity<Etudiant> updateEtudiant(@PathVariable Long id, @RequestBody Etudiant updatedEtudiant) {
        return etudiantService.updateEtudiant(id,updatedEtudiant)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("id/{id}")
    public boolean deleteEtudiant(@PathVariable Long id) {
        return etudiantService.deleteEtudiant(id) ?
                ResponseEntity.noContent().build() != null :
                ResponseEntity.notFound().build() != null;
    }

    @GetMapping("/className/{className}")
    public List<Etudiant> getEtudiantByclassName(@PathVariable String className){
        return etudiantService.getEtudiantByclassName(className);
    }
    @GetMapping("/statistic")
    public ResponseEntity<Map<String, Long>> getStudentStatistics() {
        Map<String, Long> statistics = etudiantService.getStudentStatistics();
        return new ResponseEntity<>(statistics, HttpStatus.OK);
    }
    @GetMapping("/average")
    public ResponseEntity<Double> getGeneralAverage() {
        double generalAverage = etudiantService.getGeneralAverage();
        return new ResponseEntity<>(generalAverage, HttpStatus.OK);
    }




}