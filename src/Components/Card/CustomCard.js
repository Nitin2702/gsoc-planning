import { Card, Popover } from "antd";
import React from "react";
import styles from "./Card.module.css";

class CustomCard extends React.Component {
  render() {
    return (
      <Popover
        content={<CardContent data={this.props.data} />}
        trigger="click"
        placement="bottom"
      >
        <Card
          className={styles.card}
          title={this.props.data.name}
          bordered={false}
          style={{ width: 300 }}
        >
          <img
            className={styles.image}
            width={200}
            alt="logo"
            src={this.props.data.image_url}
          />
          <p className={styles.tagline}>{this.props.data.tagline}</p>
        </Card>
      </Popover>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a
              href={`https://summerofcode.withgoogle.com/organizations/${this.props.data.id}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GSOC organization Page
            </a>
          </li>
          <li>
            <a
              href={this.props.data.ideas_list}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ideas List
            </a>
          </li>
          <li>
            <a
              href={this.props.data.contact_method}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Method
            </a>
          </li>
          <li>
            <a
              href={this.props.data.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </ul>
        <h3>PRECIS</h3>
        <p>{this.props.data.precis}</p>
        <h3>DESCRIPTION</h3>
        <p>{this.props.data.description}</p>
        <h3>APPLICATION INSTRUCTIONS</h3>
        <p>{this.props.data.application_instructions}</p>
      </div>
    );
  }
}

export default CustomCard;
