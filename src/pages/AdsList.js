import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AdsList.module.css";
import Ads from "../components/Ads";


const AdsList = () => {
  const navigate = useNavigate();

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.adsList}>
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
        <Link className={styles.logo} to="/logindashboard">
          <a className={styles.bo51} onClick={onBO51Click} />
        </Link>
      </div>
      <div className={styles.rightSideParent}>
        <div className={styles.rightSide}>
          <div className={styles.dashboard}>
            <div className={styles.tables}>
              <div className={styles.tablesChild}>
                <Ads/>
              </div>
            </div>
            <b className={styles.adsList1}>Ads List</b>
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
              <b className={styles.category}>Dashboard</b>
            </Link>
            <Link className={styles.userList} to="/user-list">
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconuser1@2x.png"
              />
              <b className={styles.category}>User List</b>
            </Link>
            <div className={styles.adsList2}>
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconadslist@2x.png"
              />
              <b className={styles.category}>Ads List</b>
            </div>
            <Link className={styles.userList} to="/category">
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconcategory@2x.png"
              />
              <b className={styles.category}>Category</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsList;
