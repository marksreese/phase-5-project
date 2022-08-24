import { AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button } from "@mui/material/"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                 >
                <MenuIcon />
                </IconButton>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    SE51622 "Stranger Strings" NFTs!
                </Typography>
                    <IconButton color="inherit"
                    component={Link}
                    to={"/"}
                    >
                    <HomeIcon/>
                    </IconButton>
                    <Button color="inherit"
                    component={Link}
                    to={"/nfts"}
                    >My NFTs
                    </Button>
                    <Button color="inherit"
                    component={Link}
                    to={"/quiz"}
                    >Take a quiz!
                    </Button>
                    <IconButton color="inherit"
                    component={Link}
                    to={"/login"}>
                    <AccountCircleIcon/>
                    </IconButton>
                    <IconButton color="inherit"
                    component={Link}
                    to={"/login"}>
                    <LogoutIcon/>
                    </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar