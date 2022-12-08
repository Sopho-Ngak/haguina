import classNames from "classnames";
import styles from './wrapper.module.css';
const ContentWrapper=(props)=>{
     return (
        <div className={classNames(styles.container,styles.fullWidth)}>
            <div className={classNames(styles.innerContainer)}>
                {props.children}
            </div>
        </div>
     );
}
export default ContentWrapper