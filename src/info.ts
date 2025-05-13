//TODO: Actualizar la información de contacto
interface ContactInfo {
  LOCATION_INFO: string;
  EMAIL_INFO: string;
  PHONE_INFO: string;
  INSTAGRAM_URL: string;
  TWITTER_URL: string;
  FACEBOOK_URL: string;
  COMPANY_NAME: string;
}

const COMPANY_NAME = `Lorem ipsum`;
const LOCATION_INFO = `Centro, 28014 Madrid`;
const EMAIL_INFO = `soporte@loremipsum.com`;
const PHONE_INFO = `+34 546 546 546`;
const INSTAGRAM_URL=`https://www.instagram.com/`;
const TWITTER_URL=`https://twitter.com/`;
const FACEBOOK_URL=`https://www.facebook.com/`;

const contactInfo: ContactInfo = {
  COMPANY_NAME,
  LOCATION_INFO,
  EMAIL_INFO,
  PHONE_INFO,
  INSTAGRAM_URL,
  TWITTER_URL,
  FACEBOOK_URL
};
export default contactInfo;
