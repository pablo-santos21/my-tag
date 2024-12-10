import React from 'react';

const Endereco = () => {
  return (
    <div className="flex flex-col w-full my-4">
      <div className="flex flex-col bg-infosColor rounded-lg shadow-xl p-8">
        <h4 className="text-xl font-bold text-center pb-8 uppercase">
          Localization
        </h4>
        <ul className="mt-2 text-gray-700">
          <li className="py-2">
            <span className="font-bold w-32">Address:&nbsp;</span>
            <span className="">11 Baron park lane</span>
          </li>
          <li className="py-2">
            <span className="font-bold w-32">City:&nbsp;</span>
            <span className="">Burlington</span>
          </li>
          <li className="py-2">
            <span className="font-bold w-32">State:&nbsp;</span>
            <span className="">Massachusetts</span>
          </li>
          <li className="py-2">
            <span className="font-bold w-32">ZIP Code:&nbsp;</span>
            <span className="">01803</span>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14703.748361763259!2d-43.46811916221694!3d-22.878782205947918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdff2a1bed6f3%3A0x5ecb9488f615e5a2!2sBangu%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1733776313210!5m2!1spt-BR!2sbr"
          width="full"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Endereco;
