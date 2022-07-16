import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import './footer.css'


const Footer = () => {
    const socials = [{social:faFacebook, url:"https://www.facebook.com/techkriti.iitk",id:"fb"},
        {social:faYoutube,url:"https://www.youtube.com/c/TechkritiIITKanpur",id:"yt"},
        {social:faInstagram,url:"https://www.instagram.com/techkriti.iitk/?hl=en",id:"ig"},
        {social:faTwitter,url:"https://twitter.com/techkriti_iitk",id:"tw"},
        {social:faLinkedinIn,url:"https://www.linkedin.com/school/techkriti'13/",id:"li"}]
    const social = socials.map((s)=>{
        return(
            <a  target='_blank' href={s.url}><FontAwesomeIcon id={s.id} className='social-icon' icon={s.social}/></a>
        )
    })
    return (
        <div className='footer'>
            {social}
        </div>
    )
}

export default Footer