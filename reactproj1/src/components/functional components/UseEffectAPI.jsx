import { useState, useEffect } from "react";
import axios from "axios";
const UseEffectAPI = () => {
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("Couldn't read API", err);
      });
  }, []);
  return (
    <div>
      <h1>This is UseEffect API</h1>
      <h2>
        We are going to fetch data from JSONPlaceHolder and display the data
      </h2>
      <ol>{post.map((p)=>(
            <li key={p.id}>{p.title}</li>
      ))}</ol>
      
    </div>

  );
};
export default UseEffectAPI;
