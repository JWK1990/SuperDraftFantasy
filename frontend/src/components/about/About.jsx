import React from "react";
import {CardActions} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

export default function About() {

    return (
        <Card elevation={0}>
                <CardContent>
                    <Typography gutterBottom variant="h4" align={"center"}>
                        The only Auction-Draft software for Australian Rules Fantasy Football!
                    </Typography>
                    <Typography variant="h5" color="textSecondary" align={"center"}>
                        Create your draft, invite your league, buy your team!
                    </Typography>
                </CardContent>
            <CardActions style={{justifyContent: "center"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/H5v3kku4y6Q?controls=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="h4" align={"center"}>
                    FAQ
                </Typography>
                <Grid container spacing={4} overflow={"scroll"}>
                    <Grid item xs={6} style={{paddingRight: "50px"}}>
                        <Typography gutterBottom variant="h6" color="textPrimary" align={"left"}>
                            What is an auction draft?
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" align={"left"}>
                            Each team has a set budget to buy their team. Teams take turns putting players on the block,
                            a bidding frenzy ensues and when the timer expires, the team with the highest bid wins
                            the player!
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h6" color="textPrimary" align={"left"}>
                            How is this better than a traditional snake draft?
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" align={"left"}>
                            Snake drafts are great, but the lucky player that draws the 1st pick has exclusive access to
                            the best player! Auction drafts overcome this problem, whilst also introducing a lot of
                            additional strategy. There's nothing quite like the thrill of a bidding war!
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{paddingRight: "50px"}}>
                        <Typography gutterBottom variant="h6" color="textPrimary" align={"left"}>
                            How do I get started?
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" align={"left"}>
                            Firstly, you need to register/login (it's quick/easy/free), then navigate to
                            "Create Draft" to create your first auction-draft. Once done,
                            invite league-members by sharing your Draft ID and enter the Draft Room
                            by clicking "Open" on the "My Drafts" page.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h6" color="textPrimary" align={"left"}>
                            My league Commissioner has already created an auction draft, how do I join?
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" align={"left"}>
                            All you need is the draft's unique ID (your Commission has this on their
                            "My Drafts" page), then simply register/login, click
                            "Join Draft" and enter your Draft ID. The Draft will then appear on your "My Drafts" page.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h6" color="textPrimary" align={"left"}>
                            Can I run my entire fantasy football league in SuperDraft?
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" align={"left"}>
                            Unfortunately not! SuperDraft is not designed for running your league, it is
                            a platform for drafting your teams via an auction-draft. You will still need to run
                            your league via a standard fantasy football app.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h6" color="textPrimary" align={"left"}>
                            I've drafted my team, I had so much fun, now how do I get my team in my fantasy football app?
                        </Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" align={"left"}>
                            A great and important question! Unfortunately, SuperDraft does not currently interface
                            with the Australian Rules fantasy football apps. Thus, one poor
                            league member (I suggest the wooden-spooner) must manually enter teams from
                            SuperDraft into your fantasy football app. The best way is via a "One-Computer Snake Draft".
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

}
