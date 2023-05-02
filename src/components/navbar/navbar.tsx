import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PAGE_LINKS } from '../../constants';

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Weather
        </Typography>

        {Object.entries(PAGE_LINKS).map(([key, value]) => (
          <NavLink key={key} to={value}>
            {key}
          </NavLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};
