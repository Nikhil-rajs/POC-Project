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
  // const bgImage =
  //   'https://workable-sensibly-serval.ngrok-free.app' +
  //   fields.data.fields.actionImg.jsonValue.value.src;
  return (
    // <div className="action py-[100px]" style={{ backgroundImage: `url(${bgImage})` }}>
    //   <div className="container mx-auto px-3.5">
    //     <div className="action-content px-5 text-white mx-auto">
    //       <h1 className="action-title text-left text-[34px]  font-bold mb-5 md:mb-2 md:text-center md:text-[44px]">
    //         <Text field={fields.data.fields.fields[1]} />
    //       </h1>
    //       <p className="action-para text-[20px] font-light opacity-80 text-left  md:text-center ">
    //         <Text field={fields.data.fields.fields[2]} />
    //       </p>
    //     </div>
    //     <div className="text-center mt-[65px]">
    //       {' '}
    //       <Link
    //         field={fields.data.fields.actionCTA.jsonValue}
    //         className="action-cta text-[#0095f7] bg-[#fff]"
    //       >
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="action ">
    <div className="action-background  w-full h-full relative">
      <Image className="w-full h-screen lg:h-fit" field={fields.data.fields.actionImg.jsonValue} />
      <div className="action-content absolute my-auto top-0 flex flex-col justify-center items-center h-full text-white  md:w-full">
        <h1 className='action-content-heading text-left px-8 text-[34px] font-bold mb-5 leading-relaxed md:text-center md:text-[44px] md:leading-tight'><Text field={fields.data.fields.fields[1]}/></h1>
        <p className="action-content-para text-left px-8 text-[20px] opacity-80 mb-10 font-light tracking-wider md:text-center md:w-[50%]"><Text field={fields.data.fields.fields[2]}/></p>
        <Link className='text-center mx-auto flex justify-center' field={fields.data.fields.actionCTA.jsonValue}><button className='action-submit text-center rounded px-11 py-4 text-[#0095f7] bg-white'>Get Started</button></Link>
      </div>
    </div>
    </div>
  );
};

export default withDatasourceCheck()<ContentBlockProps>(Action);
