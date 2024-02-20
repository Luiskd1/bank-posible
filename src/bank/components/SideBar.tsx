import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';


export const SideBar = ({drawerWidth = 240}) => {
  return (
    
    <Box
        component={'nav'}
        sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
        variant="permanent"
        open={true}
        sx={{display:{xs:'block'},
        '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}}
      }
        >

          <Toolbar>

            <Typography variant='h6' noWrap component={'div'}>1001851675 </Typography>
            
          </Toolbar>
          <Divider/>
        
        <List>
          {
            ['11 enero 12:04','12 enero 5:05', '13:enero 10:6', '15 enero'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MonetizationOnIcon/>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.  '}/>
                    
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        </Drawer>
    </Box>
  )
}
