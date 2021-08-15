
import { useState } from 'react'
import goTop from '../images/gotop.png'
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

    const [top, setTop] = useState('none')

    window.addEventListener('scroll', function(){
        if(this.window.pageYOffset > 350){
            setTop('block')
        } else {
            setTop('none')
        }
    })

    const gotoTop = () => {
        window.scrollTo({top: 0,left: 0 , behavior: 'smooth'});
    }

    return(
        <>            
            <Component className = {classes.text}/>
            <div className="goTop" style={{display:top}} onClick={gotoTop}>
                <img src={goTop}/>
            </div>
        </>
    )
}


export default Page