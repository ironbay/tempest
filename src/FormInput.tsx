import styled from "styled-components"
import { GenerateProps, system, Common, themed, Width, All } from "./system"
import { Theme } from "./theme"

const variants = {
  danger: {
    color: Theme.colors.red500,
    border: Theme.colors.red500,
    focus: Theme.colors.red500,
    shadow: "0px 4px 14px rgba(229, 85, 76, 0.25)",
  },
  normal: {
    color: "#000033",
    border: Theme.colors.border,
    focus: Theme.colors.primary,
    shadow: "0px 4px 20px rgba(105, 131, 255, 0.25)",
  },
}

const outline_props = All

export const FormOutline = styled.div<
  {
    variant?: keyof typeof variants
    disabled?: boolean
    focus?: boolean
  } & GenerateProps<typeof outline_props>
>`
  ${system(outline_props)}
  ${themed({ fontFamily: "sans" })}
  cursor: ${(props) => props.disabled && "not-allowed"};
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: 300ms all;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => {
    if (props.disabled) return "transparent"
    if (props.focus) return variants[props.variant || "normal"].focus
    return variants[props.variant || "normal"].border
  }};
  background: ${(props) => {
    if (props.disabled) return Theme.colors.gray500
    return Theme.colors.white
  }};
  box-shadow: ${(props) =>
    props.focus && variants[props.variant || "normal"].shadow};
  padding: 0 1rem;
  &:focus-within {
    border-color: ${(props) => variants[props.variant || "normal"].focus};
    box-shadow: ${(props) => variants[props.variant || "normal"].shadow};
  }
`
FormOutline.defaultProps = {
  variant: "normal",
}

const input_props = [...Common, ...Width]

export const FormInput = styled.input<
  GenerateProps<typeof input_props> & {
    variant?: keyof typeof variants
  }
>`
  ${system(input_props)}
  ${themed({
    fontWeight: 500,
    fontFamily: "sans",
  })}
  background: transparent;
  cursor: ${(props) => props.disabled && "not-allowed"};
  border: 0;
  outline: 0;
  padding: 0;
  color: ${(props) => variants[props.variant || "normal"].color};
  transition: 300ms all;
  height: 45px;
  font-size: 1rem;
`

FormInput.defaultProps = {
  variant: "normal",
  width: "100%",
}
