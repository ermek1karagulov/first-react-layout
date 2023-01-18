import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Btns() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        className="btn-one"
        variant="secondary"
        onClick={() => window.alert("Врмея перездачи 1-модуля закончена")}
      >
        Пересдать 1-Модуль
      </Button>
      <Button
        className="btn-two"
        variant="secondary"
        onClick={() =>
          window.alert("Время перздачи 2-ого модуля откроется 19.01.2023")
        }
      >
        Пересдать 2-Модуль
      </Button>
    </ButtonGroup>
  );
}

export default Btns;
