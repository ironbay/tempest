import React from "react"
import { Box, FormCheck } from "../../src"

export default {
  title: "Form/Check",
}

export const Default = () => (
  <Box display="grid" gridGap={3}>
    <FormCheck value={false}>Unchecked</FormCheck>
    <FormCheck value={true}>Checked</FormCheck>
    <FormCheck value={true} disabled>
      Disabled
    </FormCheck>
  </Box>
)
