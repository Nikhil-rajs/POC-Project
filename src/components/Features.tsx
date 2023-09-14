import {
  Text,
  Image,
  Field,
  withDatasourceCheck,
  LinkFieldValue,
  ImageFieldValue,
  Link
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FeatureProps = ComponentProps & {
  fields: {
    featureTitle: Field<string>;
    featureHeading: Field<string>;
    featurePara: Field<string>;
    featureCTA: Field<LinkFieldValue>;
    featureImg: Field<ImageFieldValue>;
  };
};

const Feature = ({ fields }: FeatureProps): JSX.Element => (
  <div className="feature py-[100px]">
    <div className="container mx-auto">
    <div className="grid grid-cols-1  md:grid-cols-12">
      <div className="md:col-start-2 md:col-end-6 md:gap-1">
        <div className="feature-content-wrapper">
          <h1 className="feature-title font-normal uppercase">
            <Text field={fields.featureTitle} />
          </h1>
          <h1 className="feature-Heading font-bold text-[34px] mb-5 md:text-[44px] md:mb-2 ">
            <Text field={fields.featureHeading} />
          </h1>
          <p className="feature-para text-[20px] font-extralight">
            <Text field={fields.featurePara} />
          </p>
          <div className="feature-bt">
            <Link field={fields.featureCTA} className='feature-link text-center text-white text-[14px] font-normal'>Start Free Trial</Link>
            </div>
        </div>
      </div>
      <div className="p-3.5 md:col-start-6 md:col-end-12 ">
        <Image field={fields.featureImg}/>
      </div>
  
    </div>
    </div>
  </div>
);

export default withDatasourceCheck()<FeatureProps>(Feature);
