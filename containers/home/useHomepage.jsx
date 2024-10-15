"use client";
import { useState, useContext, createContext, useMemo } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [text, setText] = useState("");

  const generateImage = async () => {
    try {
      await fetch(`/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
    } catch (err) {
      throw new Error("Failed to generate");
    }
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
