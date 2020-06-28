import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Button, Box, FormInput, FormOutline } from "../../components"

export default function Home(_props: RouteComponentProps) {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="100%" maxWidth="lg" padY={6} display="grid" gridGap={6}>
        <Box mgnTop={6} fontSize={6} fontWeight={500}>
          Buttons
        </Box>
        <Box display="grid" gridGap={6} gridTemplateColumns="repeat(4, 1fr)">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="danger">Danger</Button>
        </Box>

        <Box mgnTop={6} fontSize={6} fontWeight={500}>
          Inputs
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap={6}>
          <FormOutline>
            <FormInput placeholder="Normal" />
          </FormOutline>
          <FormOutline variant="danger">
            <FormInput variant="danger" placeholder="Danger" />
          </FormOutline>
          <FormOutline focus>
            <FormInput placeholder="Normal focus" />
          </FormOutline>
          <FormOutline focus variant="danger">
            <FormInput variant="danger" placeholder="Danger focus" />
          </FormOutline>
          <FormOutline disabled>
            <FormInput disabled placeholder="Disabled" />
          </FormOutline>
          <FormOutline>
            <Box padRight={3} fontSize={5}>
              $
            </Box>
            <FormInput placeholder="Prefix & Suffix" />
            <Box padLeft={3} fontWeight={600}>
              USD
            </Box>
          </FormOutline>
        </Box>
      </Box>
    </Box>
  )
}
