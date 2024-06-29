"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BodyBorder({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="body-border" tag="div">
      <_Builtin.Block className="body-border-left" tag="div" />
      <_Builtin.Block className="body-border-right" tag="div" />
      <_Builtin.Block className="body-border-bottom" tag="div" />
    </_Component>
  );
}
