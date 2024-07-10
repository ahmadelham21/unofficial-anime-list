import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";
import { Button, Typography } from "@mui/material";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    console.log(count);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    console.log(count);
  };

  return (
    <div>
      <Typography variant="h1" color="initial">
        {count}
      </Typography>
      <Button variant="contained" onClick={handleDecrement}>
        Decrement
      </Button>
      <Button variant="contained" onClick={handleIncrement}>
        Increment
      </Button>
    </div>
  );
};

export default Counter;
