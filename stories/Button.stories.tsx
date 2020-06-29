import React from "react"
import { Button, Box } from "../src"

export default {
  title: "Button",
}

export const Variants = () => (
  <Box display="flex">
    {["primary", "secondary", "dark", "danger"].map((variant) => (
      <>
        <Button width={150} variant={variant as any}>
          {variant}
        </Button>
        <Box pad={1} />
      </>
    ))}
  </Box>
)
