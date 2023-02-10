import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onBO51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUserListClick = useCallback(() => {
    navigate("/user-list");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerTop}>
        <div className={styles.navbar}>
          <div className={styles.linksNavbar}>
            <div className={styles.logo}>
              <a className={styles.bo51} onClick={onBO51Click} />
            </div>
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
      </div>
      <div className={styles.rightSideParent}>
        <div className={styles.rightSide}>
          <div className={styles.dashboard1}>
            <div className={styles.pendingAds}>
              <div className={styles.pendingAdsChild} />
              <div className={styles.pendingAdsItem} />
              <div className={styles.moreInfo}>More info</div>
              <img
                className={styles.iconEdit}
                alt=""
                src="../iconedit@2x.png"
              />
              <b className={styles.b}>10</b>
              <div className={styles.pendingAds1}>Pending Ads</div>
            </div>
            <div className={styles.activeAds}>
              <div className={styles.activeAdsChild} />
              <div className={styles.activeAdsItem} />
              <div className={styles.moreInfo1}>More info</div>
              <img
                className={styles.iconBell}
                alt=""
                src="../iconbell@2x.png"
              />
              <b className={styles.b1}>30</b>
              <div className={styles.activeAds1}>Active Ads</div>
            </div>
            <div className={styles.inactiveUsers}>
              <div className={styles.inactiveUsersChild} />
              <div className={styles.inactiveUsersItem} />
              <b className={styles.moreInfo2}>More info</b>
              <img
                className={styles.iconFiles}
                alt=""
                src="../iconfiles@2x.png"
              />
              <b className={styles.b2}>5</b>
              <b className={styles.inactiveUsers1}>Inactive Users</b>
            </div>
            <div className={styles.activeUsers}>
              <div className={styles.activeUsersChild} />
              <div className={styles.activeUsersItem} />
              <div className={styles.moreInfo3}>More info</div>
              <img
                className={styles.iconUser}
                alt=""
                src="../iconuser@2x.png"
              />
              <b className={styles.b3}>10</b>
              <div className={styles.activeUsers1}>Active Users</div>
            </div>
            <b className={styles.dashboard2}>Dashboard</b>
          </div>
          <div className={styles.latestRegisteredUser}>
            <div className={styles.groupParent}>
              <div className={styles.latestAdsParent}>
                <b className={styles.latestAds}>Latest Ads</b>
                <img
                  className={styles.iconLatestAds}
                  alt=""
                  src="../icon-latest-ads@2x.png"
                />
              </div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.latestRegisteredUserInner}>
              <div className={styles.sinceParent}>
                <b className={styles.since}>Since</b>
                <b className={styles.email}>Email</b>
                <b className={styles.username}>UserName</b>
              </div>
            </div>
            <div className={styles.latestRegisteredUserChild} />
            <div className={styles.latestRegisteredUserItem} />
          </div>
          <div className={styles.latestRegisteredUser1}>
            <div className={styles.groupParent}>
              <div className={styles.latestAdsParent}>
                <b className={styles.latestAds}>Latest Ads</b>
                <img
                  className={styles.iconLatestAds}
                  alt=""
                  src="../icon-latest-ads1@2x.png"
                />
              </div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.latestRegisteredUserInner}>
              <div className={styles.sinceParent}>
                <b className={styles.since}>Since</b>
                <b className={styles.email}>Email</b>
                <b className={styles.username}>UserName</b>
              </div>
            </div>
            <div className={styles.latestRegisteredUserChild} />
            <div className={styles.latestRegisteredUserItem} />
          </div>
        </div>
        <div className={styles.leftSide}>
          <div className={styles.dashboardParent}>
            <div className={styles.dashboard3}>
              <img
                className={styles.iconDashboard}
                alt=""
                src="../icondashboard@2x.png"
              />
              <b className={styles.category}>Dashboard</b>
            </div>
            <a className={styles.userList} onClick={onUserListClick}>
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconuser1@2x.png"
              />
              <b className={styles.category}>User List</b>
            </a>
            <Link className={styles.adsList} to="/ads-list">
              <img
                className={styles.iconDashboard}
                alt=""
                src="../iconadslist@2x.png"
              />
              <b className={styles.category}>Ads List</b>
            </Link>
            <Link className={styles.adsList} to="/ads-list">
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

export default Dashboard;
