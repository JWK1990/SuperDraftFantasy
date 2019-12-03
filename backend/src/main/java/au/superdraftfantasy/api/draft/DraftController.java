package au.superdraftfantasy.api.draft;

import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class DraftController {

    private final DraftService draftService;

    public DraftController(DraftService draftService) {
        this.draftService = draftService;
    }

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping(name = "createDraft", path = "/create-draft")
    public Long createUser(@RequestBody final DraftDTO draftDTO) throws ParseException {
        DraftEntity userEntity = convertToEntity(draftDTO);
        return draftService.createDraft(userEntity);
    }

    private DraftEntity convertToEntity(DraftDTO draftDTO) throws ParseException {
        return modelMapper.map(draftDTO, DraftEntity.class);
    }

}
