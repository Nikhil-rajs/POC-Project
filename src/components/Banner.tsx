import {
  Text,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
  LinkFieldValue,
  Link,
  Image
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type BannerProps = ComponentProps & {
  fields: {
    bannerImage: Field<ImageFieldValue>;
    bannerTitle: Field<string>;
    bannerHeading: Field<string>;
    bannerSpan: Field<string>;
    bannerPara: Field<string>;
    bannerCTA: Field<LinkFieldValue>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Banner = ({ fields }: BannerProps): JSX.Element => {
  console.log(fields);

  return (
    <div className="banner py-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="banner-img-wrapper  p-3.5 mx-auto">
            <Image className=" h-auto max-w-full" field={fields.bannerImage} />
          </div>
          <div className="banner-content flex flex-col justify-center">
            <h1 className="banner-title text-base font-normal">
              <Text field={fields.bannerTitle} />
            </h1>
            <h1 className="banner-heading text-[34px] font-light md:text-[50px]">
              <Text field={fields.bannerHeading} />
              <span className="banner-span font-bold">
                <Text field={fields.bannerSpan} />
              </span>
            </h1>
            <p className="banner-para  text-[20px] lg:text-[24px]">
              <Text field={fields.bannerPara} />
            </p>
            <div className="banner-bt">
            <Link field={fields.bannerCTA} className='banner-link text-center text-white text-[14px] font-normal'>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withDatasourceCheck()<BannerProps>(Banner);
