import React from "react"
import { Box, FormInput, FormOutline } from "../src"

export default {
  title: "Form",
}

export const Input = () => (
  <Box display="flex">
    {["normal", "danger"].map((variant) => (
      <>
        <FormOutline variant={variant as any}>
          <FormInput placeholder={variant} variant={variant as any} />
        </FormOutline>
        <Box pad={1} />
      </>
    ))}
    <FormOutline disabled>
      <FormInput placeholder="Disabled" disabled />
    </FormOutline>
  </Box>
)
