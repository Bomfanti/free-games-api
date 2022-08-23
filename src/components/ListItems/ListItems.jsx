import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LayersIcon from '@mui/icons-material/Layers';
import ApiIcon from '@mui/icons-material/Api';
import AllOutIcon from '@mui/icons-material/AllOut';
import CycloneIcon from '@mui/icons-material/Cyclone';
import DiamondIcon from '@mui/icons-material/Diamond';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ApiIcon />
      </ListItemIcon>
      <ListItemText primary="MMORPG" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AllOutIcon />
      </ListItemIcon>
      <ListItemText primary="Corrida" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CycloneIcon />
      </ListItemIcon>
      <ListItemText primary="MOBA" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DiamondIcon />
      </ListItemIcon>
      <ListItemText primary="Battle Royale" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Card Games" />
    </ListItemButton>
  </React.Fragment>
);

