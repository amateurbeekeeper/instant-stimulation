"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterMinimal({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="footer-minimal"
      tag="footer"
      grid={{
        type: "section",
      }}
      id="footer"
    >
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
