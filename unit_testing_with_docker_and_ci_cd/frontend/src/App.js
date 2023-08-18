import { useEffect, useState } from "react"
import {
    Button,
    Input,
    InputGroup,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    useDisclosure
} from '@chakra-ui/react'
import ModalEdit from "./components/ModalEdit"
import { getAllTodos, storeTodo, showTodo, destroyTodo } from './modules/fetch/todo'

export default function App()
{
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([])

    const [todoId, setTodoId] = useState('')
    const [edit, setEdit] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const fetchTodos = async () => {
        const todos = await getAllTodos()
        setTodos(todos)
    }

    useEffect(() => {
        fetchTodos()
    }, [isOpen])

    const createTodo = async () => {
        await storeTodo(name)
        fetchTodos()
    }

    const getTodo = async id => {
        const todo = await showTodo(id)
        setTodoId(todo.id)
        setEdit(todo.name)
    }

    const deleteTodo = async id => {
        await destroyTodo(id)
        fetchTodos()
    }

    return (
        <TableContainer m={10}>
            <ModalEdit isOpen={isOpen} onClose={onClose} id={todoId} todo={edit} />
            <Stack mb={10} spacing={3}>
                <InputGroup>
                    <Input placeholder="Todo" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                    <Button colorScheme="blue" variant="solid" onClick={createTodo}>
                        Submit
                    </Button>
                </InputGroup>
            </Stack>
            <Table variant="striped">
                <TableCaption>List All Todo</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Todo</Th>
                        <Th>Created At</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {todos?.map((todo, i) => (
                        <Tr key={i}>
                            <Td>{todo.name}</Td>
                            <Td>{todo.created_at}</Td>
                            <Td>
                                <Stack direction="row" spacing={4}>
                                    <Button colorScheme="teal" variant="solid" onClick={async () => {await getTodo(todo.id); onOpen()}}>
                                        Edit
                                    </Button>
                                    <Button colorScheme="red" variant="solid" onClick={() => deleteTodo(todo.id)}>
                                        Delete
                                    </Button>
                                </Stack>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}