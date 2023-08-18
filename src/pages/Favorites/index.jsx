import { Results } from "~/components/Results";
import { useEffect, useState } from "react";

export const Favorites = () => {
  const [savedLikedArticles, setSavedLikedArticles] = useState(
    JSON.parse(sessionStorage.getItem("likedArticles")) || []
  );

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "likedArticles") {
        const updatedLikedArticles = JSON.parse(event.newValue);
        setSavedLikedArticles(updatedLikedArticles);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {savedLikedArticles && savedLikedArticles.length <= 0 ? (
        <h2>No favorites yet.</h2>
      ) : (
        <Results data={savedLikedArticles} />
      )}
    </>
  );
};
