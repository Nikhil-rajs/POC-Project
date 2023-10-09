import {
  Text,
  Link,
  Field,
  withDatasourceCheck,
  LinkFieldValue,
  Image,
  ImageFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type ContentBlockProps = ComponentProps & {
  fields: {
    data: {
      fields: {
        fields: Field<string>[];

        actionImg: {
          jsonValue: Field<ImageFieldValue>;
        };

        actionCTA: {
          jsonValue: Field<LinkFieldValue>;
        };
      };
    };
  };
};
const Action = ({ fields }: ContentBlockProps) => {
  return (
    <div className="action ">
      <div className="action-background  w-full h-full relative">
        <Image
          className="w-full h-screen lg:h-fit"
          field={fields.data.fields.actionImg.jsonValue}
        />
        <div className="action-content absolute my-auto top-0 flex flex-col justify-center items-center h-full text-white  md:w-full">
          <h1 className="action-content-heading text-left px-8 text-[34px] font-bold mb-5 leading-relaxed md:text-center md:text-[44px] md:leading-tight">
            <Text field={fields.data.fields.fields[1]} />
          </h1>
          <p className="action-content-para text-left px-8 text-[20px] opacity-80 mb-10 font-light tracking-wider md:text-center md:w-[50%]">
            <Text field={fields.data.fields.fields[2]} />
          </p>
          <Link
            className="text-center mx-auto flex justify-center"
            field={fields.data.fields.actionCTA.jsonValue}
          >
            <button className="action-submit text-center rounded px-11 py-4 text-[#0095f7] bg-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ContentBlockProps>(Action);
