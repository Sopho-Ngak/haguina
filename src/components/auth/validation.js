import * as YUP from 'yup'
export const loginSchema=YUP.object().shape({
    email:YUP.string().required("Please this field is required"),
    password:YUP.string().required("Password is required")
})