import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./styles.css";

export const Article = ({ src, id }) => {
  const [isLiked, setIsLiked] = useState(false);
  let lastTouchTime = 0;

  useEffect(() => {
    const likedArticles = JSON.parse(
      sessionStorage.getItem("likedArticles") || "[]"
    );
    setIsLiked(likedArticles.some((article) => article.id === id));
  }, [id]);

  const handleDoubleClick = () => {
    toggleLike(src, id);
  };

  const handleFavoriteClick = () => {
    toggleLike(src, id);
  };

  const handleTouchStart = () => {
    const now = new Date().getTime();
    const timeDiff = now - lastTouchTime;

    if (timeDiff < 500 && timeDiff > 0) {
      toggleLike(src, id);
    }
    lastTouchTime = now;
  };

  const toggleLike = (articleSrc, articleId) => {
    const likedArticles = JSON.parse(
      sessionStorage.getItem("likedArticles") || "[]"
    );

    const existingArticle = likedArticles.find(
      (article) => article.id === articleId
    );

    if (existingArticle) {
      const updatedLikedArticles = likedArticles.filter(
        (article) => article.id !== articleId
      );
      setIsLiked(false);
      sessionStorage.setItem(
        "likedArticles",
        JSON.stringify(updatedLikedArticles)
      );
    } else {
      const updatedLikedArticles = [
        ...likedArticles,
        { img_src: articleSrc, id: articleId },
      ];
      setIsLiked(true);
      sessionStorage.setItem(
        "likedArticles",
        JSON.stringify(updatedLikedArticles)
      );
    }
  };

  return (
    <article className="article">
      <img
        src={src}
        alt="Rovers Image"
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
      />
      <FavoriteIcon
        sx={{ color: "red" }}
        fontSize="large"
        className={`icon ${isLiked ? "like" : ""}`}
      />
      <div className="favorite--container" onClick={handleFavoriteClick}>
        {isLiked ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </div>
    </article>
  );
};
