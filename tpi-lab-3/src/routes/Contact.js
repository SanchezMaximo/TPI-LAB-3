import React from "react";
import ContactPage from "../components/Contact/ContactPage";
import ContactBody from "../components/Contact/ContactBody";

const Contact = () => {
  return (
    <div>
      <ContactPage
        ContactPageMid="ContactPageMid"
        imgClass="imgClass"
        contactImg="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        title="Shop"
      />
      <ContactBody />
    </div>
  );
};

export default Contact;
