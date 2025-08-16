import React from 'react';
import { SocialLinks } from './SocialLinks';

const navigationLinks = [
  'About Finsage',
  'For Employers', 
  'For Individuals',
  'Careers',
  'Resources/blog'
];

const footerLinks = [
  { text: 'Privacy policy', url: '#' },
  { text: 'Terms of use', url: '#' },
  { text: 'Contact us', url: 'mailto:support@finsage.co' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col relative min-h-[708px] w-full items-center pt-[187px] pb-[91px] px-20 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/23e4188fc0ce3eaf6de5684238906c2c15cfac55?placeholderIfAbsent=true"
        alt="Footer background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative w-[963px] max-w-full">
        <div className="max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[54%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col text-base text-white font-medium tracking-[0.64px] max-md:mt-10">
                <img
                  src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/fabfe27698cc06f081c1d399b8d10683943ec617?placeholderIfAbsent=true"
                  alt="Finsage logo"
                  className="aspect-[3.89] object-contain w-[214px] max-w-full"
                />
                <div className="self-stretch mt-[34px]">
                  <span className="text-[20px]">
                    Financial wellness for modern{" "}
                  </span>
                  <br />
                  <span className="text-[20px]">workplaces</span>
                  <br />
                  <br />
                  Less money stress, more focus
                </div>
                <address className="w-[298px] mt-[70px] max-md:mt-10 not-italic">
                  <span className="font-bold text-[20px]">
                    CONTACT
                  </span>
                  <br />
                  <br />
                  <a href="mailto:support@finsage.co" className="hover:underline">
                    Email - support@finsage.co
                  </a>
                </address>
              </div>
            </div>
            <div className="w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <nav className="text-white text-sm font-semibold leading-[52px] tracking-[0.56px] uppercase mt-[74px] max-md:mt-10">
                {navigationLinks.map((link, index) => (
                  <div key={index}>
                    <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                      {link}
                    </a>
                    <br />
                  </div>
                ))}
              </nav>
            </div>
            <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <SocialLinks />
            </div>
          </div>
        </div>
        <hr className="w-full shrink-0 h-0.5 mt-[76px] border-white border-solid border-2 max-md:mt-10" />
        <div className="flex w-[899px] max-w-full items-stretch gap-[40px_100px] text-sm text-white font-normal mt-[26px]">
          <div className="grow shrink w-[99px]">
            Finsage.co © 2025
          </div>
          <div className="font-semibold text-center grow shrink w-[246px]">
            {footerLinks.map((link, index) => (
              <span key={index}>
                {index > 0 && ' '}
                <a 
                  href={link.url}
                  className="font-normal underline hover:no-underline transition-all duration-200"
                >
                  {link.text}
                </a>
                {index < footerLinks.length - 1 && ' '}
              </span>
            ))}
          </div>
          <div className="text-right grow shrink w-[109px]">
            Design & Develop by{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};
