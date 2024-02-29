import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo, ScotlandMap, Timeline } from '../components';

export const OurHistory = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:px-20">
      <div className="absolute left-1/2 top-96 transform-50">
        <AgedByNatureLogo className="w-96 h-96" />
      </div>
      <div className="sm:pt-32 pt-80 sm:px-36 mb-44">
        <h1 className="uppercase font-bold text-6xl sm:w-52 text-gold sm:text-left text-center">
          {t('menu.our_history')}
        </h1>
      </div>
      <Timeline />
      <ScotlandMap />
    </section>
  );
};
