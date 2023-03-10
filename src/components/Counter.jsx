import { useState } from "react";

const Likes = () => {

    const [likes, setLikes] = useState(0);
    const [quantity, setQuantity] = useState(0);
    return(<div style={{paddingTop: "200px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <span>likes || {likes}</span>
            <span>cantidad de veces que usaste los botones || {quantity}</span>
            <div>
                <button onClick={() => {setLikes(likes - 1); setQuantity(quantity + 1)}}>-likes</button>
                <button onClick={() => {setLikes(likes + 1); setQuantity(quantity + 1)}}>+likes</button>
            </div>
        </div>)
}
export default Likes;