import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BiBarChartSquare } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import classNames from "classnames";
import Img from "../../../assets/img_avatar.png";
import styles from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "../../../state/slices/sidebar.slice";
const SideBar = () => {
     const {toggle}=useSelector(state=>state.sidebar);
     const dispatch=useDispatch();
     const hideSidebar=()=>{
         dispatch(handleToggle(false))
     }
    return (
        <>
            <div className={classNames(styles.containerShadow, `${toggle && styles.show}`)} onClick={hideSidebar}></div>
            <div className={classNames(styles.container, `${toggle && styles.show}`)}>
                <div className={classNames(styles.sectionI)}>
                    <MdSchool size={25} />
                    <p>Open University</p>
                </div>
                <div className={classNames(styles.sectionI)}>
                    <img src={Img} />
                    <p>Fiston N.</p>
                </div>
                <Sidebar backgroundColor="transparent">
                    <Menu>
                        <SubMenu label="Charts" icon={<BiBarChartSquare />}>
                            <MenuItem icon={<BiBarChartSquare />}>
                                Pie charts
                            </MenuItem>
                            <MenuItem icon={<BiBarChartSquare />}>
                                Line charts
                            </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<BiBarChartSquare />}>
                            Documentation
                        </MenuItem>
                        <MenuItem icon={<BiBarChartSquare />}>
                            Calendar
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    );
};
export default SideBar;
