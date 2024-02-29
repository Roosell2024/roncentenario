import { AgeByNatureGoldEN, AgeByNatureGoldES } from '../assets/imgs/shared';
import {
  hojaLarga,
  orange,
  hojasCierre,
  NaturesGodParents,
  NaturesGodParentsES,
} from '../assets/imgs/sostenibilidad';
import { VideoComp } from '../components';
import { useTranslation } from 'react-i18next';

export const Sustainability = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="lg:px-44 relative">
      <div className="sm:mt-60 mt-32">
        <h1 className="uppercase font-bold text-6xl text-gold sm:text-left text-center">{t('menu.sustainability')}</h1>
      </div>
      <img src={orange} alt="Leafs" className="absolute w-72 h-72 rotate-1 sm:top-64 top-128" />
      <div className="text-center sm:mt-28">
        <img
          alt="logo_anejado"
          className="w-144 h-144 inline-block"
          src={i18n.language === 'sp' ? AgeByNatureGoldES : AgeByNatureGoldEN}
        />
      </div>
      <img src={hojaLarga} alt="Leafs" className="absolute w-96 h-96 right-20 top-52 sm:block hidden" />

      <VideoComp
        autoPlay={false}
        video={
          i18n.language === 'sp'
            ? 'https://roncentenario.blob.core.windows.net/multimedia/Añejado por la Naturaleza Español.mp4'
            : 'https://roncentenario.blob.core.windows.net/multimedia/Aged credentials.mp4'
        }
      />

      <div className="sm:flex sm:my-52 my-20 justify-center items-center 2xl:gap-40 xl:gap-20 gap-10 sm:px-0 px-10">
          <VideoComp
            autoPlay={false}
            video={'https://roncentenario.blob.core.windows.net/multimedia/Video padrinos.MP4'}
          />
        <img
          src={i18n.language === 'sp' ? NaturesGodParentsES : NaturesGodParents}
          alt="Natures God Parents"
          className="w-128 mb-8 sm:mt-0 mt-10"
        />
      </div>

      <div className="flex justify-center mt-12">
        <img src={hojasCierre} alt="hojasCierre" className=" mix-blend-darken" />
      </div>
    </section>
  );
};
