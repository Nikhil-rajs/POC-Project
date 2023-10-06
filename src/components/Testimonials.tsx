import {
  Text,
  Image,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

type Testimonials = ComponentProps & {
  fields: {
    data: {
      fields: {
        fields: Field<string>[];

        testimonialCard: {
          jsonValue: TestimonialCard[];
        };
      };
    };
  };
};
type TestimonialCard = {
  fields: {
    testimonialImg: Field<ImageFieldValue>;
    testimonialName: Field<string>;
    testimonialDesg: Field<string>;
    testimonialPara: Field<string>;
  };
};

const ContentBlock = ({ fields }: Testimonials) => {
  return (
    <div className="testimonials py-[100px] ">
      <div className="container mx-auto p-3.5 ">
        <div className="testimonials-content">
          <h1 className="testimonials-title px-5 text-[34px] font-bold text-left mb-5 md:text-[44px] md:text-center md:mb-2">
            <Text field={fields.data.fields.fields[0]} />
          </h1>
          <p className="testimonial-para px-5 text-[20px] font-light tracking-wider md:text-center">
            <Text field={fields.data.fields.fields[2]} />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {fields.data.fields.testimonialCard.jsonValue.map(
            (testimonialCards: TestimonialCard, index: number) => {
              console.log(testimonialCards);
              return (
                <div className="testimonial-card mt-8 bg-[#fff] md:mx-5" key={index}>
                  <div className="author-details flex md:flex-row flex-col md:items-center">
                    <div className="author-img w-1/4 ">
                      <Image
                        field={testimonialCards.fields.testimonialImg}
                        height={75}
                        width={75}
                        className="rounded-full w-full"
                      />
                    </div>
                    <div className="head-para-wrapper pl-2 w-full md:w-3/4 md:ml-2.5">
                      <h1 className="author-name text-[22px] tracking-wider font-bold mt-1.5 md:text-[14px] lg:text-[22px]">
                        <Text field={testimonialCards.fields.testimonialName} />
                        <span className="author-icon text-[14px] text-white bg-[#0095f7]">
                          5<FontAwesomeIcon icon={faStar} className="fa-icon ml-1" />
                        </span>
                      </h1>
                      <p className="author-desg text-[12.8px] text-[#8da2b5] font-normal">
                        <Text field={testimonialCards.fields.testimonialDesg} />
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-divider mt-5"></div>
                  <p className="author-para text-[16px] font-light tracking-wider mt-6 leading-[1.8]">
                    <Text field={testimonialCards.fields.testimonialPara} />
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<Testimonials>(ContentBlock);
