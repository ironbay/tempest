import React from "react"
import styled from "styled-components"
import { Theme } from "./theme"
import { IconCheck } from "./Icon"

type Props = {
  value?: boolean
  disabled?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const FormCheck = styled(function FormCheck({
  value,
  children,
  disabled,
  ...rest
}: Props) {
  return (
    <div {...rest}>
      <Check disabled={disabled} value={value}>
        <Icon value={value} />
      </Check>
      <Label disabled={disabled}>{children}</Label>
    </div>
  )
})`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Check = styled.div<{
  value?: boolean
  disabled?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms all cubic-bezier(0, 0.67, 0.27, 1);
  border: 1px solid
    ${(props) =>
      props.value && !props.disabled
        ? Theme.colors.primary
        : Theme.colors.border};
  width: 25px;
  height: 25px;
  border-radius: 8px;
  background-color: ${(props) => {
    if (props.disabled) return Theme.colors.border
    return props.value && Theme.colors.primary
  }};

  ${FormCheck}:hover & {
    border-color: ${(props) => !props.disabled && Theme.colors.primary};
  }
`

const Label = styled.label<{
  disabled?: boolean
}>`
  cursor: pointer;
  padding-left: 0.5rem;
`

const Icon = styled(IconCheck)<{
  value?: boolean
}>`
  color: white;
  transition: 300ms all cubic-bezier(0, 0.67, 0.27, 1);
  opacity: ${(props) => (props.value ? 1 : 0)};
  transform: ${(props) => (props.value ? "initial" : "translate3d(0, 5px, 0)")};
`

Icon.defaultProps = {
  width: 14,
}
