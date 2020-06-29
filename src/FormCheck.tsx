import React from "react"
import styled from "styled-components"
import { Theme } from "./theme"
import { Box } from "./Box"
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
        {value && (
          <Box fg={disabled ? "black" : "white"}>
            <IconCheck width={14} />
          </Box>
        )}
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
  transition: 300ms all;
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
