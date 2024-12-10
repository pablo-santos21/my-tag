import React from 'react';

const Doenca = () => {
  return (
    <div className="flex flex-col w-full my-4 ">
      <div className="flex flex-col bg-infosColor rounded-lg shadow-xl p-8">
        <h4 className="text-xl font-bold text-center pb-8 uppercase">
          Medical Information
        </h4>
        <div className="flex md:flex-row flex-col gap-4 justify-around">
          <div>
            <h3 className="text-base font-bold py-4 uppercase">diseases</h3>
            <ul className="mt-2 text-gray-700 list-disc gap-2 flex flex-col pl-4">
              <li>
                <span className="">Hip dysplasia</span>
              </li>
              <li>
                <span className="">Atopic dermatitis</span>
              </li>
              <li>
                <span className="">Hypothyroidism</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold py-4 uppercase">medicines</h3>
            <ul className="mt-2 text-gray-700 list-disc gap-2 flex flex-col pl-4">
              <li>
                <span className="font-bold w-32">Apoquel:</span> <br />
                <span className="">1 time a day</span>
              </li>
              <li>
                <span className="font-bold w-32">Levotiroxina:</span> <br />
                <span className="">every 6 hours</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold py-4 uppercase">allergies</h3>
            <ul className="mt-2 text-gray-700 list-disc gap-2 flex flex-col pl-4">
              <li>
                <span className="">Pollen allergy</span>
              </li>
              <li>
                <span className="">Dust allergy</span>
              </li>
              <li>
                <span className="">Milk allergy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doenca;
