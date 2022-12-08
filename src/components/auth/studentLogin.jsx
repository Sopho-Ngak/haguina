import classNames from "classnames";
import { Formik, Form } from "formik";
import { Button } from "reactstrap";
import { InputText } from "../common/inputs";
import styles from "./auth.module.css";
import student from '../../assets/student.svg';
import { loginSchema } from "./validation";

const StudentLogin = () => {
    const initialValues = {
        email: "",
        password: "",
    };
    const handleSubmit = (values) => {
        console.log("values....", values);
    };
    return (
        <div className={classNames(styles.container, "container-fluid")}>
            <div className={classNames("row", styles.row)}>
                <section
                    className={classNames(
                        "col-lg-6 col-sm-12",
                        styles.lftPanel
                    )}
                >
                  <img src={student}/>
                </section>
                <section
                    className={classNames(
                        "col-lg-6 col-sm-12",
                        styles.rghtPanel
                    )}
                >
                    <div className={classNames(styles.loginSection)}>
                        <section className={classNames(styles.header)}>
                            <h1>Student</h1>
                            <small>
                                Enter your credentials to access the platform.
                            </small>
                        </section>
                        <section className={classNames(styles.body)}>
                            <Formik
                                validationSchema={loginSchema}
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <InputText
                                        name="email"
                                        bsSize="lg"
                                        placeholder="Enter your e-mail,phone or username"
                                    />
                                    <InputText
                                        type="password"
                                        name="password"
                                        bsSize="lg"
                                        placeholder="Enter your password"
                                    />
                                </Form>
                            </Formik>
                        </section>
                        <section className={classNames("col-lg-12", styles.forgotPassword)}>
                            <p>Forgot Password</p>
                        </section>
                        <section
                            className={classNames("col-lg-12", styles.footer)}
                        >
                            <Button
                                block={true}
                                color="primary"
                                outline={false}
                            >
                                Login
                            </Button>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default StudentLogin;
