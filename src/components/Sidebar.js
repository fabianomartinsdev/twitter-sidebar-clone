import { Link } from "react-router-dom";

import SidebarLink from "./SidebarLink";

import classes from "./Sidebar.module.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import BookmarkerIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import MoreIcon from "@mui/icons-material/MoreHorizRounded";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Link to="/">
        <SidebarLink Icon={TwitterIcon} />
      </Link>
      <Link to="home">
        <SidebarLink text="Home" Icon={HomeIcon} />
      </Link>
      <SidebarLink text="Explore" Icon={TagIcon} />
      <SidebarLink text="Notifications" Icon={NotificationsIcon} />
      <SidebarLink text="Messages" Icon={EmailIcon} />
      <SidebarLink text="Bookmarks" Icon={BookmarkerIcon} />
      <SidebarLink text="Lists" Icon={ListIcon} />
      <SidebarLink text="Profile" Icon={PersonIcon} />
      <SidebarLink text="More" Icon={MoreIcon} />
    </div>
  );
}
