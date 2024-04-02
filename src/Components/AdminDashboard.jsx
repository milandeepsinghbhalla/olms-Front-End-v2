import * as React from 'react';
import { Box, Divider, Grid, Tabs, Typography } from "@mui/material";

import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import myColors from '../assets/Util/myColors';


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardTable from './DahboardTable';



const drawerWidth = 240;


const navbarHeight = localStorage.getItem('navbarHeight')
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiPaper-root': {
            backgroundColor: myColors.backgroundGrey,
            marginTop: navbarHeight,
            zIndex: 99,

            [theme.breakpoints.up('md')]: {
                paddingTop: '0.1em'
            }

        },
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const AdminDashboard = () => {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen((state) => {
            return !state;
        })
    }

    // const handleDrawerOpen = () => {
    //   setOpen(true);
    // };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* management sidebar */}
            <Grid container>
                <Grid item xs={1}

                    flexShrink={0}>

                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader  >
                            <IconButton onClick={toggleDrawer}>
                                {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                                <MenuIcon />
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List onClick={handleDrawerClose}>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List onClick={handleDrawerClose}>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Grid>


                <Grid item xs={11} flexGrow={1} >
                    <Grid p={4} pl={{
                        xs: 5,
                        md: 0
                    }

                    } container>
                        <Grid item mb={2} xs={12}>

                            <Typography color={"textBlack"} sx={
                                {
                                  fontSize: {
                                    xs: '1.5em',
                                    md: '3em'
                                  }
                                }
                            } variant='h3'>
                                Dashboard
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs variant="scrollable" scrollButtons
                                        allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="User Approvals" value="1" />
                                        <Tab label="Shippers" value="2" />
                                        <Tab label="Carriers" value="3" />
                                        <Tab label="Dispatchers" value="4" />
                                        <Tab label="Brokers" value="5" />

                                    </Tabs>
                                </Box>
                                <TabPanel sx={{
                                    paddingX: {
                                        xs: 1.5,
                                        md: 2
                                    },
                                    fontSize: {
                                        xs: '0.6em'
                                    }
                                }} value="1"><DashboardTable title="User Approvals" apiUrl='/user-approvals'/></TabPanel>
                                <TabPanel value="2">Shippers Management Table will be added soon...!!</TabPanel>
                                <TabPanel value="3">Carriers Management Table will be added soon...!!</TabPanel>
                                <TabPanel value="4">Dispathcers Management Table will be added soon...!!</TabPanel>
                                <TabPanel value="5">Brokers Management Table will be added soon...!!</TabPanel>

                            </TabContext>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            {/* main dashboard */}
        </>
    )
}

export default AdminDashboard;