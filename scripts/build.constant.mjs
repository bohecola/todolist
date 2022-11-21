export const external = ["vue"];

export const input = "index.js";

export const onwarn = (msg, warn) => !/Circular|preventAssignment/.test(msg) && warn(msg);
