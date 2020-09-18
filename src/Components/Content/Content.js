import { Input } from "antd";
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
  render() {
    return (
      <>
        <Input.Search
          placeholder="Organization Name"
          value={this.state.name}
          onChange={(ev) => this.setState({ name: ev.target.value })}
          style={{ marginBottom: 30, width: "70%" }}
        />
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
