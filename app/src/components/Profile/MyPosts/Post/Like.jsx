 import React, {useEffect} from 'react';

   
 const Like = () => {
  
      useEffect(() => {
      const likeButton = document.querySelector('.likeButton');
      const likeCount = document.querySelector('.likeCount');

      likeButton.addEventListener('click', () => {

      const currentCount = parseInt(likeCount.textContent, 10);
      likeCount.textContent = currentCount + 1;}) 
     }, [] );

   return (
             <div>
                 <button className="likeButton">👍</button>
                 <span className="likeCount">1</span>                   
             </div>
    
    );
    
};
  
 export default Like;
