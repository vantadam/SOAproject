package backrest.backrest.models;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Cadre")
public class Cadre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "nom")
    private String nom;
    @Column (name = "prenom")
    private String prenom;
    @Column (name = "mail")
    private String mail;
    @Column (name = "téléphone")
    private long téléphone;
    @Column (name = "adresse")
    private String adresse;
    @Column (name = "naissance")
    private LocalDate naissance;
}

    
