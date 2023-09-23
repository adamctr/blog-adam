import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center">
      <div className="flex mt-10 px-5 gap-10 flex-wrap mb-20 ">
        <div className="flex flex-col gap-5 min-h-[30rem] mb-14">
          <input
            type="text"
            className="w-full p-3 border "
            placeholder="Titre"
          />
          <ReactQuill
            theme="snow"
            className="h-full min-h-[15rem]"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="flex flex-wrap gap-10 w-[20rem] ">
          <div className="border flex flex-col w-[20rem] justify-between gap-3 p-5">
            <h2 className="font-bold text-xl">Publish</h2>
            <p>
              <span className="font-bold">Status : </span>Draft
            </p>
            <p>
              <span className="font-bold">Visibility : </span>Draft
            </p>
            <p className="underline cursor-pointer">Télécharger une image</p>
            <div className="flex min-w-[15rem] max-w-[30em] flex-col justify-between">
              <button className=" border px-3 mt-2 text-sm w-fit hover:bg-slate-200 hover:text-white hover:font-bold">
                Enregistrer dans les brouillons
              </button>
              <button className=" border px-3 mt-2 text-sm w-fit hover:bg-slate-200 hover:text-white hover:font-bold">
                Mettre à jour
              </button>
            </div>
          </div>
          <div className="border w-[20rem] flex flex-col justify-between gap-3 p-5">
            <h2 className="font-bold text-xl">Catégorie</h2>
            <div>
              <input type="radio" name="cat" value="photo" id="photo" />

              <label className="ml-2  " htmlFor="photo">
                Photo
              </label>
            </div>
            <div>
              <input type="radio" name="cat" value="piano" id="piano" />

              <label className="ml-2  " htmlFor="piano">
                Piano
              </label>
            </div>
            <div>
              <input type="radio" name="cat" value="mao" id="mao" />

              <label className="ml-2  " htmlFor="mao">
                MAO
              </label>
            </div>
            <div>
              <input type="radio" name="cat" value="crochet" id="crochet" />

              <label className="ml-2  " htmlFor="crochet">
                Crochet
              </label>
            </div>
            <div>
              <input type="radio" name="cat" value="dev" id="dev" />

              <label className="ml-2  " htmlFor="dev">
                Développement
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
