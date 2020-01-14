package au.superdraftfantasy.api.role;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import au.superdraftfantasy.api.priviledge.PriviledgeEntity;
import au.superdraftfantasy.api.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleEntity {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    private String name;
    
    @ManyToMany(mappedBy = "roles")
    private Collection<UserEntity> users;
 
    @ManyToMany
    @JoinTable(
        name = "role_priviledge_join", 
        joinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"), 
        inverseJoinColumns = @JoinColumn(name = "priviledge_id", referencedColumnName = "id"))
    private Collection<PriviledgeEntity> priviledges;
}