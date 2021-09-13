import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Input,
  Stack,
} from "@chakra-ui/react"

export default function Hotlinks() {
  const { authenticated, setAuthenticated, checklist, setChecklist } = useContext(UserContext)

  const [ newChecklistItem, setNewChecklistItem ] = useState("")
  const handleChange = (event) => setNewChecklistItem(event.target.value)
  const submitChecklistItem = () => {
    if ( !newChecklistItem ) return
    setChecklist([...checklist, newChecklistItem])
    setNewChecklistItem("")
  }

  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()


  return (
    <Box>
      <Button colorScheme="green" onClick={() => setIsOpen(true)}>
        Add
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Add Something
            </AlertDialogHeader>
            <Input> something </Input>
            <AlertDialogBody>
              yea
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  )
}