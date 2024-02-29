import { useTranslation } from "react-i18next";
import { MedalsSlider } from './MedalsSlider';
import { OrangeIcon } from "../../assets/imgs/shared";

export const WorldOfMedals = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:flex flex-row justify-start sm:mt-56 mt-80">
      <div className="sm:w-1/4 sm:ml-40">
        <h1 className="uppercase text-5xl sm:w-52 mt-16 font-extrabold text-green-300 sm:text-left text-center">
          {t('our_world.world_medals')}
        </h1>
        <img
          src={OrangeIcon}
          alt="Orange icon"
          className="w-52 h-52 rotate-[50deg] absolute top-[40rem] left-64 sm:block hidden"
        />
      </div>
      <div className="w-full">
        <MedalsSlider />
      </div>
    </div>
  );
}
