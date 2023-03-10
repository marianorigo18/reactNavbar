import { useState } from "react";

const Likes = () => {

    const [likes, setLikes] = useState(0)
    return(<div>
            <span>{likes}</span>
            <button style={{marginTop: "200px"}} onClick={() => {setLikes(likes + 1)}}>+likes</button>
            <button style={{marginTop: "200px"}} onClick={() => {setLikes(likes - 1)}}>-likes</button>
        </div>)
}
export default Likes;