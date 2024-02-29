import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo } from '../components';
import { Events } from '../components/ourWorld/Events';
import { MapaMundi } from '../components/ourWorld/MapaMundi';
import { News } from '../components/ourWorld/News';
import { WorldOfMedals } from '../components/ourWorld/WorldOfMedals';

export const OurWorld = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:px-20 relative">
      <div className="absolute left-1/2 top-36 transform-50">
        <AgedByNatureLogo className="w-96 h-96" />
      </div>
      <div className="pt-28 sm:px-36 mt-64 sm:text-left text-center">
        <h1 className="font-bold text-6xl sm:w-72 text-gold uppercase">{t('menu.our_world')}</h1>
      </div>
      {/* Medals */}
      <WorldOfMedals/>
      <MapaMundi/>
      <Events/>
      <News/>
    </section>
  );
};
