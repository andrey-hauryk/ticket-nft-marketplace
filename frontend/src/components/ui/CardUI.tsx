import React from 'react';

type CardUIProps =  {
  title: string,
  description: string,
  children: React.ReactNode,
}

const CardUI: React.FC<CardUIProps> = ({title, description, children}) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default CardUI;