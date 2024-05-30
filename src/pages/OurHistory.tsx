import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo, ScotlandMap, Timeline } from '../components';

export const OurHistory = () => {
  const { t } = useTranslation();
  return (
    <section className="relative lg:px-20">
      <div className="absolute -top-5 left-0 right-0 mx-auto text-center sm:top-0">
        <AgedByNatureLogo className="inline-block w-40 sm:h-80 sm:w-80" />
      </div>
      <div className="mb-20 px-16 pt-28 sm:mb-60 sm:px-36 sm:pt-32 h-sm:sm:mb-44">
        <h1 className="text-center text-5xl font-bold uppercase text-gold sm:w-52 sm:text-left sm:text-6xl">
          {t('menu.our_history')}
        </h1>
      </div>
      <Timeline />
      <ScotlandMap />
    </section>
  );
};
