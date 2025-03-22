import { useLocation } from "react-router-dom";

import Header from "../app/sections/common/header";
import Footer1 from "../app/sections/common/footer1";
import Footer2 from "../app/sections/common/footer2";
import AppRoutes from "../routing/app-routes";

export default function RootLayout() {
    const currentpath = useLocation().pathname;
    return (
        <>
            <div className="page-wraper">

                {
                    !currentpath?.startsWith('/error') &&
                    <Header />
                }

                {/* CONTENT START */}
                <div className="page-content">
                    <AppRoutes />
                </div>
                {/* CONTENT END */}

                {
                    !currentpath?.startsWith('/error') &&
                    (
                        ((currentpath === "/index2" || currentpath === "/index4") &&
                            <Footer2 />) || <Footer1 />
                    )
                }

                {/* BUTTON TOP START */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

            </div>
        </>
    )
}