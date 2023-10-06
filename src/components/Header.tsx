import React, { useState } from 'react';

import {
  Text,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
  LinkFieldValue,
  Image,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type header = ComponentProps & {
  fields: {
    headerLogo: Field<ImageFieldValue>;
    headerContent: HeaderContent[];
  };
};
type HeaderContent = {
  fields: {
    headerText: Field<string>;
    headerLink: Field<LinkFieldValue>;
  };
};

const Header = ({ fields }: header): JSX.Element => {
  const [click, setclick] = useState(false);
  const clickhander = () => {
    click ? setclick(false) : setclick(true);
  };
  return (
    <div className="navbar ">
      <nav className="nav h-[70px] fixed w-full bg-white">
        <div className="container mx-auto">
          <div className="header-icons flex mx-auto my-auto h-[70px] relative">
            <div className="text-[38px] px-3 py-1 md:hidden">
              <button onClick={clickhander}>
                <span>&#9776;</span>
              </button>
            </div>
            <div className="header-logo mx-auto my-auto pr-12">
              <Image field={fields.headerLogo} />
            </div>
            <ul
              className={`header-listing  flex flex-col absolute text-center top-16 px-3 w-full md:justify-end md:top-0 md:relative md:flex-row md:items-center md:border-b-0 ${
                click ? 'block' : 'hidden md:flex'
              } `}
            >
              {fields.headerContent.map((headerContents: HeaderContent, index: number) => {
                console.log(headerContents);
                return (
                  <li
                    className="header-listing-content py-5 font-normal flex justify-between text-[#53627C] text-[13px] md:text-[12px] text-left border-b md:mx-4 bg-white md:bg-transparent md:border-b-0 md:border-white transition duration-1000"
                    key={index}
                  >
                    <Link field={headerContents.fields.headerLink}>
                      <Text field={headerContents.fields.headerText} />
                    </Link>
                    <p className="md:hidden">&#10095;</p>
                  </li>
                );
              })}
              <li className="header-listing-content bg-white py-5 font-normal flex justify-between text-[#53627C] text-[13px] md:text-[12px] text-left border-b md:mx-4 md:border-b-0 md:py-2 md:px-4 md:bg-[#007bff] md:text-white">
                Try for Free <p className="md:hidden">&#10095;</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default withDatasourceCheck()<header>(Header);
