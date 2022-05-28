import { Title, Container, Count, Button, AddBtn, MinusBtn } from '../styled-components/counter';

type CounterProps = {
    count: number,
    onIncrease: () => void,
    onDecrease: () => void,
    onIncreaseBy: (diff: number) => void
}

const Counter = ({count, onIncrease, onDecrease, onIncreaseBy}: CounterProps) => {

    return (
        <Container>
            <Title>Counter</Title>
            <Count>{count}</Count>
            <Button>
                <AddBtn onClick={() => onIncrease()}>+</AddBtn>
                <MinusBtn onClick={()=> onDecrease()}>-</MinusBtn>
                <MinusBtn onClick={() => onIncreaseBy(5)}>+5</MinusBtn>
            </Button>
        </Container>
    );
}

export default Counter;