import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        maxWidth={"lg"}
        m={4} p={4}
        height={"250"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          maxH={{ base: "100%", sm: "200px" }}
          src={`http://localhost:8000/${image}`}
          alt="Book cover"
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">
              {title} ({year}) Karya {author}
            </Text>
          </CardBody>
          <CardFooter>
            <Text>Publisher : {publisher}</Text>
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  )
}