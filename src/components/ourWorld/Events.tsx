import { useTranslation } from "react-i18next";
import { EventSlider } from "./EventSlider";

export const Events = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start mt-56">
      <div className="sm:w-1/4 sm:ml-40">
        <h1 className="uppercase text-5xl w-52 mt-16 font-extrabold text-green-300">{t('our_world.events')}</h1>
      </div>
      <div className="w-full sm:ml-96 transform scale-110">
        <EventSlider />
      </div>
    </div>
  );
}
