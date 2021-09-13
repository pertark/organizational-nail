import { Box, Checkbox, Textarea, IconButton, Stack, Input, Text, CheckboxGroup } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import UserContext from "../components/UserContext"
import Layout from "../components/Layout"
import Checklist from "../components/Checklist"

export default function Home() {
  return (
    <Layout>
      <Checklist></Checklist>
    </Layout>
  )
}
