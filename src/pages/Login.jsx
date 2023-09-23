import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="font-bold text-center">SE CONNECTER</h1>

      <div className="flex-col border-2 justify-center items-center p-10">
        <form action="" className="flex flex-col gap-3">
          <input
            className="border"
            placeholder="Nom d'utilisateur"
            type="text"
          />
          <input
            className="border"
            placeholder="Mot de passe"
            type="password"
          />
          <button className="border-2 bg-slate-50  mt-3">Connexion</button>
          <p className="text-red-500 text-center">Ceci est une erreur</p>
          <div className="flex flex-col">
            <span>Vous ne possédez pas de compte ?</span>
            <span className="text-sm text-center underline">
              <a href="">S'inscrire</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
