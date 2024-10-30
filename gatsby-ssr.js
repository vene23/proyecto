import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />,
    <link
      key="stylesheet"
      rel="stylesheet"
      href="/path/to/your-styles.css"
    />,
  ]);

  setPreBodyComponents([
    <script key="analytics" src="https://analytics.example.com/script.js" />,
  ]);
};
