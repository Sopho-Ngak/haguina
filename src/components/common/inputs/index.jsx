import { useField } from "formik";
import {Input} from 'reactstrap';
export const InputText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mt-10">
            <div className="relative z-0">
                <label className="font-small capitalize">{label}</label>
                <Input  placeholder=" " {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small text-red">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};