"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterContactForm({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="footer"
      tag="footer"
      grid={{
        type: "section",
      }}
      id="footer"
    >
      <_Builtin.Block className="grid-footer" tag="div">
        <_Builtin.Block
          className="footer-about"
          id="w-node-_58cfbb65-f50b-e706-9576-afb16c95d88e-6c95d88c"
          tag="div"
        >
          <_Builtin.Link
            className="footer-logo-link"
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className="footer-image"
              width="auto"
              height="auto"
              loading="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c51_motion-icon.svg"
            />
          </_Builtin.Link>
          <_Builtin.Paragraph className="footer-about-content">
            {"Chicago HQ Estica Cop. Macomb, MI 48042"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block className="footer-social" tag="div">
          <_Builtin.List
            className="footer-social-list"
            tag="ul"
            unstyled={true}
          >
            <_Builtin.ListItem
              className="footer-social-item"
              list={{
                type: "",
              }}
            >
              <_Builtin.Link
                className="footer-social-link"
                button={false}
                block=""
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"Instagram"}
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className="footer-social-item"
              list={{
                type: "",
              }}
            >
              <_Builtin.Link
                className="footer-social-link"
                button={false}
                block=""
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"Facebook"}
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className="footer-social-item"
              list={{
                type: "",
              }}
            >
              <_Builtin.Link
                className="footer-social-link"
                button={false}
                block=""
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"Twitter"}
              </_Builtin.Link>
            </_Builtin.ListItem>
          </_Builtin.List>
        </_Builtin.Block>
        <_Builtin.Block className="footer-contact-form" tag="div">
          <_Builtin.FormWrapper className="contact-form-wrap">
            <_Builtin.FormForm
              className="form"
              name="wf-form-Contact-Form"
              data-name="Contact Form"
              method="get"
              id="wf-form-Contact-Form"
            >
              <_Builtin.Block className="input-group" tag="div">
                <_Builtin.FormBlockLabel className="field-label" htmlFor="Name">
                  {"Name*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="form-input"
                  autoFocus={false}
                  maxLength={256}
                  name="Name"
                  data-name="Name"
                  type="text"
                  disabled={false}
                  required={true}
                  id="Name"
                />
              </_Builtin.Block>
              <_Builtin.Block className="input-group" tag="div">
                <_Builtin.FormBlockLabel
                  className="field-label"
                  htmlFor="Email"
                >
                  {"Email*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className="form-input"
                  autoFocus={false}
                  maxLength={256}
                  name="Email"
                  data-name="Email"
                  type="email"
                  disabled={false}
                  required={true}
                  id="Email"
                />
              </_Builtin.Block>
              <_Builtin.Block className="input-group" tag="div">
                <_Builtin.FormTextarea
                  className="form-input form-textarea"
                  placeholder="How can I help you?"
                  maxLength={5000}
                  name="Message"
                  data-name="Message"
                  required={false}
                  autoFocus={false}
                  id="Message"
                />
              </_Builtin.Block>
              <_Builtin.Block className="form-button" tag="div">
                <_Builtin.FormButton
                  className="button"
                  type="submit"
                  value="Send Message"
                  data-wait="Please wait..."
                />
              </_Builtin.Block>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage className="success-message">
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage className="error-message">
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Grid className="grid-footer-bottom" tag="div">
        <_Builtin.Paragraph className="copyright">
          {"Designed by "}
          <_Builtin.Link
            button={false}
            block=""
            options={{
              href: "#",
              target: "_blank",
              preload: "none",
            }}
          >
            {"Webestica"}
          </_Builtin.Link>
          {" - Powered by "}
          <_Builtin.Link
            button={false}
            block=""
            options={{
              href: "#",
              target: "_blank",
            }}
          >
            {"Webflow"}
          </_Builtin.Link>
        </_Builtin.Paragraph>
        <_Builtin.List className="footer-nav" tag="ul" unstyled={true}>
          <_Builtin.ListItem
            className="footer-item"
            list={{
              type: "",
            }}
          >
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Instructions"}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem
            className="footer-item"
            list={{
              type: "",
            }}
          >
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Style Guide"}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem
            className="footer-item"
            list={{
              type: "",
            }}
          >
            <_Builtin.Link
              className="footer-link"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Licenses"}
            </_Builtin.Link>
          </_Builtin.ListItem>
        </_Builtin.List>
      </_Builtin.Grid>
    </_Component>
  );
}
