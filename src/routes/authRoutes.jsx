import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ParentLogin from "../components/auth/parentLogin";
import StudentLogin from "../components/auth/studentLogin";
import TeacherLogin from "../components/auth/teacherLogin";
import { MainFallback } from "../components/common/fallbacks/fallback";
const Login=lazy(()=>import ("../components/auth/login"));
function AuthRoutes() {
    return (
        <Suspense fallback={<MainFallback/>}>
            <Routes>
                <Route path="/student" element={<StudentLogin/>}></Route>
                <Route path="/teacher" element={<TeacherLogin/>}></Route>
                <Route path="/parent" element={<ParentLogin/>}></Route>
                <Route path="*" element={<StudentLogin/>}></Route>
            </Routes>
        </Suspense>
    );
}
export default AuthRoutes;
