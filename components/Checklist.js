import { Box, Checkbox, Textarea, IconButton, Stack, Input, Text, CheckboxGroup } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import UserContext from "./UserContext"

export default function Checklist() {
  const { authenticated, setAuthenticated, checklist, setChecklist } = useContext(UserContext)

  const [ newChecklistItem, setNewChecklistItem ] = useState("")
  const handleChange = (event) => setNewChecklistItem(event.target.value)
  const submitChecklistItem = () => {
    if ( !newChecklistItem ) return
    setChecklist([...checklist, newChecklistItem])
    setNewChecklistItem("")
  }
  return (
    <Stack direction={"column"}>
      <h1>Checklist</h1>
      <Box>
        <Stack direction={"row"}>
          <IconButton aria-label="add note" icon={<AddIcon/>} onClick={submitChecklistItem} />
          <Input value={newChecklistItem} onChange={handleChange} />
        </Stack>
      </Box>
      <CheckboxGroup>
        <Stack direction={"column"}>
          {checklist.length !== 0 ? checklist.map((val, idx) => {
              return (
                <Checkbox 
                  key={idx} 
                  size={"lg"}
                  colorScheme={"gray"}
                >
                  {val}
                </Checkbox>
              )
            }) : <i>Nothing is here :)</i>}
        </Stack>
      </CheckboxGroup>
    </Stack>
  )
}
