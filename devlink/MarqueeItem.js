"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1647404504393}},"actionLists":{"a-2":{"id":"a-2","title":"Marquee Text","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":30000,"target":{"selector":".marquee-items","selectorGuids":["340eefba-7e9e-f537-6270-4a7b1a64939d"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".marquee-items","selectorGuids":["340eefba-7e9e-f537-6270-4a7b1a64939d"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647404516872}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MarqueeItem({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);
  return (
    <_Component className="marquee-items" tag="div">
      <_Builtin.Block className="marquee-item" tag="div">
        <_Builtin.Block className="marquee-dot" tag="div" />
        <_Builtin.Block className="marquee-heading" tag="div">
          {"100+ new clients every month"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="marquee-item" tag="div">
        <_Builtin.Block className="marquee-dot" tag="div" />
        <_Builtin.Block className="marquee-heading" tag="div">
          {"13+ successful years"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="marquee-item" tag="div">
        <_Builtin.Block className="marquee-dot" tag="div" />
        <_Builtin.Block className="marquee-heading" tag="div">
          {"3 clinics around the nation"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="marquee-item" tag="div">
        <_Builtin.Block className="marquee-dot" tag="div" />
        <_Builtin.Block className="marquee-heading" tag="div">
          {"15+ friendly staff"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
