import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
// import Profile from "../components/Profile";
import config from "../../data/SiteConfig";

class GroupsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Groups">
        <div className="about-container">
          <Helmet>
            <title>{`Profile | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/profile/`} />
          </Helmet>
          {/* <Profile /> */}
        </div>
      </Layout>
    );
  }
}

export default GroupsPage;
