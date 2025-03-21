import React from "react";
import { Accordion } from "react-bootstrap";
import "./../Style/base.css";

const Help = () => {
  return (
    <div className="container1">
      <div className="header-section">
        <h2>Help & Support</h2>
        <p>We are here to assist you with all your queries.</p>
      </div>

      <div className="container">
        <h3>Partner Onboarding</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I register my restaurant?</Accordion.Header>
            <Accordion.Body>
              To register your restaurant, visit our partner portal and fill in the required details. Our team will review your application and get back to you.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What documents are required for registration?</Accordion.Header>
            <Accordion.Body>
              You need an FSSAI license, GST certificate, PAN card, and a valid bank account. Additional documents may be requested based on your location.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I deactivate my restaurant listing temporarily?</Accordion.Header>
            <Accordion.Body>
              Yes, you can temporarily deactivate your listing through your partner dashboard settings.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How long does it take to get approval?</Accordion.Header>
            <Accordion.Body>
              Typically, it takes 3-5 business days after document verification. You will receive a confirmation email once your listing is live.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Is there an onboarding fee?</Accordion.Header>
            <Accordion.Body>
              Yes, there is a one-time onboarding fee, which varies depending on your restaurant's location and size. Contact our support team for more details.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>How do I update my restaurant menu?</Accordion.Header>
            <Accordion.Body>
              You can update your menu by logging into the partner portal and navigating to the "Menu" section.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>How do I handle customer complaints?</Accordion.Header>
            <Accordion.Body>
              Customer complaints can be managed via the partner portal under the "Support" section. You can also contact our helpline for urgent issues.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Help;
