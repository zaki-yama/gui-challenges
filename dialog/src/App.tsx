import { useRef } from "react";
import "./App.css";

const App = () => {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null);

  const handleClick = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <form method="dialog">
          <p>Hi, I'm a dialog.</p>
          <button>OK</button>
        </form>
      </dialog>

      <button onClick={handleClick}>Open Dialog</button>
    </>
  );
};

export default App;
