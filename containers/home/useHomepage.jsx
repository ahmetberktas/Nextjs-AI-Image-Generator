"use client";
import { useState, useContext, createContext, useMemo } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [text, setText] = useState("");

  const generateImage = () => {
    /* Api Call */
  };

  const changeText = (newText) => {
    setText(newText);
    window.scrollTo(0, 0);
  };

  const data = useMemo(
    () => ({
      text,
      setText,
      generateImage,
      changeText,
    }),
    [text]
  );

  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
