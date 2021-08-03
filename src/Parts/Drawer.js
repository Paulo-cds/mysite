import {useState} from 'react';
import {
  useHistory,
} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import * as S from '../styles/DrawerStyle'
import background from '../images/background.jpg'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import perfil from '../images/perfil.jpg'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({  
  root: {
    display: 'flex',
    backgroundImage: `url(${background})`,
    minHeight: '50vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(2),
    color: 'white',
  },  
  
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  
  
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const history = useHistory()
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuClick = route => {      
    history.push(route)
    handleDrawer()  
         
  }

  

  return (
    <div className={classes.root}>      
     
      
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>

      <S.DivPerfil>
        <S.Perfil src={perfil} />
        <S.Social>
          <S.LinkSocial href='https://www.instagram.com/webdeveloper.paulorpd/' target='blanck'><S.ImgSocial src={instagram}/></S.LinkSocial>
          <S.LinkSocial href='https://github.com/Paulo-cds' target='blanck'><S.ImgSocial src={github}/></S.LinkSocial>
          <S.LinkSocial href='https://www.linkedin.com/in/paulorpd/' target='blanck'><S.ImgSocial src={linkedin}/></S.LinkSocial>
        </S.Social>
      </S.DivPerfil>  


      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText> Home </ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/about')}>
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText> Sobre </ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/jobs')}>
            <ListItemIcon><DeveloperModeIcon/></ListItemIcon>
            <ListItemText> Portifólio </ListItemText>
          </ListItem>
        </List>        
      </Drawer>

      
      
      
    </div>
  );
}
