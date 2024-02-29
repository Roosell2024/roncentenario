import { useTranslation } from 'react-i18next';
import { LeafIcon, LeafsIconC, OrangeIcon } from '../assets/imgs/shared';
import { CelIcon, EmailIcon, FaceBookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../assets/imgs/contactUs';
import { AgedByNatureLogo, ContactUsForm } from '../components';

export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section className="2xl:px-52 xl:px-36 lg:px-28 relative">
      <div className="absolute left-1/2 top-36 transform-50">
        <AgedByNatureLogo className="w-96 h-96" />
      </div>
      <div className="pt-28 sm:px-36 mt-64">
        <h1 className="uppercase font-bold text-6xl text-gold sm:text-left text-center">{t('menu.contact_us')}</h1>
      </div>

      <img src={LeafsIconC} alt="Leafs" className="w-80 h-80 absolute sm:right-40 top-32 sm:block hidden" />
      <img
        src={OrangeIcon}
        alt="Orange icon"
        className="w-96 h-80 rotate-12 absolute -left-14 top-128 sm:block hidden"
      />
      <img src={LeafIcon} alt="Leaf" className="w-32 -rotate-[9deg] ml-20 mt-10 absolute top-[40rem] left-96" />

      <ContactUsForm />

      <div className="sm:flex items-center justify-center sm:mt-32 mt-20 sm:px-0 px-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-center gap-4">
            <img src={CelIcon} alt="Cel" />
            <div>
              <p className="text-green-300 text-xl font-black uppercase">{t('contact_us.phone_number')}</p>
              <p className="text-green-300 text-3xl font-black hover:underline">
                <a href="tel:+50622164200">+(506) 2216-4200</a>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img src={EmailIcon} alt="Email" />
            <div>
              <p className="text-green-300 text-xl font-black uppercase">{t('contact_us.email')}</p>
              <p className="text-green-300 text-3xl font-black hover:underline">
                <a href="mailto:customerservice@centenario.co.cr">customerservice@centenario.co.cr</a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[400px] border-green-100 border-l-[3px] border-dashed xl:mx-44 mx-32 relative
        before:h-5 before:w-5 before:bg-green-300 before:absolute before:-left-[12px] before:-top-2 before:rounded-full
        after:h-5 after:w-5 after:bg-green-300 after:absolute after:-left-[12px] after:-bottom-2 after:rounded-full sm:block hidden"
        />
        <div className="grid grid-cols-2 gap-4 sm:mt-0 mt-10">
          <a href="https://www.facebook.com/roncentenario" target="_blank" rel="noreferrer">
            <img src={FaceBookIcon} alt="Facebook" className="w-44 h-3w-44" />
          </a>
          <a href="https://www.instagram.com/ron.centenario_intl" target="_blank" rel="noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="w-44 h-3w-44" />
          </a>
          <a href="https://www.youtube.com/channel/UC97aJcwEDoVCQW02rFCi99A" target="_blank" rel="noreferrer">
            <img src={YoutubeIcon} alt="Youtube" className="w-44 h-3w-44" />
          </a>
          <a href="https://www.linkedin.com/company/centenario-internacional/" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="Linkedin" className="w-44 h-3w-44" />
          </a>
        </div>
      </div>
    </section>
  );
};
