import { Layout } from "antd";
import styles from "./App.module.css";
import React from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import orgdata from "./data.json";
import Sidebar from "./Components/Sidebar/Sidebar";

class App extends React.Component {
  state = {
    filters: {
      categories: [],
      license: [],
      topics: [],
      tech: [],
      proposal: [],
    },
  };
  getAllCategories = () => {
    let categories = [];
    for (let i = 0; i < orgdata.data.length; i++) {
      if (!categories.includes(orgdata.data[i].category.toLowerCase().trim())) {
        categories.push(orgdata.data[i].category.toLowerCase().trim());
      }
    }
    return categories;
  };
  getAllLicense = () => {
    let license = [];
    for (let i = 0; i < orgdata.data.length; i++) {
      if (!license.includes(orgdata.data[i].primary_open_source_license.toLowerCase().trim())) {
        license.push(orgdata.data[i].primary_open_source_license.toLowerCase().trim());
      }
    }
    return license;
  };
  getAllTopicTags = () => {
    let topictags = [];
    for (let i = 0; i < orgdata.data.length; i++) {
      let tags = orgdata.data[i].topic_tags;
      for (let j = 0; j < tags.length; j++) {
        if (!topictags.includes(tags[j].toLowerCase().trim())) {
          topictags.push(tags[j].toLowerCase().trim());
        }
      }
    }
    return topictags;
  };
  getAllTechTags = () => {
    let techtags = [];
    for (let i = 0; i < orgdata.data.length; i++) {
      let tags = orgdata.data[i].technology_tags;
      for (let j = 0; j < tags.length; j++) {
        if (!techtags.includes(tags[j].toLowerCase().trim())) {
          techtags.push(tags[j].toLowerCase().trim());
        }
      }
    }
    return techtags;
  };
  getAllProposalTags = () => {
    let proposaltags = [];
    for (let i = 0; i < orgdata.data.length; i++) {
      let tags = orgdata.data[i].proposal_tags;
      for (let j = 0; j < tags.length; j++) {
        if (!proposaltags.includes(tags[j].toLowerCase().trim())) {
          proposaltags.push(tags[j].toLowerCase().trim());
        }
      }
    }
    return proposaltags;
  };
  applyFilters = (filters) => {
    let data = orgdata.data;
    if (filters.categories.length > 0) {
      data = data.filter((data) => {
        if (filters.categories.includes(data.category)) return true;
        return false;
      });
    }
    if (filters.license.length > 0) {
      data = data.filter((data) => {
        if (filters.license.includes(data.primary_open_source_license))
          return true;
        return false;
      });
    }
    if (filters.topics.length > 0) {
      data = data.filter((data) => {
        if (data.topic_tags.find((x) => filters.topics.includes(x)))
          return true;
        return false;
      });
    }
    if (filters.tech.length > 0) {
      data = data.filter((data) => {
        if (data.technology_tags.find((x) => filters.tech.includes(x)))
          return true;
        return false;
      });
    }
    if (filters.proposal.length > 0) {
      data = data.filter((data) => {
        if (data.proposal_tags.find((x) => filters.proposal.includes(x)))
          return true;
        return false;
      });
    }
    return data;
  };
  render() {
    return (
      <Layout className={styles.clear}>
        <Layout.Sider className={styles.clear} style={{ padding: 10 }}>
          <Sidebar
            filters={this.state.filters}
            categories={this.getAllCategories()}
            licenses={this.getAllLicense()}
            topictags={this.getAllTopicTags()}
            techtags={this.getAllTechTags()}
            proposaltags={this.getAllProposalTags()}
            onFilterChange={(f) => this.setState({ filters: f })}
          />
        </Layout.Sider>
        <Layout className={styles.clear}>
          <Layout.Header className={styles.clear}>
            <Header>
              GSOC Organisation Selection : Last Updated {orgdata.lastUpdated}
            </Header>
          </Layout.Header>
          <Layout.Content style={{ padding: 10 }} className={styles.clear}>
            <Content list={this.applyFilters(this.state.filters)} />
          </Layout.Content>
          <Layout.Footer className={styles.clear}>Footer</Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
