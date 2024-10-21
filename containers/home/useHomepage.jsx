"use client";
import { useState, useContext, createContext, useMemo } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateImage = async () => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(response.statusText || response.status);
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setIsSubmitting(false);
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
      error,
      isSubmitting,
    }),
    [text, imageUrl, error, isSubmitting]
  );

  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
