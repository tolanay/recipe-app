import React from "react";
import recipe1 from "../assets/images/recipe-1.jpeg";
import recipe2 from "../assets/images/recipe-2.jpeg";
import recipe3 from "../assets/images/recipe-3.jpeg";
import recipe4 from "../assets/images/recipe-4.jpeg";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Search from "../components/search/Search";
import Hero from "../components/hero/Hero";
import Recipe from "../components/recipe/Recipe";
import Recipes from "../components/recipes/Recipes";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Search />
          <Hero />
          <Recipes>
            <Recipe
              image={recipe1}
              title="Avocado and Tomato"
              kitchen="Dona's Kitchen"
            />
            <Recipe
              image={recipe2}
              title="Avocado and Tomato"
              kitchen="Dona's Kitchen"
            />
            <Recipe
              image={recipe3}
              title="Avocado and Tomato3"
              kitchen="Dona's Kitchen"
            />
            <Recipe
              image={recipe4}
              title="Avocado and Tomato"
              kitchen="Dona's Kitchen"
            />
          </Recipes>
          <Footer />
        </Main>
      </Container>
    </>
  );
}
