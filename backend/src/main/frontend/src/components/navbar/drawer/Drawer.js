import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import './Drawer.css';
import NavbarMenuList from './list/List';

export default function NavbarDrawer() {  
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('left', true)}/>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        <NavbarMenuList />
      </Drawer>
    </div>
  );
}