import React, { useEffect } from "react";

const Like = (props) => {
  useEffect(() => {
    const likeButton = document.querySelector(`.likeButton-${props.id}`);
    const likeCount = document.querySelector(`.likeCount-${props.id}`);

    likeButton.addEventListener("click", () => {
      const currentCount = parseInt(likeCount.textContent, 10);
      likeCount.textContent = currentCount + 1;
    });
  }, []);

  return (
    <div>
      <button className={`likeButton-${props.id}`}>👍</button>
      <span className={`likeCount-${props.id}`}>1</span>
    </div>
  );
};

export default Like;
