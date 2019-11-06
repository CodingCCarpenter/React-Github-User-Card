import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Card from "./components/Card.js";
import FollowerCards from "./components/FollowerCards.js";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #442E26;
`;

const H1 = styled.div`
  font-size: 2.4rem;
  text-align: center;
  margin: 15% Auto;
  Color: #D5B794
`;



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      codingccarpenter: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/codingccarpenter")
      .then((response) => {
        console.log(response);
        this.setState({ codingccarpenter: response.data });
      })
      .catch((error) => console.log(error));

    axios
      .get("https://api.github.com/users/codingccarpenter/followers")
      .then((response) => {
        console.log(response);
        response["data"].map((item) => {
          axios
            .get(item["url"])
            .then((response) => {
              this.setState({
                followers: [...this.state["followers"], response["data"]]
              });
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='app'>
        <H1>CodingCCarpenter's Followers</H1>
        <Div>
          <Card key={0} user={this.state["codingccarpenter"]} />
          <FollowerCards followers={this.state["followers"]} />
        </Div>
      </div>
    );
  }
}

export default App;
