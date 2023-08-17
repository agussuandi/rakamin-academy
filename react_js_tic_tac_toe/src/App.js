import * as React from 'react';

import { Box, Button, Center, Container, Flex, Text } from '@chakra-ui/react'

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [nextValue, setNextValue] = React.useState('X');
  const winner = calculateWinner(squares);

  function selectSquare(square) {
    if (squares[square] || winner) {
      return;
    }
    const newSquares = [...squares];
    newSquares[square] = nextValue;
    setSquares(newSquares);
    setNextValue(calculateNextValue(newSquares));
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setNextValue('X');
  }

  function renderSquare(i) {
    return (
      <Button colorScheme="teal" m={1} variant="outline" onClick={() => selectSquare(i)}>
        {squares[i]}
      </Button>
    );
  }

  const status = calculateStatus(winner, squares, nextValue);

  return (
    <Container>
      <Center pt={10} fontSize={'lg'}>{status}</Center>
      <Flex justifyContent="center" alignItems="center" h="30vh">
        <Flex color="white" justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
          <Box>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </Box>
          <Box>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </Box>
          <Box>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </Box>
          <Button m={2} colorScheme="blue" onClick={restart}>Restart</Button>
        </Flex>
      </Flex>
    </Container>
  );
}

function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
    </div>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
