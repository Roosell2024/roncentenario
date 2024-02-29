import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { CocktailItemSlider } from './CocktailItemSlider';
import { CocktailItem } from '../../interfaces';
import { orangeComplete } from '../../assets/imgs/cocktails';

interface Props {
  title: string;
  options: CocktailItem[];
}

export const CocktailsSlider = ({ title, options }: Props) => {
  const timelineRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(timelineRef);

  return (
    <div className="relative mt-96 mb-32 first:mt-0 last:mb-0">
      <div className="sm:w-[48rem] h-[48rem] sm:rounded-full bg-gradient-to-b from-green-50 to-white-50 absolute left-0 right-0 mx-auto top-0" />
      <h2 className="font-bold text-6xl sm:w-96 uppercase relative text-gold sm:text-left text-center">{title}</h2>
      <img
        src={orangeComplete}
        alt="orange icon"
        className="absolute -top-10 right-52 left-0 mx-auto w-32 rotate-90 opacity-50 sm:block hidden"
      />

      <img
        src={orangeComplete}
        alt="orange icon"
        className="absolute -top-36 right-0 w-80 mix-blend-normal sm:opacity-50 opacity-25"
      />
      <div className="flex w-full overflow-x-scroll scrollbar-hide min-h-[40rem]" {...events} ref={timelineRef}>
        <div className="flex">
          {options.map((cocktail, i) => (
            <CocktailItemSlider key={i} cocktail={cocktail} lastOne={i === options.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
