import React, { ReactNode } from "react";

type PopUpProps = {
  isOpen: boolean;
  children: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, children }) => (
  <>
    {isOpen && (
      <div className="dark:bg-dark-app-transparent overflow-hidden absolute w-full h-full flex justify-center items-center bg-soft-gray-opacity">
        <section className="dark:bg-dark-app overflow-y-auto w-modal-app bg-soft-gray min-h-1/2 border-x border-y border-black dark:border-hard-gray rounded-hard pt-14 pb-5 px-10 max-h-95">
          {children}
        </section>
      </div>
    )}
  </>
);

export default PopUp;
