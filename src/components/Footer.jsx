import { footerLinks } from "../data";

const Footer = () => {
  return (
    <footer className="py-6 px-4 flex-col space-y-6">
      <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap justify-between sm:border-b-tertiary-text sm:border-b-2 pb-4">
        <div className="flex flex-col space-y-1.5">
          <h2 className="text-3xl sm:text-2xl text-primary-blue">Morent</h2>
          <p className="max-w-1/2">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerLinks.map(({ header, sublinks }) => (
            <div key={header}>
              <h3 className="font-semibold text-sm mb-4">{header}</h3>
              <ul className="space-y-2">
                {sublinks.map(({ title, link }) => (
                  <li key={title}>
                    <a
                      href={link}
                      className="text-tertiary-text hover:text-tertiary-text/60 transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse gap-4 sm:justify-between">
        {" "}
        <div className="flex justify-between gap-4 items-center text-primary-text font-semibold text-sm">
          <a href="#" className="">
            Privacy & Policy
          </a>
          <a href="#" className="">
            Terms & Conditions
          </a>
        </div>
        <span className="font-semibold text-sm">
          ©2022 MORENT. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
