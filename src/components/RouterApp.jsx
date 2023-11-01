import React from "react";
import MainLayout from "../layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Post from "./Post";
import CommentPage from "./CommentPage";
import Comment from "./Comment";
import PostPage from "./PostPage";
import Users from "./Users";
import UsersPage from "./UsersPage";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="post" element={<Post />} />
          <Route path="postPage/:id" element={<PostPage />} />
          <Route path="comment" element={<Comment />} />
          <Route path="commentpage/:id" element={<CommentPage />} />
          <Route path="users" element={<Users />} />
          <Route path="usersPage/:id" element={<UsersPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
