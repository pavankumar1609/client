import { css } from "@emotion/react";

export function smMobile(props) {
  return css`
    @media only screen and (max-width: 370px) {
      ${props}
    }
  `;
}

export function mobile(props) {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
}

export function tablet(props) {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
}
