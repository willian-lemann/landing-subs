import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { AlertTypes } from './actions/types';

import { ToastContainer, toast } from 'react-toastify';

interface InitialState {
  responsive: boolean;
  alert: (message: string, type: AlertTypes) => any;
}

export const UserInterfaceContext = createContext({} as InitialState);

interface UserInterfaceProviderProps {
  children?: React.ReactNode;
}

export const UserInterfaceProvider = ({ children }: UserInterfaceProviderProps) => {
  const [responsive, setResponsive] = useState(false);

  const alert = (message: string, type: AlertTypes) => toast(message, { type });

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setResponsive(true);
    }
  }, []);

  return (
    <UserInterfaceContext.Provider value={{ responsive, alert }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </UserInterfaceContext.Provider>
  );
};
