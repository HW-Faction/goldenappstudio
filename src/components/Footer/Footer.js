import React from "react";
import "./Footer.css";
import { Modal, Button } from "react-bootstrap";

export default class Footer extends React.Component {
  state = {
    showModal: false
  };

  getInitialState = () => {
    return { showModal: false };
  };

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div>
        <footer className="footer" id="contact">
          {/* bottam bar  */}
          <footer className="footer-std footer-mentions">
            <div className="inner">
              <div className="horizontal-box">
                <div className="column-double">
                  <p className="caption" id="One" style={{ fontSize: "25px" }}>
                    © 2019 GoldenApp Studio Inc. All rights reserved.
                  </p>
                  <p className="micro" id="Two" style={{ fontSize: "15px" }}>
                    All assets on this site are trademarks of GoldenApp Studio
                    Inc, registered in India, USA &amp; UK.
                  </p>
                </div>
                <p className="micro">
                  <span className="micro-link">
                    <a style={{ fontSize: "18px" }}>Terms</a>
                  </span>
                  <span className="micro-link sep">
                    <a
                      style={{ fontSize: "18px" }}
                      onClick={this.open}
                      bsStyle="primary"
                      bsSize="large"
                    >
                      Privacy
                    </a>
                  </span>

                  <span className="micro-link sep">
                    <a
                      className="js-privacy-settings-open"
                      style={{ fontSize: "18px" }}
                    >
                      Cookie Preferences
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </footer>
        </footer>

        {/** Pop up modal  */}
        <Modal
          size="xl"
          scrollable={true}
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header closeButton>
            <Modal.Title>Our Privacy and Cookie Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>

              <h2>1. INTRODUCTION</h2><br/>
<h5>Summary:</h5><br/>
              This Policy describes how we obtain and use personal data (which can be used to identify a specific individual) and anonymous data (which can’t) about our users.<br /> Certain provisions of the Policy, which are clearly labelled, apply only to residents of the European Union. <br />We may change this Policy at any time and will post the revised Policy here and provide current users advance notice of the changes through email, Service notices, or otherwise. <br />We need certain Personal Data about you (i.e., email for account creation, address information to verify payments) in order to provide the Services.<br /> We try to limit this as much as possible.<br /> The Services are not directed at children, and we will remove any information we have about children when requested.<br />

              <h6>a. General.</h6> This Privacy and Cookie Policy (the “Policy”) describes how GoldenApp Studio Inc, Inc. and its affiliates (“GoldenApp Studio Inc” or “we” and its derivatives) collects, uses and shares information about visitors to our website at www.GoldenApp Studio Inc.com (together with its subdomains, such as the GoldenApp Studio Inc blog, the “Site”) and the users of our mobile, desktop and web applications (each an “App” and, collectively, the “Apps”), which are available from the Site and third party sellers like the Google Play and Apple App Stores (any such seller, an “App Store”). The Apps and the Site together are the “Services.” “You” refers to any user of the Services, including, to the extent applicable, a visitor to the Site. Capitalized words used but not defined in this Policy have the meanings provided in our Terms of Service (the “Terms”) which are available at www.GoldenApp Studio Inc.com/terms.

              <h6>b. EU Specific Provisions.</h6>Certain provisions of the Policy apply only to residents of the European Union (the “EU”), and are clearly labeled as such.<br /> Otherwise, the Policy applies to all users of our Services, regardless of location.

              <h6>c. Changes.</h6>We may change this Policy at any time.<br /> When we do so, we will post the updated Policy on this page and, if the changes are material, will inform existing users through the Services. Any changes to the Policy will be effective immediately for new users and thirty (30) days after we post notice of such changes on the Site or inform existing users of the changes.

              <h6>d. Children.</h6>The Services are not directed to children. <br />If a parent or guardian becomes aware that his or her child (based on the jurisdiction where the child lives, which in the United States means someone under the age of 13) has provided us with Personal Data without parental consent, he or she should contact us.<br /> We will remove such information from our systems as soon as reasonably practicable.

              <h6>e. What is Personal Data?</h6> As used in this Policy “Personal Data” has the meaning provided in the EU General Data Protection Regulation of 2018 (the “GDPR”), and includes any information which, either alone or combined with other information we hold, identifies an individual, such as name, mailing address, email address, IP address, and telephone number.<br /> By contrast, “Anonymous Data” means any data that, alone or combined with other information available to us or a third party, does not permit identification of an individual. <br />We collect both Personal Data and Anonymous Data as set forth below.

              <h6>f. Why Do We Need Your Personal Data?</h6>We need certain Personal Data in order to provide you with certain Services.<br /> You will be asked to provide this information — and must agree to this Policy and the Terms — in order to download and use the Apps.<br /> This consent, which you may withdraw at any time, provides us with the legal basis we need to process your Personal Data.<br /> If you do not agree to this Policy, you may not use our Services.

              <br /><br /><h4>2. PARTICULARLY IMPORTANT INFORMATION (EU USERS ONLY)</h4><br />
              <h6>a. Who We Are:</h6> For the purpose of the GDPR, the data controller of your Personal Data is GoldenApp Studio Inc SAS of Haryana, (India).<br/> You may contact us from our website
              <h6>b. Must Read Sections:</h6> Please carefully review the sections entitled “Data Security and International Transfer” and “Your Rights Regarding Personal Data.”

              <br /><br /><h4>3. HOW DOES GoldenApp Studio Inc OBTAIN DATA?</h4>
              <h5>Summary:</h5><br />

We get data that you provide (such as when you create an Account or pay for a Subscription), that others provide (when you are referred by a friend) or that we obtain automatically from your browser or through cookies.<br/> Personal Data we collect includes your email (used to create an Account) and certain billing information, although complete payment information is only stored by our payment processors.<br/> We do not and cannot know your Master Password and, because of that, we do not and cannot know what Secured Data you store on the Services.<br/> We use technology, including cookies, to collect anonymous data that we use to provide and improve the Services.
<br/>
We collect information in the following ways:<br/>
<h6>
                a. Information You Provide.</h6>

              • Registration Data.<br /> You must create an Account to use an App.<br /> To create an Account, you must provide an email address that will be used as your login.<br /> You may also choose to provide a phone number, though this is not required.<br /> The only Personal Data required to open a GoldenApp Studio Inc Free account is your email.<br /> We store registration data for so long as your Account is active.<br /> For paid Accounts, we collect the billing data specified below.<br /> Note that for GoldenApp Studio Inc Business Accounts, registration data includes the business name and mailing address, administrator contact information, and may include email addresses for the users of the Services.

              <br />• Billing Data.<br /> We use third party service providers (currently, Stripe and PayPal) to process payments made through the Site.<br /> We store name, address and, where applicable, the expiration information and last four digits of your credit card for tax compliance and user support purposes.<br />All other payment information (i.e., complete credit card information) is available only to our payment processors.<br /> We do not receive or store any billing data if you pay for an App through an App Store.
                                                                      
              <br />• Master Password.<br /> To create an Account, you must create a “Master Password,” which is the basis for the encryption key used to secure the information you store on the Apps.<br /> Each user (including those associated with a GoldenApp Studio Inc Business account) must create his or her own Master Password.<br /> GoldenApp Studio Inc’s patented “Zero-Knowledge Architecture” ensures that we do not know our users’ Master Passwords. <br />In addition, Apps do not store Master Passwords locally unless specifically directed by the user (by choosing “Remember Password” or the equivalent, which we offer as a convenience feature to our users). <br />Note that even if you select this option, you will have to re-enter the Master Password every fourteen days).
                                                        
              <br />• Secured Data.<br /> Our Apps let you manage digital identity data, including highly sensitive information like credit card numbers and site or application credentials.<br /> Everything you store on the Apps (collectively, “Secured Data”) is encrypted and stored locally on your device(s) using a random key generated from your Master Password.<br /> Secured Data of GoldenApp Studio Inc Premium users is also stored on GoldenApp Studio Inc’s servers so that it may by synced among such user’s authenticated devices running the Apps.<br /> Secured Data is encrypted at all times on GoldenApp Studio Inc servers and is not accessible to GoldenApp Studio Inc because it is encrypted with a key generated from the Master Password.
              
              <br />• Support and Correspondence.<br /> You may provide certain Personal Data in connection with user support and inquiries from our Site.<br /> User support histories are maintained for so long as the associated account remains active and a reasonable time thereafter.

              <br />• Feedback.<br /> If you provide us with Feedback, we will collect your e‑mail address as well as the content of your email in order to respond to you.<br /> We may use any Feedback without limitation as described in the Terms.

              <br />• Other Data. <br />We may also collect other types of information in the manner disclosed by us at the time such information is collected.

              <h6>b. Data Collected from You About Others.</h6> The Services let you invite others to try the Apps.<br /> If you use this feature (or if you are invited using this feature), GoldenApp Studio Inc will store the invitee’s email address and the message sent to him or her in order to follow up with the invitee (and, if applicable, credit the referrer with any referral bonus or equivalent).<br /> We will let the invitee know who referred him or her to GoldenApp Studio Inc, and provide the opportunity to request that his or her information be deleted from our systems.<br /> The referrer or invitee may email support@GoldenApp Studio Inc.com to request removal of this information.

              <h6>c. Data Collected by Technology.</h6>
              <br />
              • Device and Browser Data.<br /> We automatically log the following information about you and your computer or mobile device when you access the Services: operating system name and version, device identifier, location data for mobile devices, browser type, browser language, and IP address.<br /> Some of this data is collected using cookies, as explained below. This data is used to secure your Account, ensure the Services are presented in the correct language and optimized for your device, facilitate customer support, and for tax and compliance purposes. <br />This data is kept in our system for as long as your Account exists and a reasonable time thereafter.
              <br />
              • Usage Data.<br /> We collect data about the use of the Services (for example, tracking functions, use of features, and interactions with the Apps and the Site) in order to provide and improve the Services (“Usage Data”). Usage Data is kept logically separated from all Personal Data, and is Anonymous Data as defined above.<br /> We may use Usage Data for any lawful purpose.
              <br />
              • Aggregated Data.<br /> In addition to Usage Data, we may derive information about the use and users of our Services by aggregating data from large numbers of users (i.e., number of users within a particular jurisdiction).<br /> This “Aggregated Data,” like Usage Data, is Anonymous Data, and is primarily used to help analyze and improve the Services. <br />We may use Aggregated Data for any lawful purpose.

<h6>d. Cookies</h6>
              <br />
              i. We collect certain information using “cookies.”<br /> Cookies are small data files stored on the hard drive of your computer or mobile device by a website.<br /> We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them) to provide you with a more personal and interactive experience on the Services.
              <br />
              ii. We use two broad categories of cookies: <br />(1) first party cookies, which we serve directly to your device, and are only used by us, and <br />(2) third party cookies, which are served by service providers on our Services, and may be used by such service providers to recognize your computer or mobile device when it visits other websites.
              <br />
              iii. Cookies We Use<br />
              
Type of Cookie<br />

              Purpose<br />

              Essential Cookies<br />
              <br />
              These cookies are essential to the proper functioning of our Services (i.e., they allow you to log in to your account).<br /> Without these cookies, the Services will not work correctly or cannot be provided, and we only use these cookies to provide the Services.
              <br />
Functional Cookies
              <br />
              These cookies remember choices you make when you use the Services, such as your language preferences and which features of the Services you have activated. <br />These cookies provide you with a more personal experience and ensure you don’t have to re-enter your preferences each time you use the Services.
              <br />
Analytics Cookies
              <br />
              These cookies are used to collect information about traffic to our Site and Usage Data. <br />The information gathered does not identify any individual and does not include any Personal Data. The information is aggregated and anonymous. <br />We use this information to monitor the level and nature of activity on the Services and to improve them.
              <br />
We use Google Analytics and Heap for this purpose.
              <br />
Publisher Cookies
              <br />
              When we place advertisements on third party sites, we often include a cookie on a particular page of the Site that tracks what advertisement a user clicked on to come to the Site.<br /> The cookie is used to generate a unique identifier for the user so that we can properly track the performance of advertisements but does not include any Personal Data.
              <br />
Note that we do not allow the placement of advertisements on our Site or Services.
              <br />
              iv. Disabling Cookies.<br /> You can typically remove or reject cookies in your browser settings.<br /> To do this, follow the instructions provided by your browser (usually located within the “settings,” or “tools” facility).<br /> Many browsers are set to accept cookies until you change your settings. Rejecting cookies may impair (or prevent) the functioning of the Services.

              <h4>4. HOW DOES GoldenApp Studio Inc USE YOUR PERSONAL DATA?</h4><br/>
              <h6>Summary:</h6><br/>

              We use Personal Data to validate your Account, provide the Services, provide user support, and communicate with you.<br /> We do not perform any automated decision making or profiling with your Personal Data.
              <br />
              <br />a. General.<br /> GoldenApp Studio Inc uses Personal Data to provide the Services and respond to your requests, including to:
              <br />
• Establish, maintain, and secure your Account.
              <br />
• Identify you as a user and provide the Services you request.
              <br />
• Perform fraud detection and authentication.
              <br />
• Improve the Services and your interactions with them.
              <br />
• Send you administrative notifications, such as security or support and maintenance advisories. You will receive these notices even if you opt out of receiving marketing communications as set forth below.
              <br />
• Provide you with the correct interfaces and options required by the jurisdiction from which you are accessing the Services.
              <br />
• Respond to customer support inquiries and other requests.
              <br />
• Promote the Services or send you other GoldenApp Studio Inc marketing information. EU users must actively choose to receive marketing communications. Users elsewhere (and those in the EU who have previously opted in) may always elect to stop receiving such communications.
              <br />
b. Automated Decision Making and Profiling. We do not use your Personal Data for automated decision-making. However, we may do so in the future to comply with applicable law, in which case we will inform you of any such processing and provide you with an opportunity to object.
              <br />
              <h4>5. HOW DOES GoldenApp Studio Inc SHARE PERSONAL DATA?</h4><br/>
              <h6>Summary:</h6><br/>

              We never sell our users’ Personal Data.<br /> To provide the Services, we share Personal Data with service providers who are contractually obliged to comply with all applicable laws (i.e., GDPR) and who only have access to the Personal Data required for them to provide the relevant Services.<br /> Where you direct us to share Secured Data that contains Personal Data through the Services, we will do so. We may share Personal Data among our various affiliates, all of whom are bound by this Policy, and with an acquirer if GoldenApp Studio Inc is sold or merged.<br /> We have no way to access Secured Data. Finally, we can disclose Personal Data where required by law or where we believe it is necessary to protect our rights or those of our other users.

GoldenApp Studio Inc will never sell your Personal Data or use it except as stated in this Policy.<br /> We share your Personal Data in the following circumstances:<br />
              <br />
              • Third Parties You Designate.<br /> We may share Personal Data you store on the Services with third parties where you have provided your consent to do so (i.e., by using the Services’ “sharing” or “emergency contact” features). <br />While such data is transferred through the Services, we do not have access to it, as noted elsewhere in this Policy).<br />
              <br />
              • Service Providers.<br /> We provide Personal Data to third party service providers solely as required to provide the Services, create accounts, provide technical support, process payments, or enable communication between you and GoldenApp Studio Inc. We review the security and data privacy practices of all such service providers to ensure that they comply with all applicable laws and this Policy. We have Data Processing Addenda in place with all service providers who access Personal Data of EU users. Secured Data stored by our data hosting provider is encrypted at all times as described above.
              <br />
              • Affiliates. <br />This Policy applies to all entities that are owned by, or under common control with, GoldenApp Studio Inc, Inc. (“Affiliates”). We share Personal Data among Affiliates as required to provide the Services and respond to requests. Certain Affiliates are located in the United States, where privacy and related laws are not deemed adequate by European regulators to hold and protect the Personal Data of EU residents. To offer the levels of protection required by European law, we have Data Processing Addenda or equivalent documents in in place among our EU and US Affiliates, in addition to the other measures indicated below.
              <br />
              • Corporate Restructuring.<br /> If GoldenApp Studio Inc or its business or assets are acquired by, or merged into, another company, that company will possess any Personal Data in our possession at such time, and will assume our rights and obligations under this Policy. Accordingly, we may share Personal Data in connection with or during negotiation of any such transaction. Personal Data and other information may also be transferred as a business asset in the event of GoldenApp Studio Inc’s insolvency, bankruptcy, or receivership.
              <br />
              • Other Disclosures.<br /> Regardless of your choices regarding Personal Data, GoldenApp Studio Inc may disclose your Personal Data (a) where required to comply with applicable laws or governmental orders; (b) if we believe in good faith that it is necessary to protect the rights or property of GoldenApp Studio Inc or other users of the Services, including in investigating any violation or potential violation of the law, this Policy, or our Terms.

              <h4>6. DATA SECURITY AND INTERNATIONAL TRANSFER</h4><br />
            <h6>  Summary:</h6>
              <br />
We strive to protect the safety and security of all data in our possession, including Personal Data, through a variety of means, and we continually work to improve and update these practices. However, we cannot and do not guarantee the security of Personal Data we process. As noted elsewhere in this Policy, Personal Data may be transferred to jurisdictions with less strict privacy and related regulations than those in your home country, including the U.S., but we employ technical and other measures that comply with EU regulations to protect Personal Data when processed in the U.S.
              <br />
a. We use robust physical, organizational, technical, and administrative measures to safeguard Personal Data, and we regularly re-assess and revise our policies and practices to improve security. While we go to great lengths to protect your Personal Data, no method of data transmission or storage is totally secure; therefore, we cannot guarantee the security of Personal Data in our control. If you believe that any of your Personal Data may have been compromised by us or the use of the Services, please contact us immediately at support@GoldenApp Studio Inc.com.
              <br />
b. Your information, including Personal Data that we collect from you, may be transferred to, stored at and processed by us, our Affiliates and service providers outside your home country, including in the United States, where data protection and privacy regulations may not offer the same protections as in other parts of the world. When we do so, we will take the steps described in this Policy, including Sections 5 and 10, which are designed to ensure that all Personal Data we or our vendors process (regardless of where it originates) is handled as required by the EU. By using the Services, you agree to the transfer, storing or processing of your data in accordance with this Policy.
              <br />
              7. HOW CAN YOU CONTROL YOUR DATA?<br />
              Summary:<br />
              <br />
              You can edit your Personal Data via the “Settings” sections of the Apps. <br />If you currently receive marketing emails and no longer wish to do so, you may unsubscribe from within any such email. Even if you do so, we will still send you operational and transactional emails (i.e., renewal notices). Uninstalling Apps from your devices will remove all data associated with the Apps.
              <br />
              a. Changing Your Information.<br /> You can access and modify Personal Data associated with your Account through the “Settings” or equivalent portions of the Apps. Contact us at support@GoldenApp Studio Inc.com if you need assistance with this.
              <br />
              b. Email Communications. <br />With your consent, we will periodically send you emails promoting the use of the Services, including tips on using the Apps. You can opt-out of these emails by following the unsubscribe instructions included in each email. You may also request removal by writing support@GoldenApp Studio Inc.com. Note that unsubscribing from marketing communications will not affect operational and transactional communications, including breach notices from within the Apps, renewal emails, etc.
              <br />
              c. Applications.<br /> You can stop all collection of information by an App by uninstalling that App. You may use the standard uninstall processes available as part of your desktop or mobile device or via the mobile application marketplace or network.

              <h4>9. CONTACT INFORMATION; COMPLAINTS</h4>
If you have questions, concerns, or complaints about this Policy or our data collection or processing practices, or if you want to report any security violations, please contact us at our website or by writing the address below:

GoldenApp Studio Inc.
              Bhiwani, Haryana(India)

</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
