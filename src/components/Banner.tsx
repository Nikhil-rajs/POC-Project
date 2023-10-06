import {
  Text,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
  LinkFieldValue,
  Link,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type BannerProps = ComponentProps & {
  fields: {
    data: {
      fields: {
        bannerImage: {
          jsonValue: Field<ImageFieldValue>;
        };
        bannerCTA: {
          jsonValue: Field<LinkFieldValue>;
        };
        fields: {
          jsonValue: Field<string>;
        }[];
      };
    };
  };
};
const Banner = ({ fields }: BannerProps) => {

  return (
    <div className="banner py-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="banner-img-wrapper  p-3.5 mx-auto">
            <Image
              className=" h-auto max-w-full"
              field={fields.data.fields.bannerImage.jsonValue}
            />
          </div>
          <div className="banner-content flex flex-col justify-center">
            <h1 className="banner-title text-base font-normal">
              <Text field={fields.data.fields.fields[2].jsonValue} />
            </h1>
            <h1 className="banner-heading text-[34px] font-light md:text-[50px]">
              <Text field={fields.data.fields.fields[4].jsonValue} />
              <span className="banner-span font-bold">
                <Text field={fields.data.fields.fields[0].jsonValue} />
              </span>
            </h1>
            <p className="banner-para  text-[20px] lg:text-[24px]">
              <Text field={fields.data.fields.fields[5].jsonValue} />
            </p>
            <div className="banner-bt">
              <Link
                field={fields.data.fields.bannerCTA.jsonValue}
                className="banner-link text-center text-white text-[14px] font-normal"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withDatasourceCheck()<BannerProps>(Banner);
