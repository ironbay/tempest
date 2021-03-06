import styled from "styled-components"
import { Layout, GenerateProps, system, Common } from "./system"
import { Theme } from "./theme"

const props = [...Common, ...Layout]

const variants = {
  primary: {
    fg: Theme.colors.white,
    bg: Theme.colors.indigo500,
    hover: Theme.colors.indigo400,
    active: Theme.colors.indigo300,
    shadow: "0px 4px 14px rgba(80, 107, 234, 0.25)",
  },
  secondary: {
    fg: Theme.colors.black,
    bg: Theme.colors.gray500,
    hover: Theme.colors.gray400,
    active: Theme.colors.gray300,
    shadow: "0px 4px 14px rgba(220, 224, 236, 0.25)",
  },
  danger: {
    fg: Theme.colors.white,
    bg: Theme.colors.red500,
    hover: Theme.colors.red400,
    active: Theme.colors.red300,
    shadow: "0px 4px 14px rgba(229, 85, 76, 0.25)",
  },
  dark: {
    fg: Theme.colors.white,
    bg: "#000033",
    hover: "#1F1F6B",
    active: "#000023",
    shadow: "0px 4px 14px rgba(31, 31, 107, 0.25)",
  },
}

export const Button = styled.button<
  {
    variant?: keyof typeof variants
  } & GenerateProps<typeof props>
>`
  ${system(props)}
  font-family: Archivo;
  align-items: center;
  border: 0;
  outline: 0;
  justify-content: center;
  padding: 0px 20px;
  height: 45px;
  transition: 300ms background-color;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => variants[props.variant || "primary"].fg};
  background-color: ${(props) => variants[props.variant || "primary"].bg};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => variants[props.variant || "primary"].hover};
    box-shadow: ${(props) => variants[props.variant || "primary"].shadow};
  }

  &:active {
    background-color: ${(props) => variants[props.variant || "primary"].active};
    transform: translate3d(0, 2px, 0);
  }
`

Button.defaultProps = {
  variant: "primary",
}
