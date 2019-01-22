import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class EmptyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="">
        <div className="about-container">
          <Helmet>
            <title>{`Empty | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/profile/`} />
          </Helmet>
          <Card className="md-grid md-cell--8">
            <CardTitle
              title="Section under construction"
              subtitle="Come back soon"
            />
          </Card>
        </div>
      </Layout>
    );
  }
}

export default EmptyPage;
