import classNames from "classnames";
import { Formik,Form} from "formik";
import { Button } from "reactstrap";
import { InputText } from "../common/inputs";
import styles from './auth.module.css';

const Login=()=>{
    const initialValues={
        email:"",
        password:""
    }
    const handleSubmit=(values)=>{
        console.log("values....",values)
    }
    return (
        <div className={classNames(styles.container,'container-fluid')}>
            <div className={classNames('row',styles.row)}>
                <div className={classNames('col-lg-12',styles.header)}>
                    <p>Login</p>
                </div>
                <div className={classNames('col-lg-12',styles.body)}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                             <InputText name="email" bsSize="lg" label="e-mail" className={classNames(styles.input)}/>
                             <InputText  type="password" name="password" bsSize="lg" label="Password"/>
                        </Form>
                    </Formik>
                </div>
                <div className={classNames('col-lg-12',styles.footer)}>
                    <Button block={true} color="primary" outline={false}>Login</Button>
                </div>
            </div>
        </div>
    )
}
export default Login;