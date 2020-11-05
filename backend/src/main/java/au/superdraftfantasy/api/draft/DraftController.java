package au.superdraftfantasy.api.draft;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/drafts")
public class DraftController {

    private final DraftService draftService;

    public DraftController(DraftService draftService) {
        this.draftService = draftService;
    }

    @PostMapping(name = "createDraft")
    public Long createDraft(@RequestBody final DraftWriteDto draftWriteDto) {
        return draftService.createDraft(draftWriteDto);
    }

    @GetMapping(name = "getDraft", path = "{draftID}")
    public DraftReadDto getDraft(@PathVariable final Long draftID) {
        return draftService.getDraft(draftID);
    }

    @GetMapping(name = "getMyDrafts", path = "/myDrafts")
    public List<DraftReadDto> getMyDrafts(Authentication authentication) {
        return draftService.getMyDrafts(authentication);
    }

    @MessageMapping("/reorderTeamList")
    @SendTo("/draft/reorderTeamLists")
    public List<Long> reorderTeamList(DraftReorderTeamsDto draftReorderTeamsDto) {
        return draftService.reorderTeamList(draftReorderTeamsDto);
    }

}
