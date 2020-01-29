package au.superdraftfantasy.api.position;

import au.superdraftfantasy.api.player.PlayerEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PositionEntity {

    @Id
    private Long id;

    @Enumerated(EnumType.STRING)
    private PositionTypeEnum type;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "positions", cascade = CascadeType.ALL)
    private Collection<PlayerEntity> players;

}