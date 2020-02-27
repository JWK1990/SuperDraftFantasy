package au.superdraftfantasy.api.bid;

import java.util.Date;
import java.util.HashSet;
import javax.validation.constraints.NotBlank;

import au.superdraftfantasy.api.player.PlayerReadDto;
import au.superdraftfantasy.api.roster.RosterEntity;
import au.superdraftfantasy.api.roster.RosterRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import au.superdraftfantasy.api.coach.CoachEntity;
import au.superdraftfantasy.api.coach.CoachTypeEnum;
import au.superdraftfantasy.api.team.TeamEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;


@Service
public class BidService {

    private final ModelMapper modelMapper;

    public BidService(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    /**
     * convert to a BidReadDto.
     * @param bidWriteDto
     * @return
     */
    public BidReadDto convertToBidReadDto(@NotBlank final BidWriteDto bidWriteDto) {
        BidReadDto bidReadDto = modelMapper.map(bidWriteDto, BidReadDto.class);
        Date now = new Date();
        Date endTime = new Date(now.getTime() + 20 * 1000);
        bidReadDto.setEndTime(endTime);
        return bidReadDto;
    }

}