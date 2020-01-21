package au.superdraftfantasy.api.coach;

import au.superdraftfantasy.api.draft.DraftDTO;
import au.superdraftfantasy.api.draft.DraftEntity;
import au.superdraftfantasy.api.draft.DraftRepository;
import au.superdraftfantasy.api.draft.DraftService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.text.ParseException;

@RestController
@RequestMapping(path = "/coaches")
public class CoachController {

    private final CoachService coachService;
    private final ModelMapper modelMapper;
    private final DraftRepository draftRepository;


    public CoachController(CoachService coachService, ModelMapper modelMapper, DraftRepository draftRepository) {
        this.coachService = coachService;
        this.modelMapper = modelMapper;
        this.draftRepository = draftRepository;
    }

    @PostMapping(name = "createCoach")
    public Long createCoach(@RequestBody final CoachDTO coachDTO) {
        CoachEntity coachEntity = convertToEntity(coachDTO);
        return coachService.createCoach(coachEntity);
    }

    private CoachEntity convertToEntity(CoachDTO coachDTO) {
        CoachEntity coach = modelMapper.map(coachDTO, CoachEntity.class);
        DraftEntity draft = draftRepository.findById(coachDTO.getDraftId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Draft Not Found."));
        coach.setDraft(draft);
        return coach;
    }

}
