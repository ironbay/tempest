import React from "react"
import { Box, FormCheck } from "../../src"

export default {
  title: "Form/Check",
}

export const Default = () => {
  const [checked, checked_set] = React.useState(false)
  return (
    <Box display="grid" gridGap={3}>
      <FormCheck value={false}>Unchecked</FormCheck>
      <FormCheck value={true}>Checked</FormCheck>
      <FormCheck value={true} disabled>
        Disabled
      </FormCheck>
      <FormCheck value={checked} onClick={() => checked_set(!checked)}>
        Live
      </FormCheck>
    </Box>
  )
}
