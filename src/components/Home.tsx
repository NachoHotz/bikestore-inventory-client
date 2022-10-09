import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment, decrement, reset } from '../redux/reducer/index';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  const Increment = () => {
    dispatch(increment());
  };

  const Decrement = () => {
    dispatch(decrement());
  };

  const Reset = () => {
    dispatch(reset());
  };

  return (
    <div className={style.homeContainer}>
      <h1>Hello World!</h1>
      <span className={style.counter}>{counter}</span>
      <div className={style.buttonContainer}>
        <button onClick={Increment}>Increase</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrease</button>
      </div>
    </div>
  );
}
