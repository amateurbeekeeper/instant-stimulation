"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarTransparent({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className="navbar-transparent"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarBrand
        options={{
          href: "#",
        }}
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c51_motion-icon.svg"
        />
      </_Builtin.NavbarBrand>
      <_Builtin.NavbarMenu className="nav-menu" tag="nav" role="navigation">
        <_Builtin.NavbarLink
          className="nav-link small"
          options={{
            href: "#",
          }}
        >
          {"Home"}
        </_Builtin.NavbarLink>
        <_Builtin.NavbarLink
          className="nav-link small"
          options={{
            href: "#",
          }}
        >
          {"About"}
        </_Builtin.NavbarLink>
        <_Builtin.NavbarLink
          className="nav-link small"
          options={{
            href: "#",
          }}
        >
          {"Case Study"}
        </_Builtin.NavbarLink>
        <_Builtin.NavbarLink
          className="nav-link small"
          options={{
            href: "#",
          }}
        >
          {"Contact"}
        </_Builtin.NavbarLink>
      </_Builtin.NavbarMenu>
      <_Builtin.NavbarButton className="menu-button" tag="div">
        <_Builtin.Icon
          widget={{
            type: "icon",
            icon: "nav-menu",
          }}
        />
      </_Builtin.NavbarButton>
    </_Component>
  );
}
