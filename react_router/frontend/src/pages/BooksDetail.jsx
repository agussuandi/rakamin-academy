import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Text,

  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookDetailById } from "../modules/fetch";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      {isLoading ? (
        <Skeleton height="300px" my="6" />
      ) : (
        <Flex my="6">
          <Card maxW="sm">
            <CardBody>
              <Image
                src={`http://localhost:8000/${book.image}`}
                alt={book.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{book.title}</Heading>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                  Author : {book.author}
                </Text>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                  Publisher : {book.publisher}
                </Text>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
                  Year & Pages : {book.year} | {book.pages} pages
                </Text>
              </Stack>
            </CardBody>
            {localStorage.getItem('token') && (
              <>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Popover>
                      <PopoverTrigger>
                        <Button colorScheme="red">Delete</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                          Are you sure you want to delete this book?
                        </PopoverBody>
                        <Button onClick={handleDeleteBook} colorScheme="red">
                          Delete
                        </Button>
                      </PopoverContent>
                    </Popover>
                    <Link to={`/editbook/${id}`} variant="ghost" colorScheme="blue">
                      <Button>Edit</Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </>
            )}
          </Card>
        </Flex>
      )}
    </Box>
  );
}
