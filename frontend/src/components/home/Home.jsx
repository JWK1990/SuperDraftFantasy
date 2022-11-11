import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {CardActions} from "@material-ui/core";

export default function Home() {

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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tleOC3_IDjs?controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                    />
                </CardActions>
        </Card>
    )

}
