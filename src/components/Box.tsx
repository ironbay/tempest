import styled from "styled-components"
import { system, All, GenerateProps } from "../system"

export const Box = styled.div<GenerateProps<typeof All>>`
  ${system(All)}
  font-family: Archivo;
`

Box.defaultProps = {}
