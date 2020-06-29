import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { StyledMenuItem } from './styles/StyledHeader'

const Header = ({
  theme,
  anchorEl,
  open,
  handleClose,
  handleMenu,
  notifs,
  handleLogout,
  user
}) => {
  return (
    <AppBar style={theme.palette.blues.Twilight}>
      <Toolbar>
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          News
        </Typography>
        <div>
          <IconButton
            aria-label="show new notifications"
            aria-controls="menu-appbar-notif"
            aria-haspopup="true"
            onClick={e => handleMenu(e, 'notif')}
            color="inherit"
          >
            <Badge
              badgeContent={(notifs && notifs.length) || 0}
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {/* <Menu
            id="menu-appbar-notif"
            anchorEl={anchorEl.notif}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open.notif}
            onClose={() => handleClose('notif')}
          ></Menu> */}
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar-user"
            aria-haspopup="true"
            onClick={e => handleMenu(e, 'user')}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar-user"
            anchorEl={anchorEl.user}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open.user}
            onClose={() => handleClose('user')}
          >
            <StyledMenuItem>Hey {user.username} !</StyledMenuItem>
            <MenuItem onClick={() => handleLogout()}>Log Out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
