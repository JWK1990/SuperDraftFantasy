package au.superdraftfantasy.api.player;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Entity;

import lombok.Data;

@Entity
@Data
public class PlayerEntity {

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;

    @NotBlank
    String firstName;

    @NotBlank
    String lastName;

    @NotBlank
    Long footballTeam;

    @NotBlank
    Long average;

}