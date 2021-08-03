


import { makeStyles } from '@material-ui/core/styles'


// import {RubberBand} from 'animate-css-styled-components'
import '../styles/PageStyle.css'






const useStyles = makeStyles(() => ({
    
    text: {
        
        minHeight: '50vh',
        paddingBottom: '20%',
    }, 
    
   
}))


const Page = ({Component}) => {
    const classes = useStyles()
    return(
        <>            
            <Component className = {classes.text}/>
        </>
    )
}


export default Page