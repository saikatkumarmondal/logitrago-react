import { Route, Routes } from "react-router-dom";

import Home1Page from "../app/components/home/index";
import Home2Page from "../app/components/home/index2";
import Home3Page from "../app/components/home/index3";
import Home4Page from "../app/components/home/index4";
import AboutUsPage from "../app/components/misc/about-us";
import ContactPage from "../app/components/misc/contact-us";
import FaqPage from "../app/components/misc/faq";
import Error404Page from "../app/components/misc/error404";
import BlogGridPage from "../app/components/blogs/blog-grid";
import BlogsDetailPage from "../app/components/blogs/blog-detail";
import Services1Page from "../app/components/services/services1";
import Services2Page from "../app/components/services/services2";
import ServicesDetailPage from "../app/components/services/services-detail";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home1Page />} />
            <Route path='/index' element={<Home1Page />} />
            <Route path='/index2' element={<Home2Page />} />
            <Route path='/index3' element={<Home3Page />} />
            <Route path='/index4' element={<Home4Page />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/error404' element={<Error404Page />} />
            <Route path='/services/services1' element={<Services1Page />} />
            <Route path='/services/services2' element={<Services2Page />} />
            <Route path='/services/detail' element={<ServicesDetailPage />} />
            <Route path='/blogs/grid' element={<BlogGridPage />} />
            <Route path='/blogs/detail' element={<BlogsDetailPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
            <Route path='*' element={<Error404Page/>} />
            <Route element={<Error404Page/>} />
        </Routes>
    )
}

export default AppRoutes;