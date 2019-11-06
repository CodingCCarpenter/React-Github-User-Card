import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 30%;
  text-align: center;
  border: 5px solid #8C8C90;
  margin: 4% 0;
  background-color: #E9EBF0;
`;

const Img = styled.img`
  margin-top: 4%;
  width: 90%;
`;

const Card = ({ user }) => {
  return (
    <Div>
        <Img src={user["avatar_url"]} alt={user["login"]} />
        <div className='upperCard'>
            <h1>{user["name"]}</h1>
            <h2>{user["login"]}</h2>
        </div>
        <div className='lowerCard'>
            <p>Location: {user["location"] ? user["location"] : "Unknown"}</p>
            <p>
                Profile: <a href={user["html_url"]}>{user["html_url"]}</a>
            </p>
            <p>Followers: {user["followers"]}</p>
            <p>Following: {user["following"]}</p>
        </div>
    </Div>
  );
};

export default Card;