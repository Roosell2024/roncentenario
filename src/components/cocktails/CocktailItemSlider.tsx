import { useTranslation } from 'react-i18next';
import { arrowSlider } from '../../assets/imgs/cocktails';
import { CocktailItem } from '../../interfaces';
import ReactPlayer from 'react-player/youtube';

interface Props {
  cocktail: CocktailItem;
  lastOne?: boolean;
}

export const CocktailItemSlider = ({ cocktail, lastOne }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      className="sm:flex relative items-center 2xl:gap-16 xl:gap-4 gap-2 justify-center text-green-100 uppercase 2xl:w-[1450px] lg:w-[1000px] mr-20"
      tabIndex={-1}
    >
      <img src={cocktail.img} alt="" className="w-96" />
      <div className="2xl:w-[500px] sm:w-[400px] w-[380px]">
        <h4 className="font-bold text-4xl mb-5">{cocktail.name}</h4>
        <p className="text-2xl">
          <span className="font-bold uppercase">{t('cocktails.method')}:</span> {t(`cocktails.${cocktail.method}`)}
        </p>
        <p className="text-2xl">
          <span className="font-bold uppercase">{t('cocktails.glass')}:</span> {t(`cocktails.${cocktail.glass}`)}
        </p>
        {cocktail.ice && (
          <p className="text-2xl">
            <span className="font-bold uppercase">{t('cocktails.ice')}:</span> {t(`cocktails.${cocktail.ice}`)}
          </p>
        )}

        {cocktail.garnish && (
          <p className="text-2xl">
            <span className="font-bold uppercase">{t('cocktails.garnish')}:</span> {t(`cocktails.${cocktail.garnish}`)}
          </p>
        )}
        {cocktail.levelDifficulty && (
          <p className="text-2xl">
            <span className="font-bold uppercase">{t('cocktails.levelDifficulty')}:</span>{' '}
            {t(`cocktails.${cocktail.levelDifficulty}`)}
          </p>
        )}

        <h6 className="font-bold text-3xl my-5 uppercase">{t('cocktails.ingredients')}</h6>
        <div className="grid grid-cols-4 gap-2 leading-4">
          {cocktail.ingredients &&
            cocktail.ingredients.map((ingredient) => (
              <div className="text-center" key={ingredient.name}>
                <div className="bg-gold inline-flex justify-center items-center rounded-full 2xl:w-[100px] 2xl:h-[100px] w-[70px] h-[70px]">
                  <p className="font-bold xl:text-2xl text-xl">
                    {ingredient.hasIcon ? (
                      <img src={ingredient.quantity} alt={ingredient.name} className={ingredient.customClass} />
                    ) : (
                      t(ingredient.quantity)
                    )}
                  </p>
                </div>
                <p className="text-center mt-2">{t(ingredient.name)}</p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-3xl mb-3 w-56">{t('cocktails.how_to_make_it')}</h4>

        <div className="sm:shadow-xl w-fit">
          <ReactPlayer url={cocktail.videoUrl} loop width={198} height={350} />
        </div>
      </div>

      {!lastOne && (
        <img
          src={arrowSlider}
          alt="arrow"
          className="absolute 2xl:-right-20 2xl:w-fit -right-16 w-14 sm:block hidden"
        />
      )}
    </div>
  );
};
