import classNames from "classnames";
import styles from './homepage.module.css';
import std from '../../assets/stdIcon.png';
import { useNavigate } from "react-router-dom";
const HomePage=()=>{
    const navigate=useNavigate();
   return (
        <div className={classNames('container-fluid',styles.container)}>
            <div className={classNames('row',styles.row)}>
                <div className={classNames('col-lg-12',styles.header)}>
                     <h1>Haguina School</h1>
                </div>
                <div className={classNames('col-lg-4 col-sm-12',styles.section)}>
                    <section className={classNames(styles.card)}>
                        <img src={std} alt="student icon"/>
                    </section>
                    <button onClick={()=>navigate('/auth/student')}>Login As Student</button>
                </div>
                <div className={classNames('col-lg-4 col-sm-12',styles.section)}>
                    <section className={classNames(styles.card)}>
                        <img src={std} alt="student icon"/>
                    </section>
                    <button onClick={()=>navigate('/auth/teacher')}>Login As Teacher</button>
                </div>
                <div className={classNames('col-lg-4 col-sm-12',styles.section)}>
                    <section className={classNames(styles.card)}>
                        <img src={std} alt="student icon"/>
                    </section>
                    <button onClick={()=>navigate('/auth/parent')}>Login As  Parent</button>
                </div>
            </div>
        </div>
   );
}
export default HomePage;