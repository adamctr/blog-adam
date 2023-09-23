import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="font-bold text-center">INSCRIPTION</h1>

      <div className="flex-col border-2 justify-center items-center p-10">
        <form action="" className="flex flex-col gap-5">
          <input
            className="border-b-2"
            placeholder="Nom d'utilisateur"
            type="text"
          />
          <input className="border-b-2" placeholder="Email" type="text" />
          <input
            className="border-b-2"
            placeholder="Mot de passe"
            type="password"
          />

          <button className="border-2 bg-slate-50 mt-3">S'inscrire</button>
          <p className="text-red-500 text-sm text-center">
            Ceci est une erreur !
          </p>
          <div className="flex flex-col">
            <span className="text-bold text-base">
              Vous avez déjà un compte ?
            </span>
            <span className="text-sm text-center underline">
              <a href="">Se connecter</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
