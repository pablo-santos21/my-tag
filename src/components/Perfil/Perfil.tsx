import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Perfil = () => {
  return (
    <div className="flex flex-col bg-infosColor rounded-lg shadow-xl pb-8">
      {/* Imagem do banner */}
      <div className=" relative w-full h-[250px] rounded-full bg-cover">
        <Image
          src="/img/banner-goldens.jpg"
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

      {/* Informações do perfil */}
      <div className="flex flex-col -mt-20 ">
        {/* Imagem do perfil */}
        <div className="flex flex-col items-center text-center space-x-2 gap-2">
          <Image
            src="/img/golden.jpg"
            alt="Golden"
            width={100}
            height={100}
            className="w-40 border-4 border-white rounded-full z-10"
          />

          {/* Nome do perfil */}

          <p className="text-2xl">Pluft</p>
        </div>

        {/* Sobre do perfil */}
        <div className=" p-8">
          <h4 className="text-xl  font-bold">Sobre</h4>
          <p className="mt-2 ">
            Gato carinhoso, educado, que gosta de receber dedão no ouvido, curte
            churrasco e carinho, se pegar chuva, fica rouco.
          </p>
        </div>
      </div>

      {/* Contato dos donos / pais */}
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
            <span>Connect</span>
          </button>

          <Link
            href="https://wa.me/5521970139730"
            target="blank"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                className=""
              ></path>
            </svg>
            <span>Menssagem</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
