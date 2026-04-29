import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import styles from "../Styles/Footer.module.css";

export default function Footer(){
    return(
       <footer>
        <div className={styles.socialMedia}>
            <p> Get Connected With us on Social Media </p>
            <div className={styles.socialMediaIcons}>
                <FaFacebook className = {styles.icon}/>
                <FaWhatsapp className = {styles.icon}/>
                <FaTelegram className = {styles.icon}/>
                <FaTwitter className = {styles.icon}/>
                <FaYoutube className = {styles.icon}/>
                <FaLinkedin className = {styles.icon}/>
                <FaInstagram className = {styles.icon}/>
            </div>
        </div>

        <div className={styles.links}>

        <div><a href="#">IRCTC Trains</a></div>
        <div><a href="#">General Information</a></div>
        <div><a href="#">Important Information</a></div>
        <div><a href="#">Agents</a></div>
        <div><a href="#">Enquiry</a></div>
        <div><a href="#">How To</a></div>
        <div><a href="#">IRCTC eWallet</a></div>
        <div><a href="#">IRCTC Official App</a></div>
        <div><a href="#">Advertise with us</a></div>
        <div><a href="#">Refund Rules</a></div>
        <div><a href="#">Person With Disability Facilities</a></div>
        <div><a href="#">For Newly Migrated Agents</a></div>
        <div><a href="#">Mobile Zone</a></div>
        <div><a href="#">Policies</a></div>
        <div><a href="#">Ask Disha ChatBot</a></div>
        <div><a href="#">About Us</a></div>

        </div>
       </footer>
    )
}