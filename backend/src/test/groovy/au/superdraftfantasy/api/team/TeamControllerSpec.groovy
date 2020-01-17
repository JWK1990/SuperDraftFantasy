package au.superdraftfantasy.api.team

import au.superdraftfantasy.api.RestSpecification
import org.modelmapper.ModelMapper
import org.spockframework.spring.SpringBean

class TeamControllerSpec extends RestSpecification {

    @SpringBean
    TeamService teamService = Mock(TeamService)

    @SpringBean
    ModelMapper modelMapper = Mock(ModelMapper)

}
