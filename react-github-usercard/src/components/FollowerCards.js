import React from "react";
import Card from "./Card.js";

const FollowerCards = ({ followers }) => {
  return followers.map((item, index) => {
    return <Card key={index + 1} user={item} />;
  });
};

export default FollowerCards;