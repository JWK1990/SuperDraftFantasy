package au.superdraftfantasy.api.position;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PositionEntity {

    @Id
    private Long id;

    @Enumerated(EnumType.STRING)
    private PositionTypeEnum type;

}