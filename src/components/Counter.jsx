import { useState } from "react";

const Likes = () => {

    const [likes, setLikes] = useState(0);
    const [quantity, setQuantity] = useState(0);
    return(<div>
            <span>likes{likes}</span>
            <span>quantity{quantity}</span>
            <button style={{marginTop: "200px"}} onClick={() => {setLikes(likes - 1); setQuantity(quantity + 1)}}>-likes</button>
            <button style={{marginTop: "200px"}} onClick={() => {setLikes(likes + 1); setQuantity(quantity + 1)}}>+likes</button>
        </div>)
}
export default Likes;