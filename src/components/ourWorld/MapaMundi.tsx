import { useTranslation } from "react-i18next";
import { LeafIcon, OrangeIcon } from "../../assets/imgs/shared";
import { MapaItem } from "./MapaItem";


export const MapaMundi = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start mt-56">
      <div className="flex flex-col w-1/4 sm:h-md:ml-40">
        <h1 className="uppercase text-7xl w-80 mt-16 font-extrabold text-green-300">
          {t('our_world.where_to_find_us')}
        </h1>
        <img
          src={LeafIcon}
          alt="leaf icon"
          className="mix-blend-darken -scale-x-90 rotate-[85deg] absolute left-[55rem] sm:block hidden"
        />
      </div>
      <div className="w-full sm:h-md:ml-40 transform mt-10">
        <MapaItem />
        <img
          src={OrangeIcon}
          alt="Orange icon"
          className="w-52 h-52 rotate-[30deg] absolute top-[43rem] left-[55rem] sm:block hidden"
        />
      </div>
    </div>
  );
};
