import { useDispatch, useSelector } from "react-redux";
import {depositar, retirar} from "../../store/actions/accountAction"

function Bank() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.account);
  return (
    <>
      <button
        onClick={() => {
          dispatch(depositar(100));
        }}
      >
        Depositar
      </button>
      <div className="white-text">{counter}</div>
      <button
        onClick={() => {
          dispatch(retirar(100));
        }}
      >
        Retirar
      </button>
    </>
  );
}

export default Bank;
