import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ",
    img: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. . ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    img: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    img: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-10 my-5 h-full w-full">
      {posts.map((post, index) => {
        return (
          <>
            <div
              className="relative flex flex-wrap justify-center gap-10  w-full [&:nth-child(2n)]:flex-row-reverse py-10 after:absolute after:content-[''] after:bottom-[-2rem] after:bg-slate-200 left-0 after:w-1/2 after:h-[1px] "
              key={`${index}+${post?.title}`}
            >
              <div className="w-[40rem]   flex flex-col gap-10 ">
                <Link to={`/post/${post.id}`}>
                  <h2 className=" font-bold text-5xl"> {post.title} </h2>
                </Link>
                <div className="flex flex-col gap-5">
                  <p>{post.desc}</p>

                  <button className=" border px-5 py-1 text-sm w-fit hover:bg-slate-200 hover:text-white hover:font-bold">
                    Voir plus
                  </button>
                </div>
              </div>
              <div className="relative w-96 h-96 after:content-[''] o after:w-full after:h-full after:absolute after:bg-slate-200 after:top-5 after:right-5 after:z-[-1] odd:after:left-5 ">
                <img
                  src={post.img}
                  alt="illustration blog"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
