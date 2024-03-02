import { useEffect, useState } from 'react';
import { MedalsItem } from '../../interfaces/MedalsItem';
import { arrowSlider } from '../../assets/imgs/cocktails';
import { MiniMedalla } from '../../assets/imgs/ourWorld';
import { useTranslation } from 'react-i18next';

interface Props {
  rumMedals: MedalsItem;
  lastOne?: boolean;
}

export const MedalsItemSlider = ({ rumMedals, lastOne }: Props) => {
  const { t } = useTranslation();
  const [medalData, setMedalData] = useState({
    img: '',
    name: '',
    text: '',
    main: false,
  });

  useEffect(() => {
    rumMedals.medals.forEach((medal) => {
      if (medal.main) {
        setMedalData(medal);
      }
    });
    // eslint-disable-next-line
  }, []);

  const changeMedal = (i: number) => {
    setMedalData(rumMedals.medals[i]);
  };

  return (
    <div className={`flex flex-row justify-start w-full min-w-max ${lastOne ? 'sm:h-md:mr-96 mr-56' :''}`}>
      <div className="flex">
        <img src={rumMedals.img} alt="" className="mt-6 sm:h-md:w-[21rem] sm:w-[18rem] sm:h-fit h-144" />
      </div>
      <div className="flex flex-col">
        {rumMedals.medals.map((med, i) => (
          <img
            src={med.img}
            key={i}
            alt={med.name}
            className="sm:h-md:w-32 w-28 h-fit mb-2 coin hover:flipping hover:cursor-pointer"
            onClick={() => changeMedal(i)}
          />
        ))}
      </div>
      <div className="flex flex-col justify-start items-center ml-8">
        <img src={medalData.img} alt={medalData.name} className="sm:h-md:w-60 w-44 h-fit" />
        <p className="w-80 mt-5 text-green-300 text-lg font-normal text-justify sm:h-md:h-[340px] h-[300px] overflow-y-auto pr-1">
          {t(medalData.text)}{' '}
        </p>
        <a
          href="https://roncentenario.blob.core.windows.net/multimedia/Book of medals 2023 (12 premium).pdf"
          target="_blank"
          download
          rel="noreferrer"
          className="w-64 max-h-12 mt-8 flex items-center justify-center space-x-2 bg-green-300 hover:bg-green-200 transition text-white-50 px-4 py-2 rounded-lg focus:outline-none"
        >
          <div className="flex relative -left-8">
            <img src={MiniMedalla} alt="" className="w-15  h-12 " />
          </div>
          <span>{t('our_world.more_medals')}</span>
        </a>
      </div>
      {!lastOne && (
        <div className={`flex justify-center items-center ml-10 ${lastOne && 'ml-[45rem]'}`}>
          <img src={arrowSlider} alt="arrow" className="2xl:w-fit w-14" />
        </div>
      )}
    </div>
  );
};
