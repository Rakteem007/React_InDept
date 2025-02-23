import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AllPost from "./AllPost";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const userAuth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth.status === true) {
      appwriteService.getPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    } else navigate("/");

    return () => {
      // console.clear()
      console.log("unmounted from Home.jsx");
    };
  }, []);

  if (posts.length === 0 && userAuth.status === true) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Welcome to Dashboard. Create a Post to get started
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  if (posts.length === 0 && userAuth.status === false) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold text-black hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
