import React from "react";

import { Link } from "react-router-dom";

const Single = () => {
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

  return (
    <main className="flex  justify-center mt-10">
      <div className="flex w-3/4  gap-10 justify-center  ">
        <div className="flex flex-col flex-[5] ">
          <img
            className="w-full  max-h-96  object-cover"
            src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
            alt=""
          />
          <div className="flex gap-2 py-3">
            <img
              className="rounded-full w-12 h-12 object-cover"
              src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
              alt=""
            />
            <div className="flex gap-3 items-center w-full justify-between ">
              <div>
                <span>Adam</span>
                <p>Posté il y a X jours</p>
              </div>
              <div className="flex gap-3">
                <Link to="/write?edit=2">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"
                    />
                  </svg>
                </Link>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="font-bold text-5xl mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dolore a id quisquam totam dicta deserunt quas rerum quia
              accusamus nam laboriosam similique sit impedit, architecto quis
              sint animi dolor!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero dolore a id quisquam totam dicta deserunt
              quas rerum quia accusamus nam laboriosam similique sit impedit,
              architecto quis sint animi dolor!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero dolore a id quisquam totam
              dicta deserunt quas rerum quia accusamus nam laboriosam similique
              sit impedit, architecto quis sint animi dolor!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Libero dolore a id quisquam
              totam dicta deserunt quas rerum quia accusamus nam laboriosam
              similique sit impedit, architecto quis sint animi dolor!Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Libero dolore a
              id quisquam totam dicta deserunt quas rerum quia accusamus nam
              laboriosam similique sit impedit, architecto quis sint animi
              dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Libero dolore a id quisquam totam dicta deserunt quas rerum quia
              accusamus nam laboriosam similique sit impedit, architecto quis
              sint animi dolor!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero dolore a id quisquam totam dicta deserunt
              quas rerum quia accusamus nam laboriosam similique sit impedit,
              architecto quis sint animi dolor!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero dolore a id quisquam totam
              dicta deserunt quas rerum quia accusamus nam laboriosam similique
              sit impedit, architecto quis sint animi dolor!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Libero dolore a id quisquam
              totam dicta deserunt quas rerum quia accusamus nam laboriosam
              similique sit impedit, architecto quis sint animi dolor! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Libero dolore a
              id quisquam totam dicta deserunt quas rerum quia accusamus nam
              laboriosam similique sit impedit, architecto quis sint animi
              dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Libero dolore a id quisquam totam dicta deserunt quas rerum quia
              accusamus nam laboriosam similique sit impedit, architecto quis
              sint animi dolor!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero dolore a id quisquam totam dicta deserunt
              quas rerum quia accusamus nam laboriosam similique sit impedit,
              architecto quis sint animi dolor!
            </p>
          </div>
        </div>
        <div className="menu flex-[2]">
          <h2 className="font-bold text-xl">
            D'autres articles qui pourraient vous plaire...
          </h2>
          {posts.map((post) => {
            return (
              <div key={post.id} className="w-full flex flex-col mt-5  ">
                <div className=" w-full">
                  <img
                    className="object-cover"
                    src={post.img}
                    alt={post.title}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base">{post.title}</h3>
                  <button className=" border px-3 mt-2 text-sm w-fit hover:bg-slate-200 hover:text-white hover:font-bold">
                    Voir plus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Single;
