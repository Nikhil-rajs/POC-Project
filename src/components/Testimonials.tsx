import {
  Text,
  Image,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Testimonials = ComponentProps & {
  fields: {
    testimonialsTitle: Field<string>;
    testimonialsPara: Field<string>;
    testimonialImg: Field<ImageFieldValue>;
    testimonialName: Field<string>;
    testimonialDesignation: Field<string>;
    testimonialPriReview: Field<string>;
    testimonialSecReview: Field<string>;
  };
};

const ContentBlock = ({ fields }: Testimonials): JSX.Element => (
  <div className="testimonials py-[100px] ">
    <div className="container mx-auto p-3.5 ">
      <div className="testimonials-content">
        <h1 className="testimonials-title px-5 text-[34px] font-bold text-left mb-5 md:text-[44px] md:text-center md:mb-2">
          <Text field={fields.testimonialsTitle} />
        </h1>
        <p className="testimonial-para px-5 text-[20px] font-light tracking-wider md:text-center">
          <Text field={fields.testimonialsPara} />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="testimonial-box mt-5">
          <div className="testimonial-card">
            <div className="testimonial-details-wrapper  md:flex">
              <div className="testimonial-img w-14 h-14 rounded-lg">
                <Image className="rounded-full" field={fields.testimonialImg} />
              </div>
              <div className="testimonial-author-details ">
                <h1 className="author-name text-[22px] font-bold tracking-wider mt-1.5 md:text-[14px] lg:text-[22px]">
                  <Text field={fields.testimonialName} />
                  <span className="rating-icons ml-2.5 text-[14px] ">5</span>
                </h1>
                <p className="author-designation text-[12.8px] md:text-[12px]">
                  <Text field={fields.testimonialDesignation} />
                </p>
              </div>
            </div>
            <div className="testimonial-para mt-6 text-[16px] font-light tracking-wider md:text-[14px] ">
              <Text field={fields.testimonialPriReview} />
            </div>
          </div>
        </div>
        <div className="testimonial-box mt-5">
          <div className="testimonial-card">
            <div className="testimonial-details-wrapper  md:flex">
              <div className="testimonial-img w-14 h-14 rounded-lg">
                <Image className="rounded-full" field={fields.testimonialImg} />
              </div>
              <div className="testimonial-author-details ">
                <h1 className="author-name text-[22px] font-bold tracking-wider mt-1.5 md:text-[14px] lg:text-[22px]">
                  <Text field={fields.testimonialName} />
                  <span className="rating-icons ml-2.5 text-[14px] ">5</span>
                </h1>
                <p className="author-designation text-[12.8px] md:text-[12px]">
                  <Text field={fields.testimonialDesignation} />
                </p>
              </div>
            </div>
            <div className="testimonial-para mt-6 text-[16px] font-light tracking-wider md:text-[14px] ">
              <Text field={fields.testimonialSecReview} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<Testimonials>(ContentBlock);
