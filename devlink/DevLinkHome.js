"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { MarqueeItem } from "./MarqueeItem";
import { FooterContactForm } from "./FooterContactForm";

const _interactionsData = JSON.parse(
  '{"events":{"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647504591300},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647504591301},"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647509448142},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647509448142},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647510142629},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647510142630},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647510162092},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647510162093},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647510180077},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647510180077},"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e94d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e94d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648020717542},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e94d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e94d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648020717542},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|24fc1cf5-d407-d571-a1ac-c96870d80e01","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|24fc1cf5-d407-d571-a1ac-c96870d80e01","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648034791320},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|24fc1cf5-d407-d571-a1ac-c96870d80e01","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|24fc1cf5-d407-d571-a1ac-c96870d80e01","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648034791320},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|f83adeb1-4511-f45c-bc63-0fb1bc721517","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|f83adeb1-4511-f45c-bc63-0fb1bc721517","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648034919726},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|f83adeb1-4511-f45c-bc63-0fb1bc721517","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|f83adeb1-4511-f45c-bc63-0fb1bc721517","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648034919727},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|121af084-e29d-492f-4107-e87a04b92a50","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|121af084-e29d-492f-4107-e87a04b92a50","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648035019686},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|121af084-e29d-492f-4107-e87a04b92a50","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|121af084-e29d-492f-4107-e87a04b92a50","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648035019687},"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|43a690fc-4ac8-c681-cd79-47417cc0428f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|43a690fc-4ac8-c681-cd79-47417cc0428f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648035050454},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c97|43a690fc-4ac8-c681-cd79-47417cc0428f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c97|43a690fc-4ac8-c681-cd79-47417cc0428f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648035050454},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c92|4492deca-63c2-61f6-5588-27545a7c59f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c92|4492deca-63c2-61f6-5588-27545a7c59f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648035200478},"e-42":{"id":"e-42","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c92|4492deca-63c2-61f6-5588-27545a7c59f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c92|4492deca-63c2-61f6-5588-27545a7c59f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648035200479},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae9c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae9c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-48":{"id":"e-48","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae9c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975ae9c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-50":{"id":"e-50","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-49"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-52":{"id":"e-52","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c9e|cc2485a9-e8c1-cd46-d95f-2e19c975aea9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648273493173},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649225634180},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8c3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8c3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649225634180},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649225636041},"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e8bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649225636041},"e-62":{"id":"e-62","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-16","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e898","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c9f77947-7fdf-0fb0-bc3a-207ef1d2e898","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-16-p","smoothing":90,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1649225643194},"e-73":{"id":"e-73","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c95|75748abc-dd3a-2170-e2d5-9711142a8b40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c95|75748abc-dd3a-2170-e2d5-9711142a8b40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649241424915},"e-74":{"id":"e-74","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66806745978c562c1ca33c95|75748abc-dd3a-2170-e2d5-9711142a8b40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66806745978c562c1ca33c95|75748abc-dd3a-2170-e2d5-9711142a8b40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1649241424916}},"actionLists":{"a-5":{"id":"a-5","title":"Service Icon [In]","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-arrow","selectorGuids":["1e7161e1-3c88-f25a-1460-ea260bbb3995"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647504596226},"a-6":{"id":"a-6","title":"Service Icon [Out]","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".service-arrow","selectorGuids":["1e7161e1-3c88-f25a-1460-ea260bbb3995"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647504727293},"a-7":{"id":"a-7","title":"Button Link Icon [In]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"yValue":null,"zValue":45,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"xValue":5,"yValue":2,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1647509466455},"a-8":{"id":"a-8","title":"Button Link Icon [Out]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647509524310},"a-11":{"id":"a-11","title":"Blog Button Hover [In]","actionItemGroups":[{"actionItems":[{"id":"a-11-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"xValue":null,"yValue":null,"zValue":45,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"yValue":-4,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1648020722277},"a-12":{"id":"a-12","title":"Blog Button Hover [Out]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-icon","selectorGuids":["b709a617-d617-7648-3a98-8f10dadcd049"]},"xValue":null,"yValue":null,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1648021088247},"a-16":{"id":"a-16","title":"Service Scroll","continuousParameterGroups":[{"id":"a-16-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":28,"actionItems":[{"id":"a-16-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item","selectorGuids":["969d7100-3193-28f5-3568-320a9fa04b73"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":50,"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".service-item","selectorGuids":["969d7100-3193-28f5-3568-320a9fa04b73"]},"xValue":-58,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1649224087667}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DevLinkHome({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="page-wrap" tag="div">
      <_Builtin.Section
        className="hero-split-section"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Block className="grid-hero-split" tag="div">
          <_Builtin.Block
            className="hero-split-content"
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e879-f1d2e876"
            tag="div"
          >
            <_Builtin.Heading className="hero-split-heading" tag="h1">
              {"#Livelighter"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className="hero-split-description">
              {
                "A theory of therapy performs as a roadmap for psychologists: It instructs them through the process of experiencing clients and their health problems and developing solutions."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className="button"
              button={true}
              block=""
              options={{
                href: "#section-services",
              }}
            >
              <_Builtin.Span className="button-text">
                {"Our Services"}
              </_Builtin.Span>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className="hero-split-image"
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e881-f1d2e876"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className="approach-section"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Grid className="grid-approach" tag="div">
          <_Builtin.Block className="approach-title-wrap" tag="div">
            <_Builtin.Heading className="approach-title" tag="h2">
              {"Our approach"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className="grid-approach-content"
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e887-f1d2e876"
            tag="div"
          >
            <_Builtin.Block
              className="approach-content"
              id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e888-f1d2e876"
              tag="div"
            >
              <_Builtin.Heading tag="h3">
                {"Focusing on the right things at the right time"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="approach-description">
                {
                  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                }
              </_Builtin.Paragraph>
              <_Builtin.NotSupported _atom="LightboxWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className="approach-statistic"
              id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e891-f1d2e876"
              tag="div"
            >
              <_Builtin.Heading tag="h2">
                {"13*"}
                <br />
                {"Years"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Section>
      <_Builtin.Section
        className="service-section"
        data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e898"
        grid={{
          type: "section",
        }}
        tag="div"
        id="section-services"
      >
        <_Builtin.Block className="service-section-title" tag="div">
          <_Builtin.Heading tag="h2">{"Therapy Services"}</_Builtin.Heading>
          <_Builtin.Link
            className="button-link"
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Make an Appointment"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="service-wrap" tag="div">
          <_Builtin.Block className="service-items" tag="div">
            <_Builtin.Link
              className="service-item"
              id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a0-f1d2e876"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a0"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="service-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c61_icon-01.svg"
              />
              <_Builtin.Heading className="service-title" tag="h4">
                {"Physiotherapy Treatment"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="service-content">
                {
                  "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                }
              </_Builtin.Paragraph>
              <_Builtin.Image
                className="service-arrow"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="service-item two"
              id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a7-f1d2e876"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8a7"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="service-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c76_icon-05.svg"
              />
              <_Builtin.Heading className="service-title" tag="h4">
                {"Spinal Decompression"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="service-content">
                {
                  "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
                }
              </_Builtin.Paragraph>
              <_Builtin.Image
                className="service-arrow"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="service-item three"
              id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8ae-f1d2e876"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8ae"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="service-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c77_icon-10.svg"
              />
              <_Builtin.Heading className="service-title" tag="h4">
                {"Acupuncture Treatment"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="service-content">
                {
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at."
                }
              </_Builtin.Paragraph>
              <_Builtin.Image
                className="service-arrow"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="service-item four"
              id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8b5-f1d2e876"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8b5"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="service-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c6b_icon-04.svg"
              />
              <_Builtin.Heading className="service-title" tag="h4">
                {"In-Home Physiotherapy"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="service-content">
                {
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."
                }
              </_Builtin.Paragraph>
              <_Builtin.Image
                className="service-arrow"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="service-item five"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8bc"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="service-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c78_icon-07.svg"
              />
              <_Builtin.Heading className="service-title" tag="h4">
                {"Rehabilitation Exercises"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="service-content">
                {
                  "Literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-sydney college in virginia."
                }
              </_Builtin.Paragraph>
              <_Builtin.Image
                className="service-arrow"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className="service-item six"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8c3"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className="service-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c84_icon-08.svg"
              />
              <_Builtin.Heading className="service-title" tag="h4">
                {"Massage Therapy"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="service-content">
                {
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                }
              </_Builtin.Paragraph>
              <_Builtin.Image
                className="service-arrow"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className="marquee-section"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Block className="marquee-wrap" tag="div">
          <MarqueeItem />
          <MarqueeItem />
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className="result-section"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Grid className="grid-result" tag="div">
          <_Builtin.Block
            className="result-content-wrap"
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d0-f1d2e876"
            tag="div"
          >
            <_Builtin.Heading tag="h2">{"Proven Results"}</_Builtin.Heading>
            <_Builtin.Paragraph className="result-content">
              {
                "Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className="button-link-icon"
              data-w-id="c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d5"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"View Case Studies"}</_Builtin.Block>
              <_Builtin.Image
                className="button-icon"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c48_arrow.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className="result-image-wrap"
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8d9-f1d2e876"
            tag="div"
          >
            <_Builtin.Image
              className="result-image"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c5f_client-01.jpg"
            />
            <_Builtin.Image
              className="result-image-round"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/66806745978c562c1ca33c01/66806745978c562c1ca33c5d_client-02.jpg"
            />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Section>
      <_Builtin.Section
        className="who-we-are-section section-spacing"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Grid className="grid-who-we-are" tag="div">
          <_Builtin.Block
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8de-f1d2e876"
            tag="div"
          >
            <_Builtin.Heading tag="h2">{"Who are we?"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {
                "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            id="w-node-c9f77947-7fdf-0fb0-bc3a-207ef1d2e8e3-f1d2e876"
            tag="div"
          >
            <_Builtin.Heading tag="h3">{"Our Mission"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {
                "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
              }
            </_Builtin.Paragraph>
            <_Builtin.Block
              className="horizontal-line spacing-small"
              tag="div"
            />
            <_Builtin.Heading tag="h3">{"About team"}</_Builtin.Heading>
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Section>
      <_Builtin.Section
        className="video-section"
        grid={{
          type: "section",
        }}
        tag="div"
      />
      <_Builtin.Section
        className="blog-section section-spacing"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Grid className="grid-blog" tag="div">
          <_Builtin.Heading className="text-white" tag="h2">
            {"In the news"}
          </_Builtin.Heading>
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Grid>
      </_Builtin.Section>
      <FooterContactForm />
    </_Component>
  );
}
