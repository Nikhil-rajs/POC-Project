import {
  Text,
  Link,
  Field,
  withDatasourceCheck,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type PricingPros = ComponentProps & {
  fields: {
    pricingTitle: Field<string>;
    pricingPara: Field<string>;
    pricingCards: pricingCard[];
    pricingCTA: Field<LinkFieldValue>;
  };
};
type pricingCard = {
  fields: {
    pricingVersion: Field<string>;
    pricingCost: Field<string>;
    pricingPeriod: Field<string>;
    pricingPara: Field<string>;
    pricingList: pricingLists[];
    pricingCTA: Field<LinkFieldValue>;
  };
};
type pricingLists = {
  fields: {
    serviceTitle: Field<string>;
  };
};
const Pricing = ({ fields }: PricingPros): JSX.Element => {
  return (
    <div className="pricing py-[100px]">
      <div className="container mx-auto p-3.5">
        <div className="pricing-content">
          <h1 className="pricing-title text-[34px] px-5 font-bold leading-normal mb-5 md:mb-2 md:text-[44px] md:text-center md:leading-tight">
            <Text field={fields.pricingTitle} />
          </h1>
          <p className="pricing-para px-5 text-[20px] font-light text-[#8da2b5] tracking-wider md:text-center">
            <Text field={fields.pricingPara} />
          </p>
        </div>

        <div className="pricingcard grid grid-cols-1 md:grid-cols-3 md:gap-3 ">
          {fields.pricingCards.map((card: pricingCard, index: number) => {
            return (
              <div className="card-content rounded-md " key={index}>
                <h1 className="card-version text-[22px] font-light tracking-widest text-[#0095f7] mb-6 md:text-[17px] lg:text-[22px]">
                  <Text field={card.fields.pricingVersion} />
                </h1>
                <p className="card-cost text-[60px] font-bold text-[#3a3f52] mb-0">
                  <Text field={card.fields.pricingCost} />
                </p>
                <p className="card-period text-[12.8px] text-[#8da2b5] font-normal tracking-wide">
                  <Text field={card.fields.pricingPeriod} />
                </p>
                <p className="card-para tracking-wider font-normal text-[17px] text-left my-3.5 text-[#53627C]  md:text-[14px] lg:text-[17px]">
                  <Text field={card.fields.pricingPara} />
                </p>
                <div className="card-divider border-t border-[#edf1f2] mt-8 pt-8 "></div>
                <div className="card-list">
                  {card.fields.pricingList.map((services: pricingLists, index) => {
                    return (
                      <div className="" key={index}>
                        <li className="list-none ">
                          <ul className="leading-relaxed">
                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2.5 text-xl" />
                            <span className="text-[14px] text-[#8da2b5] font-light tracking-widest">
                              <Text field={services.fields.serviceTitle} />
                            </span>
                          </ul>
                        </li>
                      </div>
                    );
                  })}
                </div>
                <div className="card-cta text-center text-white tracking-widest bg-[#6772e5] mt-5">
                  <Link field={card.fields.pricingCTA} />
                  read more
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<PricingPros>(Pricing);
