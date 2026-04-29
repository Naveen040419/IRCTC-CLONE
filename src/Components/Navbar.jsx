import { FaBell, FaHome, FaQuestionCircle } from "react-icons/fa";
import styles from "../Styles/Navbar.module.css";

export default function Navbar(){

    const user = "";
    const currentDate = new Date();

    return(
        <nav className={styles.navBar}>
            <div className={styles.logoContainer}>
                <FaHome />
                <h1> IRCTC </h1>
            </div>

            <div className={styles.navItems}>
                <p>BOOKINGS</p>
                <p>CONTACT US</p>
                <p>
                    { currentDate.toLocaleDateString()}[{currentDate.toLocaleTimeString()}]
                </p>
                <FaBell />
                <FaQuestionCircle />

                { user ? (
                    <div className={styles.authBtn}>
                        <button> LOGOUT </button>
                        <p> Welcome {user} </p> 
                    </div>) :
                    <div className={styles.authBtn}>
                        <button className={styles.loginBtn}> LOGIN </button>
                        <button className={styles.registerBtn}> REGISTER </button>
                    </div>
                }
            </div>
        </nav>
    )
}