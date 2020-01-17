package au.superdraftfantasy.api.draft;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "/drafts")
public class DraftController {

    private final DraftService draftService;
    private final ModelMapper modelMapper;

    public DraftController(DraftService draftService, ModelMapper modelMapper) {
        this.draftService = draftService;
        this.modelMapper = modelMapper;
    }

    @PostMapping(name = "createDraft")
    public Long createDraft(@RequestBody final DraftDTO draftDTO) throws ParseException {
        DraftEntity userEntity = convertToEntity(draftDTO);
        return draftService.createDraft(userEntity);
    }

    private DraftEntity convertToEntity(DraftDTO draftDTO) throws ParseException {
        return modelMapper.map(draftDTO, DraftEntity.class);
    }

}
