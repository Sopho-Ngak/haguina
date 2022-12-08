import classNames from "classnames";
import { useState } from "react";
import {MdMenu,MdOutlineSettings,MdOutlineAccountTree,MdOutlineLogout} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import styles from './navbar.module.css';
import { useDispatch } from "react-redux";
import { handleToggle } from "../../../state/slices/sidebar.slice";
const Navbar=()=>{
    const[show,setShow]=useState(false);
    const dispatch=useDispatch();
    const showSidebar=()=>{
        dispatch(handleToggle(true))
    }
    return(
            <div className={classNames(styles.container,styles.fullWidth)}>
                <div className={classNames(styles.logoSection)}>
                    <MdMenu size={25} onClick={showSidebar}/>
                    <p>Haguina School</p>
                </div>
                <div className={classNames(styles.settingsSection)}>
                    <MdOutlineSettings onClick={()=>setShow(!show)}/>
                    {/* {show && <div className={classNames(styles.subSection)}></div>} */}
                    {show && <div className={`${styles.userOptionsMenu}`}>
                        <section className={`${styles.MenuItem}`}>
                                <FaUserCircle className={`${styles.icon}`}/>
                                <span>Profile</span>
                        </section>
                        <section className={`${styles.MenuItem}`} >
                                <MdOutlineAccountTree className={`${styles.icon}`}/>
                                <span>Switch Account</span>
                        </section>
                        <section className={`${styles.MenuItem}`} >
                                <MdOutlineLogout className={`${styles.icon}`}/>
                                <span>Logout</span>
                        </section>
                    </div>
                  }
                </div>
            </div>
    );
}
export default Navbar