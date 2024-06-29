"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6431c412-df1a-c37b-1f7d-fd35acbe90b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6431c412-df1a-c37b-1f7d-fd35acbe90b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647499708405},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6431c412-df1a-c37b-1f7d-fd35acbe90b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6431c412-df1a-c37b-1f7d-fd35acbe90b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647499708405},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a40b7f40-7e63-a2e7-ca50-02ea15aa65e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a40b7f40-7e63-a2e7-ca50-02ea15aa65e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647935057061},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a40b7f40-7e63-a2e7-ca50-02ea15aa65e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a40b7f40-7e63-a2e7-ca50-02ea15aa65e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647935057061},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bec90d8-9408-a4a9-7049-119dbbabea31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bec90d8-9408-a4a9-7049-119dbbabea31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647935912822},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5bec90d8-9408-a4a9-7049-119dbbabea31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bec90d8-9408-a4a9-7049-119dbbabea31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647935912823},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c67|86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c67|86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647936012000},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c67|86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c67|86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647936012000},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c67|30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c67|30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647936013551},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c67|30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c67|30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647936013551},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c67|c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c67|c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647936014551},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c67|c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c67|c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647936014551},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647949398160},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c5cd8228-8cea-5ccd-378e-d45d8de81eb5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647949398161},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647949422039},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"30de980f-723c-69ba-dfb9-81b31fe32d02","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647949422040},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647949441048},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"86ff6393-9542-f6b7-07fd-f5e6d3e5719f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647949441075}},"actionLists":{"a-3":{"id":"a-3","title":"Nav Icon [Open]","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-button-close","selectorGuids":["c6b449b3-6803-499a-d331-50d7e57f6c39"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-button-open","selectorGuids":["b1c4e9c8-3564-bbe5-058f-b0c305e3e9ad"]},"value":0,"unit":""}},{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":900,"target":{"useEventTarget":"CHILDREN","selector":".nav-button-close","selectorGuids":["c6b449b3-6803-499a-d331-50d7e57f6c39"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1647499724493},"a-4":{"id":"a-4","title":"Nav Icon [Closed]","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-button-open","selectorGuids":["b1c4e9c8-3564-bbe5-058f-b0c305e3e9ad"]},"value":1,"unit":""}},{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-button-close","selectorGuids":["c6b449b3-6803-499a-d331-50d7e57f6c39"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647499818749},"a-9":{"id":"a-9","title":"Nav Link Icon Hover [In]","actionItemGroups":[{"actionItems":[{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["45a54a48-2663-e414-35df-38155b5c2a50"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["45a54a48-2663-e414-35df-38155b5c2a50"]},"value":1,"unit":""}},{"id":"a-9-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["45a54a48-2663-e414-35df-38155b5c2a50"]},"xValue":5,"yValue":-5,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1647935061722},"a-10":{"id":"a-10","title":"Nav Link Icon Hover [Out]","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["45a54a48-2663-e414-35df-38155b5c2a50"]},"value":0,"unit":""}},{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["45a54a48-2663-e414-35df-38155b5c2a50"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647935123226}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="navbar-wrap" tag="div">
      <_Builtin.NavbarWrapper
        className="navbar"
        data-w-id="6431c412-df1a-c37b-1f7d-fd35acbe90b1"
        tag="div"
        config={{
          animation: "default",
          collapse: "all",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block className="navbar-vertical" tag="div">
          <_Builtin.Block className="nav-social" tag="div">
            <_Builtin.Link
              className="nav-vertical-social-item"
              button={false}
              block="inline"
              options={{
                href: "https://facebook.com/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="nav-social-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c4f_facebook-f.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="nav-vertical-social-item"
              button={false}
              block="inline"
              options={{
                href: "https://www.instagram.com/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="nav-social-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c4c_instagram-brands.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="nav-vertical-social-item"
              button={false}
              block="inline"
              options={{
                href: "https://twitter.com/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="nav-social-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c4d_twitter.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="nav-vertical-social-item"
              button={false}
              block="inline"
              options={{
                href: "https://www.linkedin.com/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className="nav-social-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c4e_linkedin.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Section
          className="navbar-horizontal"
          grid={{
            type: "section",
          }}
          tag="div"
        >
          <_Builtin.NavbarButton className="nav-button" tag="div">
            <_Builtin.Block className="nav-button-wrap" tag="div">
              <_Builtin.Image
                className="nav-button-close"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c59_menu-icon-closed.svg"
              />
              <_Builtin.Image
                className="nav-button-open"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c49_menu-icon.svg"
              />
            </_Builtin.Block>
          </_Builtin.NavbarButton>
          <_Builtin.NavbarMenu
            className="nav-content-wrap"
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block className="nav-content" tag="div">
              <_Builtin.Block className="nav-links" tag="div">
                <_Builtin.Link
                  className="nav-link"
                  data-w-id="5bec90d8-9408-a4a9-7049-119dbbabea31"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Home"}</_Builtin.Block>
                  <_Builtin.Image
                    className="nav-icon"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link"
                  data-w-id="a40b7f40-7e63-a2e7-ca50-02ea15aa65e5"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
                  <_Builtin.Image
                    className="nav-icon"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link"
                  data-w-id="c5cd8228-8cea-5ccd-378e-d45d8de81eb5"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Case Study"}</_Builtin.Block>
                  <_Builtin.Image
                    className="nav-icon"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link"
                  data-w-id="30de980f-723c-69ba-dfb9-81b31fe32d02"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
                  <_Builtin.Image
                    className="nav-icon"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link"
                  data-w-id="86ff6393-9542-f6b7-07fd-f5e6d3e5719f"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
                  <_Builtin.Image
                    className="nav-icon"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="nav-links-bottom" tag="div">
                <_Builtin.Link
                  className="nav-link-small"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Style Guide"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link-small"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Instructions"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link-small"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Changelog"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className="nav-link-small"
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Licenses"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarBrand
            className="brand"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className="brand-image"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c8b_motion.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.Block className="nav-info" tag="div">
            <_Builtin.Link
              className="nav-call"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"+2594-366056"}
            </_Builtin.Link>
            <_Builtin.Link
              className="nav-email"
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"hello@webestica.com"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Section>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
