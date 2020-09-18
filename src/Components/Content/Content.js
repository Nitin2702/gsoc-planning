import { Button, Input } from "antd";
import React from "react";
import CustomCard from "../Card/CustomCard";
import styles from "./Content.module.css";

class Content extends React.Component {
  state = {
    name: "",
  };
  filter = (list, state) => {
    return list.filter((x) =>
      x.name.toLowerCase().includes(state.name.toLowerCase())
    );
  };
  downloadObjectAsJson = () => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(this.props.list));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  render() {
    return (
      <>
        <Input.Search
          placeholder="Organization Name"
          value={this.state.name}
          onChange={(ev) => this.setState({ name: ev.target.value })}
          style={{ marginBottom: 30, width: "70%" }}
        />
        <Button onClick={this.downloadObjectAsJson}>
          Download data as JSON
        </Button>
        <div className={styles.content}>
          {this.filter(this.props.list, this.state).map((v, i) => (
            <CustomCard key={i} data={v} />
          ))}
        </div>
      </>
    );
  }
}

export default Content;
