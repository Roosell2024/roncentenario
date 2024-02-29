import { useTranslation } from 'react-i18next';
import { NewsItem } from '../../interfaces/NewsItem';
import { useState } from 'react';
import { useTransition } from 'transition-hook';

interface Props {
  newItem: NewsItem;
  lastOne?: boolean;
}

export const NewItemSlider = ({ newItem, lastOne }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { stage } = useTransition(open, 300);

  const readMoreEvent = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={`shadow-lg shadow-green-50 rounded-3xl p-12 flex flex-col ${lastOne ? 'mr-80' : 'mr-0'}`}
      style={{
        transition: '.3s',
        maxHeight: stage === 'enter' ? '750px' : '600px',
        width: stage === 'enter' ? '600px' : '480px',
      }}
    >
      <h3 className="text-2xl font-extrabold text-green-300">{t(newItem.title)}</h3>
      <img src={newItem.img} alt="" className="mt-6 w-full" />
      <p className="text-green-300 text-lg font-normal pt-5 pb-1">{t(newItem.date)}</p>
      <p
        className={`${!open ? 'overflow-hidden line-clamp-6' : 'overflow-y-auto pr-1'}  text-green-300 text-justify`}
        style={{
          transition: '.3s',
          width: stage === 'enter' ? '32rem' : '24rem',
          maxHeight: stage === 'enter' ? '18rem' : '13rem',
        }}
      >
        {t(newItem.text)}
      </p>
      <div className="flex justify-end">
        <button type="button" className="text-green-300 font-bold hover:text-green-100" onClick={readMoreEvent}>
          {t(open ? 'our_world.read_less' : 'our_world.read_more')}
        </button>
      </div>
    </div>
  );
};
