import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Jumbotron } from "../components/Jumbotron";
import { savedArticles } from "../../components/savedArticles";
import { Searchbars } from "../../components/Searchbars";
import { Articles } from "../components/Articles";

class Articles extends Component {
  state = {
    articles: [],
    startDate: "",
    endDate: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, startDate: "", endDate: ""})
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      API.savedArticles({
        search: this.state.search,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>New York Times Scraper</h1>
            </Jumbotron>
            <h3>Search</h3>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Start Year (Optional)"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.search && this.state.startDate)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          
        </Row>

        <Row>
          <Col size="md-12">
            <h3>Results</h3>
            {Articles}
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Saved Articles</h3>
              {savedArticles}
        </Row>                  
      </Container>
    );
  }
}

export default layout;