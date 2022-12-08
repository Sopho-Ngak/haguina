import ContentWrapper from "./components/common/content-wrapper";
import Navbar from "./components/common/navbar";
import SideBar from "./components/common/sidebar";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";
import { MainFallback } from "./components/common/fallbacks/fallback";
import StudentRoutes from "./routes/studentRoutes";
import HomePage from "./components/homepage";
const AuthRoutes = React.lazy(() => import("./routes/authRoutes"));
function App() {
    return (
        <div className="App">
            <Suspense fallback={<MainFallback />}>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="auth/*" element={<AuthRoutes />}></Route>
                    <Route path="student/*" element={<StudentRoutes />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
