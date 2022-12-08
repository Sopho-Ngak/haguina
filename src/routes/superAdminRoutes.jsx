import Navbar from "../components/common/navbar";
import SideBar from "../components/common/sidebar";
import { Suspense,lazy } from "react";
import ContentWrapper from "../components/common/contentWrapper/contentWrapper";
import { Routes, Route } from "react-router-dom";
import { MainFallback } from "../components/common/fallbacks/fallback";
function SPAdminRoutes() {
    return (
      <>
        <Navbar />
        <SideBar />
        <ContentWrapper>
            <Suspense fallback={<MainFallback />}>
                <Routes>
                    <Route path="/*" element={<AuthRoutes />}></Route>
                </Routes>
            </Suspense>
        </ContentWrapper>
      </>
    );
}
export default SPAdminRoutes;
