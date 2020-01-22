package au.superdraftfantasy.api.coach;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/coaches")
public class CoachController {

    private final CoachService coachService;

    public CoachController(CoachService coachService) {
        this.coachService = coachService;
    }

    @PostMapping(name = "createCoach")
    public Long createCoach(@RequestBody final CoachDTO coachDTO) {
        return coachService.createCoach(coachDTO);
    }

}
