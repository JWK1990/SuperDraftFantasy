package au.superdraftfantasy.api.privilege;

import au.superdraftfantasy.api.role.RoleEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrivilegeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private PrivilegeTypeEnum type;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "privileges", cascade = CascadeType.ALL)
    private Set<RoleEntity> roles;

}
