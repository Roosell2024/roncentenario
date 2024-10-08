import { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { Footer, Header } from '.';
import { LanguageFab } from '..';
import { AgeVerification } from '../AgeVerification';
import { Banner } from '../../Banner';

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const [location] = useLocation();

  return (
    <>
      <Banner />
      <AgeVerification />
      <LanguageFab />
      <main className="overflow-hidden">
        <Header />
        <div className="min-h-screen">{children}</div>
        {location !== '/' && <Footer />}
      </main>
    </>
  );
};
