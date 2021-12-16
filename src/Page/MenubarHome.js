import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Container, Button, Grid, Paper, TextField } from '@mui/material';
import '../Css/Index.css'
import logo from '../Img/logo.png'
import '../Css/Login.css'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function Menubarindex() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    
    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => (event) =>{
        setState(open)
    }
    return (

        <div>

            <Box sx={{ flexGrow: 1 }} className="pdmenu">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={logo} className="logo" />
                        </Typography>
                        <Search style={{ color: "#000000", backgroundColor: "#eeeeee", border: "1px solid rgb(229, 232, 236)" }}>
                            <SearchIconWrapper>
                                <SearchIcon style={{color:"#db2531"}}/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <React.Fragment>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                                    <Tooltip title="Account settings">
                                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                            <Avatar  sx={{ width: 40, height: 40 }}></Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',

                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <Avatar /> CHAKPHET WONGMANEE
                                    </MenuItem>
                                    <Divider />
                                    
                                    <a href="/Forexweb/setting" style={{textDecoration:"none",color:"#000000DE"}}>
                                    <MenuItem >
                                    
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        ตั้งค่าระบบ
                                    </MenuItem>
                                    </a>
                                    <a href="/Forexweb" style={{textDecoration:"none",color:"#000000DE"}}>
                                    <MenuItem href="/Forexweb">
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        ออกจากระบบ
                                    </MenuItem>
                                    </a>
                                </Menu>
                            </React.Fragment>
                    </Toolbar>
                </Container>
            </Box>

        </div>

    );
}

export default Menubarindex;