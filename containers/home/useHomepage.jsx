"use client";
import { useState, useContext, createContext, useMemo } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const generateImage = async () => {
    try {
      const response = await fetch(`/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate");
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      console.error(err);
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
      imageUrl,
    }),
    [text, imageUrl]
  );

  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
