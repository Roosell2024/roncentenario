import _ from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OrangeIcon } from '../assets/imgs/shared';
import { AgedByNatureLogo, CocktailsSlider } from '../components';
import { agedByNature, signatureDrinks, tikiCocktails } from '../assets/data/cocktails';
import { botellaCoctel, broomIcon, leafMultiColor, orangeComplete } from '../assets/imgs/cocktails';
import { CocktailItem } from '../interfaces';

export const Cocktails = () => {
  const array = _.concat(signatureDrinks, agedByNature, tikiCocktails);
  const mainIngredients = [
    'Centenario Café',
    'Ron Centenario Añejo Claro',
    'Ron Centenario Oro',
    'Ron Centenario 5 Volcanes',
    'Ron Centenario 7 Provincias ',
    'Ron Centenario 9 Grados',
    'Ron Centenario 12 Secretos',
    'Ron Centenario 20',
    'Ron Centenario 25',
    'Ron Centenario 30',
  ];
  const flavors = _.map(_.sortBy(_.uniqBy(array, 'flavor'), 'flavor'), 'flavor');
  const [flavorSelected, setFlavorSelected] = useState('');
  const [productSelected, setProductSelected] = useState('');
  const { t } = useTranslation();

  const resetFilters = () => {
    setFlavorSelected('');
    setProductSelected('');
  };

  const filterOptions = (options: CocktailItem[]) => {
    return options.filter((o) => {
      if (flavorSelected && productSelected) {
        return o.flavor === flavorSelected && o.ingredients.filter((i) => i.name === productSelected).length !== 0;
      }
      if (flavorSelected) {
        return o.flavor === flavorSelected;
      }
      if (productSelected) {
        return o.ingredients.filter((i) => i.name === productSelected).length !== 0;
      }
      return true;
    });
  };

  return (
    <section className="xl:px-44 sm:px-10 relative">
      <div className="absolute sm:left-1/3 left-1/2 top-72 transform-50">
        <AgedByNatureLogo className="w-80" />
      </div>

      <img
        src={OrangeIcon}
        alt="orange icon"
        className="absolute top-80 right-0 left-36 mx-auto w-32 mix-blend-darken -rotate-12"
      />

      <div className="pt-80 mb-28">
        <h1 className="uppercase font-extrabold text-6xl text-gold sm:text-left text-center">{t('menu.cocktails')}</h1>
      </div>

      <div className="relative sm:my-56 mt-96 text-center">
        <img src={leafMultiColor} alt="Leaf" className="top-0 left-0 absolute sm:block hidden" />

        <div className="inline-block 2xl:w-[650px] sm:w-[450px] text-justify text-green-300 sm:px-0 px-10">
          <p className="text-2xl">{t('cocktails.introduction')}</p>
        </div>
        <img src={orangeComplete} alt="orange" className="-top-44 right-32 absolute rotate-90 w-52 opacity-60" />

        <img src={botellaCoctel} alt="vaso botella" className="sm:absolute -top-56 -right-20" width={400} />
      </div>

      <div className="sm:flex items-center mt-52 gap-4 sm:px-0 px-10">
        <p className="font-bold text-4xl sm:border-r-2 border-dashed border-green-300 text-gold sm:pr-5 sm:mb-0 mb-4 uppercase">
          {t('cocktails.find_cocktail_style')}
        </p>
        <div className="relative sm:w-60 sm:mb-0 mb-4">
          <select
            className="w-full p-2.5 text-gold bg-white-50 border border-green-100 rounded-md shadow-sm outline-none appearance-none focus:border-green-100"
            value={productSelected}
            onChange={({ target: { value } }) => {
              setProductSelected(value);
            }}
          >
            <option value="" disabled className="font-bold text-green-100">
              {t('cocktails.by_product')}
            </option>
            {mainIngredients.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="relative sm:w-60">
          <select
            className="w-full p-2.5 text-gold bg-white-50 border border-green-100 rounded-md shadow-sm outline-none appearance-none focus:border-green-100"
            value={flavorSelected}
            onChange={({ target: { value } }) => {
              setFlavorSelected(value);
            }}
          >
            <option value="" disabled className="font-bold text-green-100">
              {t('cocktails.by_flavor')}
            </option>
            {flavors.map((f) => (
              <option key={f} value={f}>
                {t(`cocktails.${f}`)}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={resetFilters} className="sm:mt-0 mt-4">
          <img src={broomIcon} alt="clear icon" className="w-7" />
        </button>
      </div>
      <div className="my-52">
        {signatureDrinks.length > 0 && (
          <CocktailsSlider title={t('cocktails.signature_cocktails')} options={filterOptions(signatureDrinks)} />
        )}

        <div className="sm:px-0 px-10">
          <p className="text-green-300 text-xl">
            <b>{t('cocktails.syrups.honeybee_and_lemongrass.title')}</b>
            {t('cocktails.syrups.honeybee_and_lemongrass.text')}
          </p>

          <p className="text-green-300 text-xl mt-10">
            <b>{t('cocktails.syrups.rosemary.title')}</b> {t('cocktails.syrups.rosemary.text')}
          </p>
        </div>

        {agedByNature.length > 0 && (
          <CocktailsSlider title={t('cocktails.aged_by_nature')} options={filterOptions(agedByNature)} />
        )}
        {tikiCocktails.length > 0 && (
          <CocktailsSlider title={t('cocktails.tiki_cocktails')} options={filterOptions(tikiCocktails)} />
        )}
      </div>
    </section>
  );
};
