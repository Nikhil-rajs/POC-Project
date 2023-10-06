import {
  Text,
  Link,
  Field,
  withDatasourceCheck,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Footer = ComponentProps & {
  fields: {
    footerTitle: FooterContent[];
    footerCompanyTitle: Field<string>;
    footerCompanyDescription: Field<string>;
    footerCompanyEmail: Field<string>;
    footerCopyright: Field<string>;
  };
};
type FooterContent = {
  fields: {
    footerHeading: Field<string>;
    footerTools: FooterToolsService[];
  };
};
type FooterToolsService = {
  fields: {
    listName: Field<string>;
    listLink: Field<LinkFieldValue>;
  };
};
const footer = ({ fields }: Footer): JSX.Element => (
  <div className="footer bg-[#292c31] px-[25px] py-[60px] md:px-0">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {fields.footerTitle.map((footerTitle: FooterContent, index: number) => {
          return (
            <div className="footer-content md:px-4 " key={index}>
              <h1 className="footer-title text-[18px] text-[#aeb3bd] uppercase tracking-widest font-medium mb-[20px] mt-[30px] ">
                <Text field={footerTitle.fields.footerHeading} />
              </h1>
              <div className="listing">
                {footerTitle.fields.footerTools.map(
                  (footerTools: FooterToolsService, index: number) => {
                    return (
                      <ul key={index}>
                        <li className="mb-[10px] text-base tracking-wider font-light- text-[#62656a] md:md:text-[14px]">
                          <Link field={footerTools.fields.listLink}>
                            <Text field={footerTools.fields.listName} />
                          </Link>
                        </li>
                      </ul>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
        <div className="footer-company md:px-4">
          <h1 className="footer-company-title text-[18px] text-[#aeb3bd] uppercase tracking-widest font-medium mb-[20px] mt-[30px]">
            <Text field={fields.footerCompanyTitle} />
          </h1>
          <p className="footer-company-description mb-[10px] text-[16px] tracking-wider font-light text-[#62656a] text-left md:md:text-[12px] md:text-justify">
            <Text field={fields.footerCompanyDescription} />
          </p>
          <p className="footer-company-email text-[#0095f7] font-light md:text-xs md:text-justify">
            <Text field={fields.footerCompanyEmail} />
          </p>
        </div>
      </div>
      <div className="divider pb-8 mt-8"></div>
      <div className="footer-icon-copyright md:flex md:flex-row md:justify-between  md:px-4 ">
        <div className="footer-social-icons text-[30px] text-[#62656a]">
          <FontAwesomeIcon icon={faFacebookSquare} className="mr-5" />
          <FontAwesomeIcon icon={faInstagram} className="mr-5" />
          <FontAwesomeIcon icon={faTwitter} className="mr-5" />
          <FontAwesomeIcon icon={faYoutube} className="mr-5" />
        </div>
        <div className="footer-copyright-title">
          <p className="copyright text-[#62656a] font-normal mt-5 text-[12.8px] md:mt-4">
            <Text field={fields.footerCopyright} />
            <span className="copyright-made text-[#0095f7] ">Templune</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<Footer>(footer);
