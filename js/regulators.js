import { getUnitConfiguration, pipeInternalDiameters } from "./fluids.js";

export const regulatorDatabase = [
  {
    "name": "SGRS08",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 1.95,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": 5.36,
    "kr": 32.39,
    "cv0": -0.0207,
    "cv1": 39.3,
    "cv2": -186,
    "xpopMax": 0.079,
    "cvOut": 2.4,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 2,
    "lookupSource": "SGRS08",
    "speLookupSource": "SGRS08",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGRS12",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": 5.36,
    "kr": 32.39,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 4.82,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 3,
    "lookupSource": "SGRS12",
    "speLookupSource": "SGRS12",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGRS16",
    "inletMax": 413,
    "outletMax": 248,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 70,
    "kp": 9.75,
    "kr": 81,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 0,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 4,
    "lookupSource": "SGRS16",
    "speLookupSource": "SGRS16",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGRS24",
    "inletMax": 413,
    "outletMax": 248,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 70,
    "kp": 21,
    "kr": 81,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 34,
    "domeDeltaConst": 0,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 5,
    "lookupSource": "SGRS24",
    "speLookupSource": "SGRS24",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHRS08",
    "inletMax": 17.2,
    "outletMax": 3.3,
    "cv": 1.95,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 150,
    "kp": 5.36,
    "kr": 32,
    "cv0": -0.0207,
    "cv1": 39.3,
    "cv2": -186,
    "xpopMax": 0.079,
    "cvOut": 2.4,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 2,
    "lookupSource": "SHRS08",
    "speLookupSource": "SHRS08",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHRS12",
    "inletMax": 17.2,
    "outletMax": 3.3,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 150,
    "kp": 5.36,
    "kr": 32,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 4.82,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 3,
    "lookupSource": "SHRS12",
    "speLookupSource": "SHRS12",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHRS16",
    "inletMax": 17.2,
    "outletMax": 3.3,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 150,
    "kp": 9.75,
    "kr": 43,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 0,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 4,
    "lookupSource": "SHRS16",
    "speLookupSource": "SHRS16",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHRS24",
    "inletMax": 17.2,
    "outletMax": 3.3,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 150,
    "kp": 21,
    "kr": 43,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 22.4,
    "domeDeltaConst": 0,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 0,
    "category": "Pressure Reducing Spring",
    "boreColumn": 5,
    "lookupSource": "SHRS24",
    "speLookupSource": "SHRS24",
    "isBackPressure": false,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGRD12",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": 5.36,
    "kr": 0,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 4.82,
    "domeDeltaConst": 1,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 3,
    "lookupSource": "SGRS12",
    "speLookupSource": "SGRD12",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SGRD16",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 70,
    "kp": 9.75,
    "kr": 0,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 1,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 4,
    "lookupSource": "SGRS16",
    "speLookupSource": "SGRD16",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SGRD24",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 70,
    "kp": 21,
    "kr": 0,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 34,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 5,
    "lookupSource": "SGRS24",
    "speLookupSource": "SGRD24",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "RD20",
    "inletMax": 400,
    "outletMax": 200,
    "cv": 13,
    "dpop": 24,
    "dseat": 25,
    "dd": 97.5,
    "kp": 27,
    "kr": 0,
    "cv0": 0,
    "cv1": 70,
    "cv2": 0,
    "xpopMax": 0.251,
    "cvOut": 37,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 6,
    "lookupSource": "RD20",
    "speLookupSource": "RD20",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "RD25",
    "inletMax": 280,
    "outletMax": 200,
    "cv": 21,
    "dpop": 31,
    "dseat": 32,
    "dd": 97.5,
    "kp": 17,
    "kr": 0,
    "cv0": 0,
    "cv1": 68,
    "cv2": 0,
    "xpopMax": 0.356,
    "cvOut": 90,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 7,
    "lookupSource": "RD25",
    "speLookupSource": "RD25",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "RD30",
    "inletMax": 280,
    "outletMax": 200,
    "cv": 36,
    "dpop": 39.9,
    "dseat": 42,
    "dd": 120,
    "kp": 17,
    "kr": 0,
    "cv0": 0,
    "cv1": 100,
    "cv2": 0,
    "xpopMax": 0.421,
    "cvOut": 65,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 8,
    "lookupSource": "RD30",
    "speLookupSource": "RD30",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "RD40",
    "inletMax": 280,
    "outletMax": 200,
    "cv": 73,
    "dpop": 58.85,
    "dseat": 60,
    "dd": 120,
    "kp": 8,
    "kr": 0,
    "cv0": 0,
    "cv1": 135,
    "cv2": 0,
    "xpopMax": 0.421,
    "cvOut": 100,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 5,
    "category": "Pressure Reducing Dome",
    "boreColumn": 9,
    "lookupSource": "RD40",
    "speLookupSource": "RD40",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SHRD12",
    "inletMax": 17.2,
    "outletMax": 17.2,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 150,
    "kp": 5.36,
    "kr": 0,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 4.82,
    "domeDeltaConst": 1,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 4.65,
    "category": "Pressure Reducing Dome",
    "boreColumn": 3,
    "lookupSource": "SHRS12",
    "speLookupSource": "SHRD12",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SHRD16",
    "inletMax": 17.2,
    "outletMax": 17.2,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 150,
    "kp": 9.75,
    "kr": 0,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 1,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 4.65,
    "category": "Pressure Reducing Dome",
    "boreColumn": 4,
    "lookupSource": "SHRS16",
    "speLookupSource": "SHRD16",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SHRD24",
    "inletMax": 17.2,
    "outletMax": 17.2,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 150,
    "kp": 21,
    "kr": 0,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 22.4,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 4.65,
    "category": "Pressure Reducing Dome",
    "boreColumn": 5,
    "lookupSource": "SHRS24",
    "speLookupSource": "SHRD24",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SGRA08",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 1.95,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": 5.36,
    "kr": 0,
    "cv0": -0.0207,
    "cv1": 39.3,
    "cv2": -186,
    "xpopMax": 0.079,
    "cvOut": 2.4,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Pressure Reducing Air-Loaded",
    "boreColumn": 2,
    "lookupSource": "SGRA08",
    "speLookupSource": "SGRS08",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": false,
    "isAirLoaded": true
  },
  {
    "name": "SGRA12",
    "inletMax": 413,
    "outletMax": 414,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": 5.36,
    "kr": 0,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 4.82,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Pressure Reducing Air-Loaded",
    "boreColumn": 3,
    "lookupSource": "SGRA12",
    "speLookupSource": "SGRS12",
    "isBackPressure": false,
    "isSpring": false,
    "isDome": false,
    "isAirLoaded": true
  },
  {
    "name": "SGBS08",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 1.95,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0207,
    "cv1": 39.3,
    "cv2": -186,
    "xpopMax": 0.079,
    "cvOut": 2.8,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 2,
    "lookupSource": "SGBS08",
    "speLookupSource": "SGBS08",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGBS12",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 3,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 3,
    "lookupSource": "SGBS12",
    "speLookupSource": "SGBS12",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGBS16",
    "inletMax": 413,
    "outletMax": 248,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 70,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 0,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 4,
    "lookupSource": "SGBS16",
    "speLookupSource": "SGBS16",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGBS24",
    "inletMax": 413,
    "outletMax": 248,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 70,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 34,
    "domeDeltaConst": 0,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 5,
    "lookupSource": "SGBS24",
    "speLookupSource": "SGBS24",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHBS08",
    "inletMax": 17.2,
    "outletMax": 3.4,
    "cv": 1.95,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 150,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0207,
    "cv1": 39.3,
    "cv2": -186,
    "xpopMax": 0.079,
    "cvOut": 2.8,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 2,
    "lookupSource": "SHBS08",
    "speLookupSource": "SHBS08",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHBS12",
    "inletMax": 17.2,
    "outletMax": 3.4,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 150,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 3,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 3,
    "lookupSource": "SHBS12",
    "speLookupSource": "SHBS12",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHBS16",
    "inletMax": 17.2,
    "outletMax": 3.4,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 150,
    "kp": null,
    "kr": 32.39,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 0,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 4,
    "lookupSource": "SHBS16",
    "speLookupSource": "SHBS16",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SHBS24",
    "inletMax": 17.2,
    "outletMax": 3.4,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 150,
    "kp": null,
    "kr": 43,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 34,
    "domeDeltaConst": 0,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 0,
    "category": "Back Pressure Spring",
    "boreColumn": 5,
    "lookupSource": "SHBS24",
    "speLookupSource": "SHBS24",
    "isBackPressure": true,
    "isSpring": true,
    "isDome": false,
    "isAirLoaded": false
  },
  {
    "name": "SGBD12",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": null,
    "kr": 10,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 3,
    "domeDeltaConst": 1,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Dome",
    "boreColumn": 3,
    "lookupSource": "SGBS12",
    "speLookupSource": "SGBS12",
    "isBackPressure": true,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SGBD16",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 4.8,
    "dpop": 13.75,
    "dseat": 14.5,
    "dd": 70,
    "kp": null,
    "kr": 10,
    "cv0": -0.0515,
    "cv1": 57.535,
    "cv2": -171.7,
    "xpopMax": 0.16,
    "cvOut": 25,
    "domeDeltaConst": 1,
    "seatForce": 109,
    "kf1": 140,
    "lockupPilot": 0,
    "category": "Back Pressure Dome",
    "boreColumn": 4,
    "lookupSource": "SGBS16",
    "speLookupSource": "SGBS16",
    "isBackPressure": true,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SGBD24",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 10.7,
    "dpop": 21.4,
    "dseat": 22,
    "dd": 70,
    "kp": null,
    "kr": 10,
    "cv0": -0.0452,
    "cv1": 89.429,
    "cv2": -199.29,
    "xpopMax": 0.255,
    "cvOut": 34,
    "domeDeltaConst": 1,
    "seatForce": 281,
    "kf1": 200,
    "lockupPilot": 0,
    "category": "Back Pressure Dome",
    "boreColumn": 5,
    "lookupSource": "SGBS24",
    "speLookupSource": "SGBS24",
    "isBackPressure": true,
    "isSpring": false,
    "isDome": true,
    "isAirLoaded": false
  },
  {
    "name": "SGBA08",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 1.95,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": null,
    "kr": 10,
    "cv0": -0.0207,
    "cv1": 39.3,
    "cv2": -186,
    "xpopMax": 0.079,
    "cvOut": 2.8,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Air-Loaded",
    "boreColumn": 2,
    "lookupSource": "SGBA08",
    "speLookupSource": "SGBA08",
    "isBackPressure": true,
    "isSpring": false,
    "isDome": false,
    "isAirLoaded": true
  },
  {
    "name": "SGBA12",
    "inletMax": 413,
    "outletMax": 413,
    "cv": 2.3,
    "dpop": 9.95,
    "dseat": 10.7,
    "dd": 50,
    "kp": null,
    "kr": 10,
    "cv0": -0.0206,
    "cv1": 39.866,
    "cv2": -167.93,
    "xpopMax": 0.079,
    "cvOut": 3,
    "domeDeltaConst": 0,
    "seatForce": 66,
    "kf1": 100,
    "lockupPilot": 0,
    "category": "Back Pressure Air-Loaded",
    "boreColumn": 3,
    "lookupSource": "SGBA12",
    "speLookupSource": "SGBA12",
    "isBackPressure": true,
    "isSpring": false,
    "isDome": false,
    "isAirLoaded": true
  }
];

export const regulatorPressureLookups = {
  "SGRS08": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": 32.39,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": 0,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 50,
      "springRate": 81,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 50,
      "springRate": 163,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 50,
      "springRate": 281,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 50,
      "springRate": 281,
      "speStd": 1.98,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": 1.98,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 142,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 9.16,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": 13,
      "springRate": 281,
      "speStd": 9.16,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "W"
    }
  ],
  "SGRS12": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": 32.39,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 50,
      "springRate": 81,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 50,
      "springRate": 163,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 50,
      "springRate": 281,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 50,
      "springRate": 281,
      "speStd": 1.98,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": 1.98,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 142,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 9.16,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": 13,
      "springRate": 281,
      "speStd": 9.16,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "W"
    }
  ],
  "SGRS16": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 70,
      "springRate": 81,
      "speStd": 0.68,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 70,
      "springRate": 81,
      "speStd": 0.68,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 70,
      "springRate": 281,
      "speStd": 0.68,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 28,
      "springRate": 81,
      "speStd": 3.45,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 28,
      "springRate": 81,
      "speStd": 3.45,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": 3.45,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 17,
      "springRate": 81,
      "speStd": 9.35,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": 9.35,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 9.35,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 9.35,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 248,
      "lookupLast": 249,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 9.35,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SGRS24": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 70,
      "springRate": 81,
      "speStd": 1.44,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 70,
      "springRate": 163,
      "speStd": 1.44,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 70,
      "springRate": 281,
      "speStd": 1.44,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 28,
      "springRate": 142.7,
      "speStd": 7.31,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": 7.31,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": 7.31,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": 19.84,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": 19.84,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 19.84,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 275,
      "lookupLast": 207,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 19.84,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 344,
      "lookupLast": 276,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": 19.84,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHRS08": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 32,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 142,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 413,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHRS12": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 32,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 142,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 413,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.07,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHRS16": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 43,
      "speStd": 0.12,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 142,
      "speStd": 0.12,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.12,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 413,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.12,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHRS24": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 43,
      "speStd": 0.26,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 142,
      "speStd": 0.26,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.26,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 413,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": 0.26,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SGBS08": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 50,
      "springRate": 43,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 50,
      "springRate": 142.7,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 50,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 28,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 13,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": 13,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "W"
    }
  ],
  "SGBS12": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 50,
      "springRate": 43,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 50,
      "springRate": 142.7,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 50,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 28,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 13,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": 13,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "W"
    }
  ],
  "SGBS16": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 70,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 70,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 70,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 28,
      "springRate": 43,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 28,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 248,
      "lookupLast": 249,
      "diaphragm": 17,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SGBS24": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": 70,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 70,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 70,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": 28,
      "springRate": 43,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": 28,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": 28,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": 28,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": 17,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "R"
    },
    {
      "maxP": 248,
      "lookupLast": 249,
      "diaphragm": 17,
      "springRate": 163,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHBS08": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 1,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 3.4,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHBS12": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 1,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "E"
    },
    {
      "maxP": 3.4,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHBS16": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 32.39,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 1,
      "diaphragm": 150,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SHBS24": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": 43,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 1,
      "diaphragm": 150,
      "springRate": 81,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": 281,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "SGRD12": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.62,
      "speDual": 0.61,
      "lockupPilotLookup": 5,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.62,
      "speDual": 0.61,
      "lockupPilotLookup": 8,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.62,
      "speDual": 0.61,
      "lockupPilotLookup": 10,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.62,
      "speDual": 0.61,
      "lockupPilotLookup": 13,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.62,
      "speDual": 0.61,
      "lockupPilotLookup": 13,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.29,
      "speDual": 0.17,
      "lockupPilotLookup": 50,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.29,
      "speDual": 0.17,
      "lockupPilotLookup": 100,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.29,
      "speDual": 0.17,
      "lockupPilotLookup": 200,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.29,
      "speDual": null,
      "lockupPilotLookup": 200,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.29,
      "speDual": null,
      "lockupPilotLookup": 200,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": null,
      "springRate": null,
      "speStd": 10.7,
      "speDual": null,
      "lockupPilotLookup": 300,
      "controlRange": "W"
    }
  ],
  "SGRD16": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.68,
      "speDual": 0.67,
      "lockupPilotLookup": 5,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.68,
      "speDual": 0.67,
      "lockupPilotLookup": 8,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.68,
      "speDual": 0.67,
      "lockupPilotLookup": 10,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.68,
      "speDual": 0.67,
      "lockupPilotLookup": 13,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.68,
      "speDual": 0.67,
      "lockupPilotLookup": 13,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.35,
      "speDual": 0.23,
      "lockupPilotLookup": 50,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.35,
      "speDual": 0.23,
      "lockupPilotLookup": 100,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.35,
      "speDual": 0.23,
      "lockupPilotLookup": 200,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.35,
      "speDual": null,
      "lockupPilotLookup": 200,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": null,
      "springRate": null,
      "speStd": 7.35,
      "speDual": null,
      "lockupPilotLookup": 200,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": null,
      "springRate": null,
      "speStd": 11.8,
      "speDual": null,
      "lockupPilotLookup": 300,
      "controlRange": "W"
    }
  ],
  "SGRD24": [
    {
      "maxP": 3.4,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.44,
      "speDual": 1.43,
      "lockupPilotLookup": 5,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.44,
      "speDual": 1.43,
      "lockupPilotLookup": 8,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.44,
      "speDual": 1.43,
      "lockupPilotLookup": 10,
      "controlRange": "G"
    },
    {
      "maxP": 25.8,
      "lookupLast": 18.2,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.44,
      "speDual": 1.43,
      "lockupPilotLookup": 13,
      "controlRange": "H"
    },
    {
      "maxP": 34.4,
      "lookupLast": 26.8,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.44,
      "speDual": 1.43,
      "lockupPilotLookup": 13,
      "controlRange": "J"
    },
    {
      "maxP": 68.9,
      "lookupLast": 35.4,
      "diaphragm": null,
      "springRate": null,
      "speStd": 8.11,
      "speDual": 0.99,
      "lockupPilotLookup": 50,
      "controlRange": "L"
    },
    {
      "maxP": 103,
      "lookupLast": 69.9,
      "diaphragm": null,
      "springRate": null,
      "speStd": 8.11,
      "speDual": 0.99,
      "lockupPilotLookup": 100,
      "controlRange": "M"
    },
    {
      "maxP": 137,
      "lookupLast": 104,
      "diaphragm": null,
      "springRate": null,
      "speStd": 8.11,
      "speDual": 0.99,
      "lockupPilotLookup": 200,
      "controlRange": "N"
    },
    {
      "maxP": 206,
      "lookupLast": 138,
      "diaphragm": null,
      "springRate": null,
      "speStd": 8.11,
      "speDual": null,
      "lockupPilotLookup": 200,
      "controlRange": "P"
    },
    {
      "maxP": 248,
      "lookupLast": 207,
      "diaphragm": null,
      "springRate": null,
      "speStd": 8.11,
      "speDual": null,
      "lockupPilotLookup": 200,
      "controlRange": "R"
    },
    {
      "maxP": 420,
      "lookupLast": 249,
      "diaphragm": null,
      "springRate": null,
      "speStd": 12.6,
      "speDual": null,
      "lockupPilotLookup": 300,
      "controlRange": "W"
    }
  ],
  "SHRD12": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.06,
      "lockupPilotLookup": 4.65,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.06,
      "lockupPilotLookup": 4.65,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.06,
      "lockupPilotLookup": 4.65,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.06,
      "lockupPilotLookup": 4.65,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.06,
      "lockupPilotLookup": 4.65,
      "controlRange": "G"
    },
    {
      "maxP": 413,
      "lookupLast": 18.2,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 0,
      "speDual": 0,
      "lockupPilotLookup": 4.65,
      "controlRange": "N/A"
    }
  ],
  "SHRD16": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.12,
      "speDual": 0.11,
      "lockupPilotLookup": 4.65,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.12,
      "speDual": 0.11,
      "lockupPilotLookup": 4.65,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.12,
      "speDual": 0.11,
      "lockupPilotLookup": 4.65,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.11,
      "lockupPilotLookup": 4.65,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.11,
      "lockupPilotLookup": 4.65,
      "controlRange": "G"
    },
    {
      "maxP": 413,
      "lookupLast": 18.2,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 0,
      "speDual": 0,
      "lockupPilotLookup": 4.65,
      "controlRange": "N/A"
    }
  ],
  "SHRD24": [
    {
      "maxP": 0.68,
      "lookupLast": 0,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.26,
      "speDual": 0.25,
      "lockupPilotLookup": 4.65,
      "controlRange": "C"
    },
    {
      "maxP": 1.7,
      "lookupLast": 1.6800000000000002,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.26,
      "speDual": 0.25,
      "lockupPilotLookup": 4.65,
      "controlRange": "D"
    },
    {
      "maxP": 3.4,
      "lookupLast": 2.7,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.26,
      "speDual": 0.25,
      "lockupPilotLookup": 4.65,
      "controlRange": "E"
    },
    {
      "maxP": 6.8,
      "lookupLast": 4.4,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.25,
      "lockupPilotLookup": 4.65,
      "controlRange": "F"
    },
    {
      "maxP": 17.2,
      "lookupLast": 7.8,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 1.07,
      "speDual": 0.25,
      "lockupPilotLookup": 4.65,
      "controlRange": "G"
    },
    {
      "maxP": 413,
      "lookupLast": 18.2,
      "diaphragm": 150,
      "springRate": null,
      "speStd": 0,
      "speDual": 0,
      "lockupPilotLookup": 4.65,
      "controlRange": "N/A"
    }
  ],
  "SGRA08": [
    {
      "maxP": 50,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": null,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 1
    },
    {
      "maxP": 150,
      "lookupLast": 51,
      "diaphragm": 28,
      "springRate": null,
      "speStd": 1.98,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 2
    },
    {
      "maxP": 413,
      "lookupLast": 151,
      "diaphragm": 17,
      "springRate": null,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 3
    },
    {
      "maxP": 413,
      "lookupLast": 414,
      "diaphragm": 13,
      "springRate": null,
      "speStd": 9.16,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    }
  ],
  "SGRA12": [
    {
      "maxP": 50,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": null,
      "speStd": 0.62,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 1
    },
    {
      "maxP": 150,
      "lookupLast": 51,
      "diaphragm": 28,
      "springRate": null,
      "speStd": 1.98,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 2
    },
    {
      "maxP": 413,
      "lookupLast": 151,
      "diaphragm": 17,
      "springRate": null,
      "speStd": 5.36,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 3
    },
    {
      "maxP": 413,
      "lookupLast": 414,
      "diaphragm": 13,
      "springRate": null,
      "speStd": 9.16,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    },
    {
      "maxP": 150,
      "lookupLast": 51,
      "diaphragm": 28,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 2
    },
    {
      "maxP": 413,
      "lookupLast": 151,
      "diaphragm": 17,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 3
    },
    {
      "maxP": 413,
      "lookupLast": 414,
      "diaphragm": 13,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    }
  ],
  "SGBA08": [
    {
      "maxP": 50,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 1
    },
    {
      "maxP": 150,
      "lookupLast": 51,
      "diaphragm": 28,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 2
    },
    {
      "maxP": 413,
      "lookupLast": 151,
      "diaphragm": 17,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 3
    },
    {
      "maxP": 413,
      "lookupLast": 414,
      "diaphragm": 13,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    }
  ],
  "SGBA12": [
    {
      "maxP": 50,
      "lookupLast": 0,
      "diaphragm": 50,
      "springRate": null,
      "speStd": null,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 1
    }
  ],
  "RD20": [
    {
      "maxP": 10,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 0.77,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    },
    {
      "maxP": 25,
      "lookupLast": 11,
      "diaphragm": null,
      "springRate": null,
      "speStd": 0.77,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 5
    },
    {
      "maxP": 100,
      "lookupLast": 26,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.69,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 6
    },
    {
      "maxP": 175,
      "lookupLast": 101,
      "diaphragm": null,
      "springRate": null,
      "speStd": 3.23,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 7
    },
    {
      "maxP": 200,
      "lookupLast": 176,
      "diaphragm": null,
      "springRate": null,
      "speStd": 5.77,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 8
    },
    {
      "maxP": 200,
      "lookupLast": 201,
      "diaphragm": null,
      "springRate": null,
      "speStd": 5.77,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "RD25": [
    {
      "maxP": 10,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 0.87,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    },
    {
      "maxP": 25,
      "lookupLast": 11,
      "diaphragm": null,
      "springRate": null,
      "speStd": 0.87,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 5
    },
    {
      "maxP": 100,
      "lookupLast": 26,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.79,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 6
    },
    {
      "maxP": 175,
      "lookupLast": 101,
      "diaphragm": null,
      "springRate": null,
      "speStd": 3.33,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 7
    },
    {
      "maxP": 200,
      "lookupLast": 176,
      "diaphragm": null,
      "springRate": null,
      "speStd": 5.87,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 8
    },
    {
      "maxP": 200,
      "lookupLast": 201,
      "diaphragm": null,
      "springRate": null,
      "speStd": 5.87,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "RD30": [
    {
      "maxP": 10,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.27,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    },
    {
      "maxP": 25,
      "lookupLast": 11,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.27,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 5
    },
    {
      "maxP": 100,
      "lookupLast": 26,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.19,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 6
    },
    {
      "maxP": 175,
      "lookupLast": 101,
      "diaphragm": null,
      "springRate": null,
      "speStd": 3.73,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 7
    },
    {
      "maxP": 200,
      "lookupLast": 176,
      "diaphragm": null,
      "springRate": null,
      "speStd": 6.27,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 8
    },
    {
      "maxP": 200,
      "lookupLast": 201,
      "diaphragm": null,
      "springRate": null,
      "speStd": 6.27,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ],
  "RD40": [
    {
      "maxP": 10,
      "lookupLast": 0,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.66,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 4
    },
    {
      "maxP": 25,
      "lookupLast": 11,
      "diaphragm": null,
      "springRate": null,
      "speStd": 1.66,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 5
    },
    {
      "maxP": 100,
      "lookupLast": 26,
      "diaphragm": null,
      "springRate": null,
      "speStd": 2.57,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 6
    },
    {
      "maxP": 175,
      "lookupLast": 101,
      "diaphragm": null,
      "springRate": null,
      "speStd": 4.12,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 7
    },
    {
      "maxP": 200,
      "lookupLast": 176,
      "diaphragm": null,
      "springRate": null,
      "speStd": 6.66,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": 8
    },
    {
      "maxP": 200,
      "lookupLast": 201,
      "diaphragm": null,
      "springRate": null,
      "speStd": 6.66,
      "speDual": null,
      "lockupPilotLookup": null,
      "controlRange": "N/A"
    }
  ]
};

const PIPE_KEYS = [8, 12, 16, 24, 32, 40, 48, 64];

function finite(v, fallback = 0) {
  if (v === null || v === undefined || v === "") return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function lookupRange(source, y) {
  const rows = regulatorPressureLookups[source] || [];
  const eligible = rows.filter(r => Number.isFinite(r.lookupLast) && r.lookupLast <= y);
  if (!eligible.length) return rows[0] || null;
  return eligible.reduce((best, row) => row.lookupLast >= best.lookupLast ? row : best);
}

function gasFlow(cv, p1, p2, gasFactor) {
  cv = finite(cv);
  p1 = finite(p1);
  p2 = finite(p2);
  if (cv <= 0 || p1 <= 0 || p2 < 0 || p2 > p1) return 0;
  let value;
  if (p2 > p1 * 0.5) {
    value = (6950 * cv * p1 * (1 - ((2 * (p1 - p2)) / (3 * p1))) * Math.sqrt((p1 - p2) / (p1 * 273))) * 0.06;
  } else {
    value = (0.471 * 6950 * cv * p1 * Math.sqrt(1 / (273))) * 0.06;
  }
  return value * gasFactor;
}

function liquidFlow(cv, p1, p2, density) {
  cv = finite(cv);
  const dp = Math.max(0, finite(p1) - finite(p2));
  if (cv <= 0 || density <= 0) return 0;
  return 14.42 * cv * Math.sqrt(dp / density);
}

function calculateLockup(row, s, t, j) {
  const H = finite(row.dpop);
  const I = finite(row.dseat);
  const J = Math.max(finite(j), 0.000001);
  const CE = finite(row.domeDeltaConst);
  const CF = finite(row.seatForce);
  const CG = finite(row.kf1);
  const CH = finite(row.lockupPilot);

  const denominator = 3927 * (I * I - J * J - H * H);
  const ci = Math.abs(denominator) < 1e-12 ? 0 :
    (-(5000 * ((0.2 * s) - (0.2 * t) + CF)) / denominator * 10);
  const cj = CE * ((CG + (0.7854 * (I * I - H * H) * ((s - t) * 0.1))) / (0.7854 * J * J)) * 10;
  const ck = (CH / 14.5) + cj;
  return Math.max(ci, ck, 0) * 5;
}

function dynamicCv(row, isBackPressure, s, t, u, j, springRate) {
  const H = finite(row.dpop);
  const I = finite(row.dseat);
  const J = finite(j);
  const K = finite(row.kp);
  const L = finite(springRate);
  const limit = finite(row.xpopMax);
  let xpop = 0;

  if (isBackPressure) {
    if (L <= 0) return { xpop: limit, cv: finite(row.cv) };
    xpop = Math.PI / 10 * (s - u) * (J * J + H * H) / 25.4 / 4 / L;
  } else {
    if (K + L <= 0) return { xpop: limit, cv: finite(row.cv) };
    xpop = (t - u) / 10 * Math.PI * (H * H - I * I + J * J) / 25.4 / 4 / (K + L);
  }

  xpop = Math.max(0, Math.min(limit, xpop));
  const cv = finite(row.cv1) * xpop + finite(row.cv2) * xpop * xpop + finite(row.cv0);
  return { xpop, cv: Math.max(0, cv) };
}

function outletBore(row, pipeType, boreUnit) {
  const key = PIPE_KEYS[row.boreColumn - 2];
  const table = pipeInternalDiameters[pipeType];
  const mm = table && key != null ? finite(table[key]) : 0;
  return boreUnit === "inch" ? mm * 0.03937007874015748 : mm;
}

function metricStatus(actual, limit, direction = "max") {
  if (!Number.isFinite(actual) || !Number.isFinite(limit)) return "neutral";
  if (direction === "min") {
    if (actual >= limit) return "green";
    if (actual >= limit / 1.2) return "amber";
    return "red";
  }
  if (actual <= limit) return "green";
  if (actual <= limit * 1.2) return "amber";
  return "red";
}

function flowStatuses(flow, lockup, rated, choked) {
  return {
    lockup: flow >= lockup ? "green" : "red",
    rated: flow <= rated && flow >= lockup ? "green" : (flow <= choked && flow >= lockup ? "amber" : "red"),
    choked: flow <= choked ? "green" : "red"
  };
}

function worstStatus(statuses) {
  if (statuses.includes("red")) return "red";
  if (statuses.includes("amber")) return "amber";
  return "green";
}

function evaluateOne(row, input, sizing) {
  const units = getUnitConfiguration(input.unitSystem, input.fluidType);
  const pressureFactor = units.pressureFactor;
  const flowFactor = units.flowFactor;
  const droop = input.droopPercent / 100;
  const prop = input.fluidProperty;

  const wc = input.worstCase;
  const bc = input.bestCase;

  const s = wc.inletPressure / pressureFactor + 1;
  const t = wc.outletPressure / pressureFactor + 1;
  const v = bc.inletPressure / pressureFactor + 1;
  const w = bc.outletPressure / pressureFactor + 1;

  const u = row.isBackPressure ? s * (1 - droop) : t * (1 - droop);
  const x = row.isBackPressure ? v * (1 - droop) : w * (1 - droop);
  const y = row.isBackPressure ? Math.max(s, v) : Math.max(t, w);

  const rangeRow = lookupRange(row.lookupSource, y);
  const speRow = lookupRange(row.speLookupSource, y) || rangeRow;

  const j = row.isDome ? finite(row.dd) : finite(rangeRow?.diaphragm, row.dd);
  const springRate = row.isDome ? finite(row.kr) : (Number.isFinite(rangeRow?.springRate) ? rangeRow.springRate : finite(row.kr));
  const controlRange = rangeRow?.controlRange ?? "—";

  const dynW = dynamicCv(row, row.isBackPressure, s, t, u, j, springRate);
  const dynB = dynamicCv(row, row.isBackPressure, v, w, x, j, springRate);

  let chokedW, chokedB, ratedW, ratedB, lockupW, lockupB;
  if (input.fluidType === "gas") {
    const gasFactor = finite(prop, 1);
    chokedW = gasFlow(row.cv, s, t, gasFactor);
    chokedB = gasFlow(row.cv, v, w, gasFactor);
    const inletRatedW = gasFlow(dynW.cv, s, t, gasFactor);
    const inletRatedB = gasFlow(dynB.cv, v, w, gasFactor);

    if (row.isBackPressure) {
      ratedW = Math.min(chokedW, inletRatedW);
      ratedB = Math.min(chokedB, inletRatedB);
    } else {
      const outletRatedW = gasFlow(row.cvOut, t, u, gasFactor);
      const outletRatedB = gasFlow(row.cvOut, w, x, gasFactor);
      ratedW = Math.min(chokedW, inletRatedW, outletRatedW);
      ratedB = Math.min(chokedB, inletRatedB, outletRatedB);
    }

    lockupW = calculateLockup(row, s, t, j);
    // The Excel's CP shared formula uses the same lockup branch as the Worst Case.
    lockupB = lockupW;
  } else {
    const density = finite(prop, 1);
    chokedW = liquidFlow(row.cv, s, t, density);
    chokedB = liquidFlow(row.cv, v, w, density);
    const inletRatedW = liquidFlow(dynW.cv, s, t, density);
    const inletRatedB = liquidFlow(dynB.cv, v, w, density);
    ratedW = Math.min(chokedW, inletRatedW);
    ratedB = Math.min(chokedB, inletRatedB);
    lockupW = inletRatedW * 0.02;
    lockupB = inletRatedB * 0.02;
  }

  lockupW *= flowFactor; ratedW *= flowFactor; chokedW *= flowFactor;
  lockupB *= flowFactor; ratedB *= flowFactor; chokedB *= flowFactor;

  const bore = outletBore(row, input.pipeType, sizing.units.boreUnit);
  const inletMWP = finite(row.inletMax) * pressureFactor;
  const maxAdj = finite(row.outletMax) * pressureFactor;
  const supplyDeltaBar = (bc.inletPressure - wc.inletPressure) / pressureFactor;
  const speStd = !row.isBackPressure && Number.isFinite(speRow?.speStd) ? supplyDeltaBar * speRow.speStd * 0.01 * pressureFactor : null;
  const speDual = !row.isBackPressure && Number.isFinite(speRow?.speDual) ? supplyDeltaBar * speRow.speDual * 0.01 * pressureFactor : null;

  const worstFlowStatus = flowStatuses(wc.flow, lockupW, ratedW, chokedW);
  const bestFlowStatus = flowStatuses(bc.flow, lockupB, ratedB, chokedB);
  const boreWorstStatus = metricStatus(sizing.worstBore, bore, "max");
  const boreBestStatus = metricStatus(sizing.bestBore, bore, "max");
  const inletWorstStatus = metricStatus(wc.inletPressure, inletMWP, "max");
  const inletBestStatus = metricStatus(bc.inletPressure, inletMWP, "max");
  const adjWorstStatus = metricStatus(row.isBackPressure ? wc.inletPressure : wc.outletPressure, maxAdj, "max");
  const adjBestStatus = metricStatus(row.isBackPressure ? bc.inletPressure : bc.outletPressure, maxAdj, "max");

  const allStatuses = [
    ...Object.values(worstFlowStatus), ...Object.values(bestFlowStatus),
    boreWorstStatus, boreBestStatus, inletWorstStatus, inletBestStatus, adjWorstStatus, adjBestStatus
  ];

  return {
    ...row,
    controlRange,
    speStd,
    speDual,
    worst: {
      lockup: lockupW, rated: ratedW, choked: chokedW, outletBore: bore,
      inletMWP, maxAdj,
      statuses: {...worstFlowStatus, bore:boreWorstStatus, inletMWP:inletWorstStatus, maxAdj:adjWorstStatus}
    },
    best: {
      lockup: lockupB, rated: ratedB, choked: chokedB, outletBore: bore,
      inletMWP, maxAdj,
      statuses: {...bestFlowStatus, bore:boreBestStatus, inletMWP:inletBestStatus, maxAdj:adjBestStatus}
    },
    overallStatus: worstStatus(allStatuses),
    issueCount: allStatuses.filter(s => s === "red").length,
    warningCount: allStatuses.filter(s => s === "amber").length
  };
}

export function evaluateRegulators(input, sizing) {
  const candidates = regulatorDatabase.map(row => evaluateOne(row, input, sizing));
  const order = {green:0, amber:1, red:2};
  const familyOrder = {
    "Pressure Reducing Spring": 0,
    "Pressure Reducing Dome": 1,
    "Pressure Reducing Air-Loaded": 2,
    "Back Pressure Spring": 3,
    "Back Pressure Dome": 4,
    "Back Pressure Air-Loaded": 5
  };
  candidates.sort((a,b) =>
    (familyOrder[a.category] ?? 99) - (familyOrder[b.category] ?? 99) ||
    order[a.overallStatus] - order[b.overallStatus] ||
    a.issueCount - b.issueCount ||
    a.warningCount - b.warningCount ||
    a.name.localeCompare(b.name)
  );
  return {
    ready: true,
    candidates,
    counts: {
      green: candidates.filter(c => c.overallStatus === "green").length,
      amber: candidates.filter(c => c.overallStatus === "amber").length,
      red: candidates.filter(c => c.overallStatus === "red").length
    }
  };
}
