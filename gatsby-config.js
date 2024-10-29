module.exports = {
  siteMetadata: {
    title: "Mi Sitio Gatsby",
  },
  plugins: [],
};
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />,
  ]);
};
