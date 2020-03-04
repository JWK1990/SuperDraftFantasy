import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

export default function NavbarMenuList() {
    return (
            <div className="list" role="presentation">
                <nav>
                    <List>
                        <ListItem button key='home' component={Link} to="/">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        <ListItem button key='myAccount' component={Link} to="/myAccount">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'My Account'} />
                        </ListItem>
                        <ListItem button key='myDrafts' component={Link} to="/myDrafts">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={'My Drafts'} />
                        </ListItem>
                        <ListItem button key='myResearch' component={Link} to="/myResearch">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'My Research'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key="createDraft" component={Link} to="/createDraft">
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Create Draft" />
                        </ListItem>
                        <ListItem button key="logout" component={Link} to="/logout">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </nav>
            </div>
    )
};