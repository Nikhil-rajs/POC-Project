import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type ContactusProps = ComponentProps & {
  fields: {
    contactHeading: Field<string>;
    contactAddress: Field<string>;
    contactPhone: Field<number>;
    contactEmail: Field<string>;
    contactWebsite: Field<string>;
  };
};
const Contactus = ({ fields }: ContactusProps) => {
  const formhandler = (event:any) => {
    event.preventDefault();
    const name = event.target.Name.value;
    console.log('Name:', name);
    const email = event.target.Email.value;
    console.log('Email:', email);
    const subject = event.target.Subject.value;
    console.log('Subject:', subject);
    const message = event.target.Message.value;
    console.log('Message:', message);
  };
  return (
    <div className="contact-us py-28 bg-[#fafafa]">
      <div className="container mx-auto">
        <h1 className="contact-initial-heading text-center capitalize mb-12 px-[15px] text-[28px] text-black font-normal leading-normal">
          Get in touch with us
        </h1>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2">
          <div className="contact-input-details bg-[#fff] ">
            <form action="post" className="p-6" onSubmit={formhandler}>
              <h1 className="form-heading mb-6 leading-normal font-normal text-3xl">
                Get in touch
              </h1>
              <div className="input-form ">
                <input
                  type="text"
                  className="contact-name border w-full h-14 text-[16px] px-3 py-1.5 rounded-sm mb-4 "
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="email"
                  className="contact-email border w-full h-14 text-[16px] px-3 py-1.5 rounded-sm mb-4"
                  placeholder="Email"
                  name="Email"
                />
                <input
                  type="text"
                  className="contact-subject border w-full h-14 text-[16px] px-3 py-1.5 rounded-sm mb-4"
                  placeholder="Subject"
                  name="Subject"
                />
                <textarea
                  className="contact-message border w-full text-base px-3 py-1.5 rounded-sm mb-4"
                  placeholder="Message"
                  name="Message"
                  rows={6}
                />
                <div className="form-submit mb-4">
                  <button
                    type="submit"
                    className="px-4 py-3 bg-[#0095f7] rounded-md text-white text-[14px] mb-4"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="Contact-details p-6 bg-[#0095f7] lg:-my-5">
            <h1 className="contact-heading text-[28px] text-white mb-6 font-normal ">
              <Text field={fields.contactHeading} />
            </h1>
            <div className="info-wrapper">
              <div className="address-wrapper flex mb-6 md:items-center md:justify-center ">
                <div className="icon-address w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
                  <FontAwesomeIcon
                    className="icon-ad text-white lg:text-[25px]"
                    icon={faLocationPin}
                  />
                </div>
                <p className="address-content text-white text-[15px] pl-4 leading-loose w-9/12 md:text-[24px]">
                  <span className="text-white font-semibold">Address:</span>{' '}
                  <Text field={fields.contactAddress} />
                </p>
              </div>
              <div className="address-wrapper flex mb-6 md:items-center md:justify-center ">
                <div className="icon-address w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
                  <FontAwesomeIcon className="icon-ad text-white lg:text-[25px]" icon={faPhone} />
                </div>
                <p className="address-content text-white text-[15px] pl-4 leading-loose w-9/12 md:text-[24px]">
                  <span className="text-white font-semibold">Phone:</span>{' '}
                  <Text field={fields.contactPhone} />
                </p>
              </div>
              <div className="address-wrapper flex mb-6 md:items-center md:justify-center ">
                <div className="icon-address w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
                  <FontAwesomeIcon
                    className="icon-ad text-white lg:text-[25px]"
                    icon={faPaperPlane}
                  />
                </div>
                <p className="address-content text-white text-[15px] pl-4 leading-loose w-9/12 md:text-[24px]">
                  <span className="text-white font-semibold">Email:</span>{' '}
                  <Text field={fields.contactEmail} />
                </p>
              </div>
              <div className="address-wrapper flex md:items-center md:justify-center ">
                <div className="icon-address w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
                  <FontAwesomeIcon className="icon-ad text-white lg:text-[25px]" icon={faGlobe} />
                </div>
                <p className="address-content text-white text-[15px] pl-4 leading-loose w-9/12 md:text-[24px] ">
                  <span className="text-white font-semibold">Website:</span>{' '}
                  <Text field={fields.contactWebsite} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ContactusProps>(Contactus);
