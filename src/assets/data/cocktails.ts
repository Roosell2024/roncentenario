import { CocktailItem } from '../../interfaces';
import { DropWater, SmokeVapor } from '../imgs/cocktails';
import { citrusTonic, dMora, forrestFruitTonic, passionTonic } from '../imgs/cocktails/agedByNature';
import {
  cafe_tonic,
  d_knees,
  dark_stormy,
  el_conocedor,
  el_yodito,
  frutos_rojos,
  highball,
  k_highball,
  no_more,
  ron_pirina,
  smoked,
  velvety,
  expresso_centini,
  mai_tai,
  old_pura_vida,
} from '../imgs/cocktails/signatureDrinks';
import { degrees9Punch, doctorCentenario, planters } from '../imgs/cocktails/tiki';

export const signatureDrinks: CocktailItem[] = [
  {
    flavor: ['sweet', 'spirit_forward'],
    img: expresso_centini,
    name: 'ESPRESSO CENTINI',
    method: 'shake_strain',
    glass: 'chill_glass',
    ice: 'none',
    garnish: '3_coffee_beans',
    levelDifficulty: 'medium',
    videoUrl: 'y4LHTByNzVM',
    ingredients: [
      { quantity: '30ML', name: 'Ron Centenario 9 Grados' },
      { quantity: '30ML', name: 'Centenario Café' },
      { quantity: DropWater, name: 'cocktails.fresh_expresso', hasIcon: true, customClass: 'w-8' },
      { quantity: '10ML', name: 'cocktails.simple_syrup' },
    ],
  },
  {
    flavor: ['fruity', 'citrus'],
    img: mai_tai,
    name: 'Centenario Mai Tai',
    method: 'shake_strain',
    glass: 'double_rocks',
    ice: 'crushed',
    garnish: 'mint_spring',
    levelDifficulty: 'medium',
    videoUrl: '1pdcsmxIHdk',
    ingredients: [
      { quantity: '45ML', name: 'Ron Centenario 20' },
      { quantity: '7.5ML', name: 'London Dry Gin' },
      { quantity: '7.5ML', name: 'cocktails.orange_liquor' },
      { quantity: '30ML', name: 'cocktails.orgeat_syrup' },
      { quantity: '22.5ML', name: 'cocktails.lime_juice' },
      { quantity: '3', name: 'cocktails.dash_cocoa_bitters' },
    ],
  },
  {
    flavor: ['citrus', 'refreshing'],
    img: old_pura_vida,
    name: 'Old Pura Vida',
    method: 'shake_strain',
    glass: 'chill_coupe',
    ice: 'none',
    garnish: 'mint_leave',
    levelDifficulty: 'medium',
    videoUrl: 'RkXDRltyXkQ',
    ingredients: [
      { quantity: '60ML', name: 'Ron Centenario 12' },
      { quantity: '10', name: 'cocktails.mint_leave' },
      { quantity: '15ML', name: 'cocktails.simple_syrup' },
      { quantity: '2', name: 'cocktails.dash_of_angostura_bitters' },
      { quantity: DropWater, customClass: 'w-8', hasIcon: true, name: 'cocktails.top_sparkling_wine' },
    ],
  },
  {
    flavor: ['sweet'],
    img: el_yodito,
    name: 'El Yodito',
    method: 'shake_strain',
    glass: 'chill_glass',
    ice: 'none',
    garnish: '3_coffee_beans',
    levelDifficulty: 'medium',
    videoUrl: 'Nq2wxFa5Lj4',
    ingredients: [
      { quantity: '45ML', name: 'Centenario Café' },
      { quantity: '20ML', name: 'cocktails.simple_syrup' },
      { quantity: '45ML', name: 'cocktails.almond_milk' },
    ],
  },
  {
    flavor: ['refreshing', 'sweet'],
    img: cafe_tonic,
    name: 'Café & Tonic',
    method: 'build_stir',
    glass: 'highball',
    ice: 'cubed',
    garnish: 'orange_peel',
    levelDifficulty: 'low',
    videoUrl: 'hkvbv_FfKcA',
    ingredients: [
      { quantity: '45ML', name: 'Centenario Café' },
      { quantity: '2', name: 'cocktails.dashes_orange_bitters' },
      { quantity: DropWater, name: 'cocktails.fill_tonic_water', hasIcon: true, customClass: 'w-8' },
    ],
  },
  {
    flavor: ['fruity', 'refreshing', 'citrus'],
    img: ron_pirina,
    name: 'Ron Piriña',
    method: 'muddle_shake_strain',
    glass: 'double_rocks',
    ice: 'crushed',
    garnish: 'pineapple_slice',
    levelDifficulty: 'medium',
    videoUrl: 'fRVfKrWjMC8',
    ingredients: [
      { quantity: '2', name: 'cocktails.slices_of_lime' },
      { quantity: '2', name: 'cocktails.pineapple_chunks' },
      { quantity: '2', name: 'cocktails.bar_spoon_sugar' },
      { quantity: '45ML', name: 'Ron Centenario Añejo Claro' },
    ],
  },
  {
    flavor: ['refreshing', 'sweet'],
    img: highball,
    name: 'Centenario highball',
    method: 'build',
    glass: 'highball',
    ice: 'cubed',
    garnish: 'slices_of_lime',
    levelDifficulty: 'low',
    videoUrl: 'v_2wZM8rCQM',
    ingredients: [
      { quantity: '45ML', name: 'Ron centenario oro' },
      { quantity: '10ML', name: 'cocktails.lime_juice' },
      { quantity: DropWater, hasIcon: true, customClass: 'w-8', name: 'cocktails.fill_coke' },
    ],
  },
  {
    flavor: ['refreshing', 'fruity'],
    img: frutos_rojos,
    name: 'Ron & tonic frutos rojos',
    method: 'muddle_build_stir',
    glass: 'ballon',
    ice: 'cubed',
    garnish: 'none',
    levelDifficulty: 'low',
    videoUrl: 'BQf6d7DTjfk',
    ingredients: [
      { quantity: '45ML', name: 'Ron Centenario 5 Volcanes' },
      { quantity: '10ML', name: 'cocktails.agave_syrup' },
      { quantity: '3', name: 'cocktails.blackberries' },
      { quantity: '1', name: 'cocktails.strawberries' },
      { quantity: '1', name: 'cocktails.raspberries' },
      { quantity: '150ml', name: 'cocktails.tonic_water' },
    ],
  },
  {
    flavor: ['spirit_forward', 'fruity'],
    img: no_more,
    name: 'No more prohibition',
    method: 'muddle_build_stir',
    glass: 'rocks',
    ice: 'cubed',
    garnish: 'apple_fan',
    levelDifficulty: 'medium',
    videoUrl: '6VtwgAQFv_o',
    ingredients: [
      { quantity: '1', name: 'cocktails.cube_demerara_sugar' },
      { quantity: '1', name: 'cocktails.bar_spoon_falernum' },
      { quantity: '60ML', name: 'Ron Centenario 7 Provincias' },
      { quantity: DropWater, customClass: 'w-8', hasIcon: true, name: 'cocktails.fill_apple_juice' },
    ],
  },
  {
    flavor: ['citrus', 'refreshing'],
    img: d_knees,
    name: "daiquiri's knees",
    method: 'shake_fine_strain',
    glass: 'chill_coupe',
    ice: 'none',
    garnish: 'lime_peel',
    levelDifficulty: 'medium',
    videoUrl: 'BKjqR8nRrKY',
    ingredients: [
      { quantity: '60ml', name: 'Ron Centenario 9 Grados' },
      { quantity: '30ml', name: 'cocktails.lime_juice' },
      { quantity: '30ml', name: 'cocktails.honey_syrup_lemongrass' },
    ],
  },
  {
    flavor: ['refreshing', 'fruity'],
    img: k_highball,
    name: 'kiwi highball',
    method: 'direct',
    glass: 'highball',
    ice: 'cubed',
    garnish: 'kiwi_slice',
    levelDifficulty: '',
    videoUrl: 'y7Kh0wsHsJ8',
    ingredients: [
      { quantity: '40ml', name: 'Ron Centenario 9 Grados' },
      { quantity: '3', name: 'cocktails.thin_slices_kiwi' },
      { quantity: DropWater, customClass: 'w-8', hasIcon: true, name: 'cocktails.fill_sparkling_water' },
    ],
  },
  {
    flavor: ['spirit_forward', 'sweet'],
    img: smoked,
    name: 'smoked rum fashioned',
    method: 'build_smoked',
    glass: 'rocks',
    ice: 'big_rock',
    garnish: '',
    levelDifficulty: 'medium',
    videoUrl: 'RGsF36vk9sg',
    ingredients: [
      { quantity: '60ml', name: 'Ron Centenario 12 Secretos' },
      { quantity: '15ml', name: 'cocktails.rich_demerara_syrup' },
      { quantity: '3', name: 'cocktails.dash_of_angostura_bitters' },
      { quantity: SmokeVapor, customClass: 'w-11', hasIcon: true, name: 'cocktails.smoked_cinnamon' },
    ],
  },
  {
    flavor: ['spirit_forward'],
    img: velvety,
    name: 'Velvety liquid',
    method: 'gently_stir',
    glass: 'chill_glass',
    ice: 'none',
    garnish: 'orange_peel',
    levelDifficulty: '',
    videoUrl: 'qlKng9U4s_0',
    ingredients: [
      { quantity: '60ml', name: 'Ron Centenario 20' },
      { quantity: '15ml', name: 'cocktails.sweet_vermouth' },
      { quantity: '7.5ml', name: 'cocktails.amontillado_sherry' },
      { quantity: '3', name: 'cocktails.dash_cocoa_bitters' },
    ],
  },
  {
    flavor: ['refreshing', 'citrus'],
    img: dark_stormy,
    name: 'New dark & stormy',
    method: 'shaker_and_strain_build_stair',
    glass: 'highball',
    ice: 'cubed',
    garnish: 'rosemary_spring',
    levelDifficulty: '',
    videoUrl: 'S1jtbGQgk7c',
    ingredients: [
      { quantity: '45ml', name: 'Ron Centenario 25' },
      { quantity: '15ml', name: 'cocktails.rosemary_syrup' },
      { quantity: '15ml', name: 'cocktails.lime_juice' },
      { quantity: DropWater, hasIcon: true, customClass: 'w-8', name: 'cocktails.fill_ginger_beer' },
    ],
  },
  {
    flavor: ['spirit_forward'],
    img: el_conocedor,
    name: 'El conocedor',
    method: 'build_stir',
    glass: 'rocks',
    ice: 'cubed',
    garnish: 'skewed_red_fruits',
    levelDifficulty: 'low',
    videoUrl: 'znZR8Hy4IsA',
    ingredients: [
      { quantity: '60ml', name: 'Ron Centenario 30' },
      { quantity: '1', name: 'cocktails.dash_cocoa_bitters' },
      { quantity: '1', name: 'cocktails.splash_tonic_water' },
    ],
  },
];

export const cocktailsForHome: CocktailItem[] = [];

export const forTheIndustry: CocktailItem[] = [];

export const agedByNature: CocktailItem[] = [
  {
    flavor: ['sweet', 'fruity', 'refreshing'],
    img: dMora,
    name: "d'mora",
    method: 'build_and_stir',
    glass: 'rocks_glass',
    ice: '',
    garnish: 'skewed_blackberries',
    levelDifficulty: 'low',
    videoUrl: '58l4VZvc5vU',
    ingredients: [
      { quantity: '30ml', name: 'cocktails.blackberries_puree' },
      { quantity: '45ml', name: 'Ron Centenario 12 Secretos' },
      { quantity: '30ml', name: 'cocktails.tonic_water' },
    ],
  },
  {
    flavor: ['citrus', 'refreshing'],
    img: passionTonic,
    name: 'passion tonic', // Maracuya Tonic
    method: 'build_and_stir',
    glass: 'rocks_glass',
    ice: '',
    garnish: 'pineapple_chunks',
    levelDifficulty: 'low',
    videoUrl: 'iAp2Emp3PSA',
    ingredients: [
      { quantity: '30ml', name: 'cocktails.passion_fruit_puree' },
      { quantity: '45ml', name: 'Ron Centenario 5 Volcanes' },
      { quantity: '30ml', name: 'cocktails.tonic_water' },
    ],
  },
  {
    flavor: ['citrus', 'refreshing'],
    img: citrusTonic,
    name: 'citrus tonic',
    method: 'build_and_stir',
    glass: 'rocks_glass',
    ice: '',
    garnish: 'spring_basil',
    levelDifficulty: 'low',
    videoUrl: '4Y_Ulsf1dlU',
    ingredients: [
      { quantity: '10ml', name: 'cocktails.lime_juice' },
      { quantity: '20ml', name: 'cocktails.orange_juice' },
      { quantity: '45ml', name: 'Ron Centenario 12 Secretos' },
      { quantity: '30ml', name: 'cocktails.tonic_water' },
    ],
  },
  {
    flavor: ['sweet', 'fruity', 'refreshing'],
    img: forrestFruitTonic,
    name: 'forest fruits tonic', // Fresa Tonic
    method: 'muddle_build_stir',
    glass: 'rocks_glass',
    ice: '',
    garnish: 'skewed_red_fruits',
    levelDifficulty: 'low',
    videoUrl: 'BQf6d7DTjfk',
    ingredients: [
      { quantity: '2', name: 'cocktails.raspberries' },
      { quantity: '1', name: 'cocktails.strawberries' },
      { quantity: '45ml', name: 'Ron Centenario 7 Provincias' },
      { quantity: '30ml', name: 'cocktails.tonic_water' },
    ],
  },
];

export const tikiCocktails: CocktailItem[] = [
  {
    flavor: ['refreshing', 'fruity', 'sweet'],
    img: planters,
    name: "Centenario planter's punch",
    method: 'swizzle_stick',
    glass: 'tiki_glass_highball_glass',
    ice: 'crushed',
    garnish: 'mint_spring',
    levelDifficulty: '',
    videoUrl: 'dhhe3aVh6oo',
    ingredients: [
      { quantity: '30ml', name: 'Ron Centenario 7 Provincias' },
      { quantity: '30ml', name: 'Ron Centenario 9 Grados' },
      { quantity: '30ml', name: 'Ron Centenario 12 Secretos' },
      { quantity: '7ml', name: 'cocktails.centenario_homemade_allspice_dram' },
      { quantity: '30ml', name: 'cocktails.lime_juice' },
      { quantity: '20ml', name: 'cocktails.passion_fruit_syrup' },
      { quantity: '20ml', name: 'cocktails.demerara_syrup' },
    ],
  },
  {
    flavor: ['spirit_forward', 'fruity', 'sweet'],
    img: doctorCentenario,
    name: 'Doctor centenario',
    method: 'swizzle_stick',
    glass: 'double_rocks',
    ice: 'crushed',
    garnish: 'flamed_lime_shell_cinnamon',
    levelDifficulty: '',
    videoUrl: 'RkQAtpQKyy0',
    ingredients: [
      { quantity: '60ml', name: 'Ron Centenario 12 Secretos' },
      { quantity: '30ml', name: 'cocktails.lime_juice' },
      { quantity: '7ml', name: 'cocktails.granadine' },
      { quantity: '15ml', name: 'cocktails.demerara_syrup' },
      { quantity: '7ml', name: 'cocktails.centenario_homemade_falernum' },
      { quantity: '30ml', name: 'cocktails.soda' },
    ],
  },
  {
    flavor: ['fruity', 'sweet'],
    img: degrees9Punch,
    name: '9 degrees punch',
    method: 'swizzle',
    glass: 'large_brandi_snifer',
    ice: 'crushed',
    garnish: 'mint_spring',
    levelDifficulty: '',
    videoUrl: 'AUqYE3F7dQY',
    ingredients: [
      { quantity: '60ml', name: 'Ron Centenario 9 Grados' },
      { quantity: '30ml', name: 'cocktails.lime_juice' },
      { quantity: '30ml', name: 'cocktails.pineapple_pure' },
      { quantity: '30ml', name: 'cocktails.passion_fruit_syrup' },
      { quantity: '7ml', name: 'cocktails.centenario_homemade_falernum' },
      { quantity: '7ml', name: 'cocktails.centenario_homemade_allspice_dram' },
    ],
  },
];
