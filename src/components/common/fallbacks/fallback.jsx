import { Spinner } from 'reactstrap';
import styles from './fallback.module.css';
export const MainFallback=()=>{
    return (
        <div className={`${styles.mainFallback}`}>
              <Spinner/>
        </div>
    )
}