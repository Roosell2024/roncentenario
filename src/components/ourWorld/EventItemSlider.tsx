import { useTranslation } from 'react-i18next';
import { EventItem } from '../../interfaces/Events';
import { useState } from 'react';
import { useTransition } from 'transition-hook';

interface Props {
  eventItem: EventItem;
  lastOne?: boolean;
}

export const EventItemSlider = ({ eventItem, lastOne }: Props) => {
  const { t } = useTranslation();
  const [onOff, setOnOff] = useState(false);
  const { stage } = useTransition(onOff, 300);

  const readMoreEvent = (open: boolean) => {
    setOnOff(open);
  };

  return (
    <div className={`flex flex-row justify-start w-full min-w-max mt-11 ${lastOne && 'mr-[25rem]'}`}>
      <div className="flex flex-col justify-between ml-16">
        <h3 className="text-xl w-52 mt-16 font-extrabold text-green-300">{t(eventItem.title)}</h3>
        <p
          className={`${
            !onOff ? 'overflow-hidden text-ellipsis' : 'overflow-y-auto'
          } max-h-[300px] pt-5 text-green-300 text-lg text-justify`}
          style={{
            transition: '.3s',
            width: stage === 'enter' ? '36rem' : '20rem',
          }}
        >
          {t(eventItem.text)}
        </p>
        <div className="flex justify-end mt-4">
          <button type="button" className="text-green-300 font-bold w-20" onClick={() => readMoreEvent(!onOff)}>
            {!onOff ? t('our_world.read_more') : t('our_world.read_less')}
          </button>
        </div>
      </div>
      <img src={eventItem.img} alt="" className="ml-8 w-56 mt-6" />
    </div>
  );
};
