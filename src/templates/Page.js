
import Typography from '@material-ui/core/Typography'
import teal from '@material-ui/core/colors/teal'

import { makeStyles } from '@material-ui/core/styles'


// import {RubberBand} from 'animate-css-styled-components'
import '../styles/PageStyle.css'






const useStyles = makeStyles(() => ({
    title: {
        marginBottom: '1rem',
        
    },
    text: {
        
        minHeight: '50vh'
    }, 
    whats:{
        height: '4rem',
        width: '4rem',  
        position: 'fixed',
        bottom: '2rem',
        right: '1rem',
        borderRadius: '100%',
        zIndex: 2,
    },


    head: {
        
        width: '100%',
        //height: '50vh',
        display: 'block',
        padding: 0,
        alignItems: 'center',   
        textAlign: 'center',
        
    },    
    logo: {
        width: '17rem',
        margin: '1rem auto 2rem' ,        
        /* borderRadius: '100%',
        boxShadow: '2px 2px 3px white', */
    }
   
   
}))


const Page = ({title, Component}) => {
    const classes = useStyles()
    return(
        <>
            {/* <Typography variant='h3' className = 'text'>

                 <div className = {classes.head}>
                    <img src={logo} alt='Logo' className = {classes.logo}/>

                </div> 

                <div className = {classes.title}>
                     <RubberBand duration='2s' delay='0.5s'> 
                        {title}  
                     </RubberBand>  
                                 
                </div>
                 <div>
                <a href="https://bit.ly/3oJJjIE" target="_blank" >
                    <img src={Whats} alt='Logo whatsaap' className = {classes.whats}/>                    
                </a>
                </div>                             
            </Typography> */}
            <Component className = {classes.text}/>
        </>
    )
}


export default Page