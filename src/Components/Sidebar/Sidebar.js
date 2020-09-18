import { Button, Select } from "antd";
import React from "react";
import styles from "./Sidebar.module.css";

class Sidebar extends React.Component {
  state = this.props.filters;
  update = (data) => {
    this.setState(data);
  };
  render() {
    return (
      <>
        Categories
        <Select
          mode="multiple"
          placeholder="Categories"
          style={{ width: "100%" }}
          optionLabelProp="label"
          value={this.state.categories}
          onChange={(ev) => this.update({ categories: ev })}
        >
          {this.props.categories.map((v, i) => (
            <Select.Option key={i} value={v} label={v}>
              {v}
            </Select.Option>
          ))}
        </Select>
        License
        <Select
          mode="multiple"
          placeholder="License"
          style={{ width: "100%" }}
          optionLabelProp="label"
          value={this.state.license}
          onChange={(ev) => this.update({ license: ev })}
        >
          {this.props.licenses.map((v, i) => (
            <Select.Option key={i} value={v} label={v}>
              {v}
            </Select.Option>
          ))}
        </Select>
        Topics
        <Select
          mode="multiple"
          placeholder="Topics"
          style={{ width: "100%" }}
          optionLabelProp="label"
          value={this.state.topics}
          onChange={(ev) => this.update({ topics: ev })}
        >
          {this.props.topictags.map((v, i) => (
            <Select.Option key={i} value={v} label={v}>
              {v}
            </Select.Option>
          ))}
        </Select>
        Technologies
        <Select
          mode="multiple"
          placeholder="Technologies"
          style={{ width: "100%" }}
          optionLabelProp="label"
          value={this.state.tech}
          onChange={(ev) => this.update({ tech: ev })}
        >
          {this.props.techtags.map((v, i) => (
            <Select.Option key={i} value={v} label={v}>
              {v}
            </Select.Option>
          ))}
        </Select>
        Proposals
        <Select
          mode="multiple"
          placeholder="Proposal"
          style={{ width: "100%" }}
          optionLabelProp="label"
          value={this.state.proposal}
          onChange={(ev) => this.update({ proposal: ev })}
        >
          {this.props.proposaltags.map((v, i) => (
            <Select.Option key={i} value={v} label={v}>
              {v}
            </Select.Option>
          ))}
        </Select>
        <Button onClick={() => this.props.onFilterChange(this.state)}>
          Apply Filter
        </Button>
        Created By{" "}
        <a
          href="https://github.com/GrayHat12"
          target="_blank"
          rel="noopener noreferrer"
        >
          GrayHat
        </a>
      </>
    );
  }
}

export default Sidebar;
