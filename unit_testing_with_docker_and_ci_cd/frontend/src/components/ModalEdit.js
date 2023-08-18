import { useEffect, useState } from 'react'
import {
    Button,
    Input,
    FormLabel,
    FormControl,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import { updateTodo } from '../modules/fetch/todo'

export default function ModalEdit({ isOpen, onClose, id, todo })
{
    const [name, setName] = useState('')

    useEffect(() => {
        setName(todo)
    }, [id, todo])

    const editTodo = async () => {
        await updateTodo(id, name)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Todo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Todo</FormLabel>
                        <Input placeholder="Todo" defaultValue={todo} onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme="blue" onClick={editTodo}>Edit</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}