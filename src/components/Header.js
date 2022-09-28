import { Link } from "react-router-dom";

import classes from "./Header.module.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import Notifications from "@mui/icons-material/Notifications";
import Email from "@mui/icons-material/EmailOutlined";
import Bookmarker from "@mui/icons-material/BookmarkBorder";
import List from "@mui/icons-material/List";
import Person from "@mui/icons-material/Person";
import More from "@mui/icons-material/MoreHorizRounded";
import Edit from "@mui/icons-material/Edit";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <TwitterIcon fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/home">
                <HomeIcon fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/home">
                <TagIcon fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/notifications">
                <Notifications fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/messages">
                <Email fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/saved">
                <Bookmarker fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/saved">
                <List fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/saved">
                <Person fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/saved">
                <More fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/saved">
                <Edit fontSize="large" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
