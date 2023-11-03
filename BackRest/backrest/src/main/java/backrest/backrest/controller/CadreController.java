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
import backrest.backrest.service.CadreService;
@RestController
@RequestMapping("/Cadre")

public class CadreController {
    
private final CadreService cadreService;

public CadreController(CadreService cadreService) {
    this.cadreService = cadreService;
}


    @GetMapping
    public List<Cadre> getAllCadres() {
        return cadreService.getAllCadres(); }


    @GetMapping("/{id}")
    public ResponseEntity<Cadre> getCadreById(@PathVariable Long id) {
        return cadreService.getCadreById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cadre createCadre(@RequestBody Cadre cadre) {
        return cadreService.createCadre(cadre);
    }

     @PutMapping("/{id}")
    public ResponseEntity<Cadre> updateCadre(@PathVariable Long id, @RequestBody Cadre updatedCadre) {
        return cadreService.updateCadre(id,updatedCadre)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public boolean deleteCadre(@PathVariable Long id) {
        return cadreService.deleteCadre(id) ?
                ResponseEntity.noContent().build() != null :
                ResponseEntity.notFound().build() != null;
    }
    
}