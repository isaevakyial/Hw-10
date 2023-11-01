import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <aside>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="post"
      >
        Post
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="comment"
      >
        Comment
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="postPage"
      >
        Post Page
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="commentPage"
      >
        Comment Page
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="users"
      >
        User
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="usersPage"
      >
        User Page
      </NavLink>
    </aside>
  );
};

export default Menu;
