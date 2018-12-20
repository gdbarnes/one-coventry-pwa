import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import {
  Button,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  FontIcon
} from "react-md";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class GroupsPage extends Component {
  state = {
    joined: false,
    loading: false
  };

  handleJoin = e => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ joined: true, loading: false });
    }, 2000);
  };

  render() {
    return (
      <Layout location={this.props.location} title="Groups">
        <div className="about-container">
          <Helmet>
            <title>{`Groups | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/profile/`} />
          </Helmet>
          <Card className="md-grid md-cell--8">
            <DataTable plain>
              <TableHeader>
                <TableRow>
                  <TableColumn>Groups</TableColumn>
                  <TableColumn>Status</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key="joined">
                  <TableColumn>Football team</TableColumn>
                  <TableColumn>
                    <FontIcon iconClassName="fa fa-check" />{" "}
                    <span className="md-title">JOINED</span>
                  </TableColumn>
                </TableRow>
                <TableRow key="not-joined">
                  <TableColumn>Staff team</TableColumn>
                  <TableColumn>
                    {this.state.joined === true ? (
                      <div>
                        <FontIcon iconClassName="fa fa-check" />
                        <span className="md-title">JOINED</span>
                      </div>
                    ) : (
                      <Button onClick={this.handleJoin} secondary raised>
                        {this.state.loading === true ? (
                          <span>Sending...</span>
                        ) : (
                          <span>Join group</span>
                        )}
                      </Button>
                    )}
                  </TableColumn>
                </TableRow>
                {Array.from(Array(10)).map((_, i) => (
                  <TableRow key={i}>
                    <TableColumn>Other group {i + 1}</TableColumn>
                    <TableColumn>
                      <Button secondary raised>
                        Join group
                      </Button>
                    </TableColumn>
                  </TableRow>
                ))}
              </TableBody>
            </DataTable>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default GroupsPage;
