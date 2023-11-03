package backrest.backrest.models;
import java.time.LocalDate;

import org.hibernate.internal.util.collections.Stack;

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
@Table(name = "Etudiant")
public class Etudiant {
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
    private String className;
    private int pres;
    private int abs;
    private double moy;

}
