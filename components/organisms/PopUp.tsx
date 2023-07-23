import React, { ReactNode } from "react";

interface PopUpProps {
  isOpen: boolean;
  children: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, children }) => (
  <>
    {isOpen && (
      <div className="overflow-hidden absolute w-screen h-screen flex justify-center items-center bg-soft-gray-opacity">
        <section className="overflow-y-auto w-modal-app bg-soft-gray min-h-1/2 border-x border-y border-black rounded-hard pt-14 pb-5 px-10 max-h-95">
          {children}
        </section>
      </div>
    )}
  </>
);

export default PopUp;
