import { ReactNode } from 'react';

import { UserInterfaceProvider } from './UserInterface';

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <UserInterfaceProvider>{children}</UserInterfaceProvider>;
};

export default Provider;
