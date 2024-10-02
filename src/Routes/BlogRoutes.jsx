import { Route, Routes } from "react-router-dom"
import LoginPage from "../Pages/Login"
import BlogAuthor from "../Pages/BlogAuthor"
import CreateBlog from "../Pages/Blog/CreateBlog"

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  return localStorage.getItem("jwt") ? element : <Navigate to="/blog/auth" />;
};

const BlogRoutes = ()=>{
    return(
        <Routes>
             <Route path="auth" element={<LoginPage />} />
             <Route path="author" element={<ProtectedRoute element={<BlogAuthor />} />} />
             <Route path="author/create" element={<ProtectedRoute element={<CreateBlog />} />} />

        </Routes>
    )
}


export default BlogRoutes