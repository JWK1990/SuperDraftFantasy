package au.superdraftfantasy.api.draft;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/drafts")
public class DraftController {

    private final DraftService draftService;

    public DraftController(DraftService draftService) {
        this.draftService = draftService;
    }

    @GetMapping(name = "getDraft", path = "{draftID}")
    public DraftReadDto getDraft(@PathVariable final Long draftID) {
        return draftService.findDraft(draftID);
    }

    @PostMapping(name = "createDraft")
    public Long createDraft(@RequestBody final DraftWriteDto draftWriteDto) {
        return draftService.createDraft(draftWriteDto);
    }

}
