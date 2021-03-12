package au.superdraftfantasy.api.draft;

import au.superdraftfantasy.api.roster.RosterEntity;

public interface IDraftBase {

    Long getId();

    String getName();

    Long getNumOfTeams();

    RosterEntity getRoster();

    Long getBudget();

    Long getOnTheBlockTimer();

    Long getBidTimer();

    DraftStatusEnum getStatus();

}

