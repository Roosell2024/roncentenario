import { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { Footer, Header } from '.';
import { CurveImg } from '../../../assets/imgs/shared';
import { LanguageFab } from '..';

interface ContainerProps {
  children: ReactNode;
  bgImage: string;
}

export const Container: React.FC<ContainerProps> = ({ children, bgImage }) => {
  const [location] = useLocation();

  return (
    <>
      <LanguageFab />
      <main className="relative overflow-hidden">
        <div
          className={`base-background absolute w-full top-0 left-0 bg-cover bg-top ${location !== '/' ? 'h-[875px]' : 'h-screen'}`}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <img src={CurveImg} alt="curve" className={`absolute top-0 left-0 w-full -mt-60 ${location !== '/' ? 'sm:h-[1775px] h-[2100px]': 
        'sm:h-md:h-[1755px] sm:h-sm:h-[1600px] sm:h-[1415px] h-[2050px]'}`} />
        <Header />
        <div className="relative sm:h-md:min-h-[calc(100vh-136px)] min-h-[calc(100vh-96px)]">{children}</div>
        {location !== '/' && <Footer />}
      </main>
    </>
  );
};
