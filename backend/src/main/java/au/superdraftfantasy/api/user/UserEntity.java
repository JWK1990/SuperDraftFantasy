package au.superdraftfantasy.api.user;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Entity;


@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    
    @NotBlank
    String username;

    @NotBlank
    String firstName;

    @NotBlank
    String lastName;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

}