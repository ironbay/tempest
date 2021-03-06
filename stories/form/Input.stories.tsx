import React from "react"
import { Box, FormInput, FormOutline } from "../../src"

export default {
  title: "Form/Input",
}

export const Variants = () => (
  <Box display="flex">
    <FormOutline>
      <FormInput placeholder="Normal" />
    </FormOutline>
    <Box pad={1} />
    <FormOutline variant="danger">
      <FormInput placeholder="Danger" variant="danger" />
    </FormOutline>
    <Box pad={1} />
    <FormOutline disabled>
      <FormInput placeholder="Disabled" disabled />
    </FormOutline>
  </Box>
)

export const Addons = () => (
  <Box display="flex">
    <FormOutline>
      <Box fontSize={5} mgnRight={2}>
        $
      </Box>
      <FormInput placeholder="0.00" />
      <Box mgnLeft={2} fontWeight={500}>
        USD
      </Box>
    </FormOutline>
  </Box>
)
