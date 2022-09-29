import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Posts from "./components/posts/Posts";
import MainPage from "./components/mainPage/MainPage";
import DetailPost from "./components/posts/DetailPost";
import PostForm from "./components/posts/crud/AddEditPost";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import PostsPaginate from "./components/posts/PostsPaginate";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/postsPaginated" element={<PostsPaginate />} />
          <Route path="/posts/:id" element={<DetailPost />} />
          <Route path="/form" element={<PostForm />} />
          <Route path="/form/:id" element={<PostForm />} />
        </Routes>
        <ToastContainer autoClose={3000} />
      </main>
      <Footer />
    </>
  );
}

export default App;
