import React from "react";
import { Footer } from "./components";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";

export default function App() {
  return (
  <>
  <JumbotronContainer />
  <FaqsContainer />
  <FooterContainer />
  </>);
}
