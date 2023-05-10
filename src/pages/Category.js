import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Category.module.css";

const Category = () => {
  const navigate = useNavigate();

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.category}>
      <div className={styles.headerTop}>
        <div className={styles.navbar}>
          <div className={styles.linksNavbar}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <b className={styles.home}>Home</b>
              </div>
              <div className={styles.profileWrapper}>
                <b className={styles.home}>Profile</b>
              </div>
              <div className={styles.changePasswordWrapper}>
                <b className={styles.home}>Change Password</b>
              </div>
              <Input
                className={styles.inputdefault}
                type="text"
                style={{ width: "180px" }}
                size="middle"
                placeholder="Search"
              />
            </div>
            <div className={styles.helpParent}>
              <div className={styles.help}>
                <img
                  className={styles.iconHelp}
                  alt=""
                  src="../icon-help@2x.png"
                />
                <b className={styles.help1}>Help</b>
              </div>
              <div className={styles.admin}>
                <b className={styles.adminName}>Admin Name</b>
                <img
                  className={styles.iconHelp}
                  alt=""
                  src="../icon--admin-user@2x.png"
                />
              </div>
              <Link className={styles.logout} to="/logindashboard">
                <b className={styles.logout1}>Logout</b>
                <img
                  className={styles.iconLogout}
                  alt=""
                  src="../iconlogout@2x.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <Link className={styles.logo} to="/dashboard">
          <a className={styles.bo51} onClick={onBO51Click} />
        </Link>
      </div>
      <div className={styles.rightSideParent}>
        <div className={styles.rightSide}>
          <div className={styles.dashboard}>
            <div className={styles.tables}>
              <div className={styles.tablesChild} />
            </div>
            <b className={styles.category1}>Category</b>
          </div>
        </div>
        <div className={styles.leftSide}>
          <div className={styles.dashboardParent}>
            <Link className={styles.userList} to="/dashboard">
              <img
                className={styles.iconDashboard}
                alt=""
                src="../icondashboard@2x.png"
              />
              <b className={styles.dashboard2}>Dashboard</b>
            </Link>
            <Link className={styles.userList} to="/user-list">
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconuser1@2x.png"
              />
              <b className={styles.dashboard2}>User List</b>
            </Link>
            <Link className={styles.userList} to="/ads-list">
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconadslist@2x.png"
              />
              <b className={styles.dashboard2}>Ads List</b>
            </Link>
            <div className={styles.classifiedList}>
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconcategory@2x.png"
              />
              <b className={styles.dashboard2}>Category</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
