import Navbar from "../components/common/navbar";
import SideBar from "../components/common/sidebar";
import { Suspense,lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainFallback } from "../components/common/fallbacks/fallback";
import ContentWrapper from "../components/common/content-wrapper";
import StudentLogin from "../components/auth/studentLogin";
function StudentRoutes() {
    return (
      <>
        <Navbar />
        <SideBar />
        <ContentWrapper>
            <Suspense fallback={<MainFallback />}>
                <Routes>
                    <Route path="/" element={<MainFallback/>}></Route>
                </Routes>
            </Suspense>
        </ContentWrapper>
      </>
    );
}
export default StudentRoutes;
