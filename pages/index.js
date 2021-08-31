import { Box, Checkbox, Textarea, IconButton, Stack, Input, Text, CheckboxGroup } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import UserContext from "../components/UserContext"
import Layout from "../components/Layout"

export default function Home() {
  const [ checklist, setChecklist ] = useState([])
  
  const { authenticated, setAuthenticated } = useContext(UserContext)

  const [ newChecklistItem, setNewChecklistItem ] = useState("")
  const handleChange = (event) => setNewChecklistItem(event.target.value)
  const submitChecklistItem = () => {
    setChecklist([...checklist, newChecklistItem])
    setNewChecklistItem("")
  }
  return (
    <Layout>
      <Box>
        <Stack direction={"row"}>
          <IconButton aria-label="add note" icon={<AddIcon/>} onClick={submitChecklistItem} />
          <Input value={newChecklistItem} onChange={handleChange} />
        </Stack>
      </Box>
      <CheckboxGroup>
        <Stack direction={"column"}>
          {checklist.length !== 0 ? checklist.map((val, idx) => {return <Checkbox key={idx}>{val}</Checkbox>}) : <i>Nothing is here :)</i>}
        </Stack>
      </CheckboxGroup>
    </Layout>
  )
}
