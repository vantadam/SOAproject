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
    
    private String nom;

    private String prenom;

    private String mail;

    private long téléphone;

    private String adresse;

    private LocalDate naissance;
    private String className;
    private int pres;
    private int abs;
    private double moy;

}
