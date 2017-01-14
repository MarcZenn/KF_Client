// import React
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';


class PrivacyPolicy extends Component {
  render() {
    return(
      <section>
        <Nav />
          <div className="text-center privacy-policy-content">
            <img src="/public/images/skulls.png"  />
            <h1>Privacy Policy</h1>
            <p>This privacy policy discloses the privacy practices for marczenn.com. This privacy policy applies solely to information collected by this web site and certain third parties mentioned here after. It will notify you of the following:</p>
            <ol>
              <li>What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.</li>
              <li>What choices are available to you regarding the use of your data.</li>
              <li>The security procedures in place to protect the misuse of your information.</li>
            </ol>
            <h1>INFORMATION COLLECTION, USE, AND SHARING</h1>
            <p>We are the sole owners of any information collected from you via this site. We only have access to collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone at anytime under any circumstances unless upon receiving a valid request from you to release your data only and your data only.</p>
            <p>We are the sole owners of any information collected from you via this site. Currently we only have access to collect information that you voluntarily give us via email or other direct contact from you. We will not sell, rent give or show this information to anyone at anytime under any circumstances unless upon receiving a valid request from you to release your data only and your data only. Be aware that although we do not collect any data from you at this time we do employ third-party technologies and work with third-party vendors that may use cookies to serve ads based on a user's prior visits. This is discussed in further detail below.</p>
            <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order or answer a suppor ticket.</p>
            <p>Unless you ask us not to, we may contact you via email (only if you have provided us your email before by contacting us) in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
            <h1>YOUR ACCESS TO AND CONTROL OVER INFORMATION</h1>
            <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the contact form on our website:</p>
            <ol>
              <li>See what data we have about you, if any.</li>
              <li>Change/correct any data we have about you.</li>
              <li>Have us delete any data we have about you.</li>
              <li>Express any concern you have about our use of your data.</li>
            </ol>
            <h1>SECURITY</h1>
            <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
            <p>Wherever we collect sensitive information (such as credit card data or email addresses), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or by looking for "https" at the beginning of the address URL of our web page.</p>
            <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
            <h1>COOKIES AND THIRD-PARTY VENDORS</h1>
            <p>We work with third-party vendors that use "cookies" on this site (mainly Google). A cookie is a piece of data stored on a site visitor's hard drive to help improve access to the site and identify repeat visits. Cookies can enable sites to track and target the interests of users to enhance their site experience. Usage of these cookie is in no way linked to any personally identifiable information about you, the user. Third party vendors, including Google, use cookies on this website to serve ads based on our users' prior visits to this site or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Ad Settings. Alternatively users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info.</p>
            <h1>LINKS</h1>
            <p>This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
          </div>
        <Footer />
      </section>
    )
  }
}


PrivacyPolicy.propTypes = {
  // propTypes
}


export default PrivacyPolicy
