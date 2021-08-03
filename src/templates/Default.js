
import Container from '@material-ui/core/Container'
import Footer from './Footer'

import '../styles/DefaultStyle.css'
import { makeStyles } from '@material-ui/core/styles'

import PersistentDrawerLeft from '../Parts/Drawer'


const useStyles = makeStyles(() => ({    
    body: {        
        width: '100%',  
        minHeight: '100vh',
    },
    
}))


const Default = ({children}) => {
    const classes = useStyles()
    return(
        <div className={classes.body}>
            <PersistentDrawerLeft/>                            
            <Container className='container' style={{padding: 0, minHeight: '50vh'}} maxWidth="false">
                {children}
            </Container>            
            <Footer/>
        </div>
    )
}


export default Default