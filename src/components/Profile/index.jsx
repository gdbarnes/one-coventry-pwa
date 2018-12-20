import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import { Button, SelectionControl } from "react-md";
// import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Profile.scss";

class About extends Component {
  state = {
    saved: false,
    loading: false
  };

  handleNotificationClick = () => {
    console.log("clicked");
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ saved: true, loading: false });
    }, 2000);
  };

  render() {
    return (
      <div className="md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <Button raised>Update profile picture</Button>
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
            </CardText>
            {/* <UserLinks labeled config={config} /> */}
            <h3>Notification settings</h3>

            {/* {this.state.saved && !this.state.loading ? <p>Saved</p> : null} */}
            <SelectionControl
              id="checkbox-it-notifications"
              name="simple-checkboxes[]"
              label="IT notifications"
              type="checkbox"
              value="documentation"
              defaultChecked
            />
            <SelectionControl
              id="checkbox-site-notifications"
              name="simple-checkboxes[]"
              label="Cheylesmore house notifications"
              type="checkbox"
              value="documentation"
            />
            <SelectionControl
              id="checkbox-canteen-notifications"
              name="simple-checkboxes[]"
              label="Canteen notifications"
              type="checkbox"
              value="documentation"
            />
            <SelectionControl
              id="checkbox-carpark-notifications"
              name="simple-checkboxes[]"
              label="Car park notifications"
              type="checkbox"
              value="documentation"
              onChange={this.handleNotificationClick}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
