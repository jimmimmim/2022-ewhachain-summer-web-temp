import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Header from "../layout/Header";

function Home() {
  return (
    <Header bgClass="bg-image" title="Amazing Recipes">
      <Button
        as={Link}
        to="/recipes"
        color="linkedin"
        content="SEARCH RECIPES"
        size="big"
      />

      <p>살려주세요</p>

    </Header>
  );
}
export default Home;

// https://github.com/devmahmud/RecipeFinder/blob/master/src/components/pages/Home.js