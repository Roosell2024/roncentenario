import { useState } from 'react';
import { RightArrow } from '../assets/imgs/icons';
import { useSwitchTransition } from 'transition-hook';
import { slidersHome } from '../assets/data/slidersHome';
import { LeafsIcon } from '../assets/imgs/shared';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const transition = useSwitchTransition(current, 300, 'out-in');

  const handleNext = () => {
    if (current === slidersHome.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const slider = slidersHome[current];
  const nextSlider = slidersHome[current === slidersHome.length - 1 ? 0 : current + 1];

  return (
    <div className="relative text-right">
      <img
        src={LeafsIcon}
        alt="leafs"
        className="absolute w-96 opacity-20 2xl:right-64 right-52 h-sm:top-[21rem] top-48"
      />
      <div
        className="w-screen grid place-items-center"
        style={{
          perspective: '100vw',
        }}
      >
        {transition((_, stage) => (
          <div
            className="absolute left-0 right-0 top-0 text-center duration-300"
            style={{
              opacity: stage === 'enter' ? 1 : 0,
              transform: {
                from: 'translateX(100%) ',
                enter: 'translateX(0%)',
                leave: 'translateX(-100%) rotateX(-60deg)',
              }[stage],
            }}
          >
            {slider && (
              <div className="sm:inline-flex sm:text-left text-white-50 sm:-ml-36">
                <img src={slider.img} alt={slider.title} className="sm:-mt-10 sm:h-md:w-[350px] sm:h-sm:w-[300px] sm:w-[250px] sm:mr-10 w-24 sm:block inline-block" />
                <div className="sm:w-[28rem] sm:px-0 px-10">
                  <h2 className="font-bold sm:h-sm:text-5xl text-3xl sm:h-sm:my-7 my-3 uppercase drop-shadow-regular">
                    {slider.title}
                  </h2>
                  <p className="text-justify drop-shadow-regular h-sm:text-lg min-h-[225px]">{t(slider.description)}</p>

                  <div className="flex items-center gap-4 mt-8">
                    <img src={slider.medal} alt={`${slider.title} medal`} className="w-32" />
                    <h5 className="font-bold text-4xl w-60 sm:text-green-100 text-gold uppercase">
                      {t('medals_awards')}
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="w-[280px] place-items-center sm:inline-grid hidden"
        style={{
          perspective: '300px',
        }}
      >
        {transition((_, stage) => (
          <div
            className="absolute right-20 top-20 text-center duration-300"
            style={{
              opacity: stage === 'enter' ? 1 : 0,
              transform: {
                from: 'translateX(100%) scale(1)',
                enter: 'translateX(0%)',
                leave: 'translateX(-400%) scale(1.3) translateY(20%)',
              }[stage],
            }}
          >
            <img src={nextSlider.img} alt={nextSlider.title} className="-mt-16 h-sm:xl:w-52 h-sm:w-44 w-36" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-40 h-md:top-72 h-sm:top-56 right-0 2xl:left-[60rem] xl:left-[55rem] sm:left-[45rem] mx-auto w-fit"
        onClick={handleNext}
        type="button"
      >
        <img src={RightArrow} alt="ArrowNarrowRight" className="w-20" />
      </button>
    </div>
  );
};
