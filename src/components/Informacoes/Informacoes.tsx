import React from 'react';

const Informacoes = () => {
  return (
    <div className="flex flex-col w-full my-4">
      <div className="flex flex-col bg-infosColor rounded-lg shadow-xl px-4 py-8">
        <h4 className="text-xl font-bold text-center pb-8 uppercase">
          Informations
        </h4>
        <div className="flex md:flex-row flex-col gap-4 justify-around">
          <div>
            <h3 className="text-base font-bold py-4 uppercase">
              Personal Information
            </h3>
            <ul className="mt-2  list-disc gap-2 flex flex-col">
              <li className="flex py-2">
                <span className="font-bold w-24">Name:</span>
                <span className="">Pablo Santos</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-24">Email:</span>
                <span className="">
                  <a href="mailto:contato@pablosantos.dev">
                    contato@pablosantos.dev
                  </a>
                </span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-24">Phone:</span>
                <span className="">
                  <a href="tel:+5521970139730">+55 21 97013-9730</a>
                </span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-24">Whatsapp:</span>
                <span className="">
                  <a
                    href="https://wa.me/5521970139730"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 21 97013-9730
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold py-4 uppercase">
              Pet Information
            </h3>
            <ul className="mt-2  list-disc gap-2 flex flex-col">
              <li className="flex py-2">
                <span className="font-bold w-32">Name:</span>
                <span className="">Pluft</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-32">Date of Birth:</span>
                <span className="">NOVEMBER 21, 2023</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-32">Sex:</span>
                <span className="">male</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-32">Breed:</span>
                <span className="">golden retriever</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-32">Microchip:</span>
                <span className="">90012365478919</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-32">AKC / CFA:</span>
                <span className="">NY99999999</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacoes;
