import {
  Text,
  Link,
  Field,
  withDatasourceCheck,
  LinkFieldValue,
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
  const bgImage = 'https://bedsc.dev.local' + fields.data.fields.actionImg.jsonValue.value.src;
  return (
    <div className="action py-[100px]" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-3.5">
        <div className="action-content px-5 text-white mx-auto">
          <h1 className="action-title text-left text-[34px]  font-bold mb-5 md:mb-2 md:text-center md:text-[44px]">
            <Text field={fields.data.fields.fields[1]} />
          </h1>
          <p className="action-para text-[20px] font-light opacity-80 text-left  md:text-center ">
            <Text field={fields.data.fields.fields[2]} />
          </p>
        </div>
        <div className="text-center mt-[65px]">
          {' '}
          <Link
            field={fields.data.fields.actionCTA.jsonValue}
            className="action-cta text-[#0095f7] bg-[#fff]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ContentBlockProps>(Action);
