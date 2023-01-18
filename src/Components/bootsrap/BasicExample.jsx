import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1-Модуль</Accordion.Header>
        <Accordion.Body>
          <div className="five">Математика: 4</div>
          <div className="five">История Кыргызстана : 5</div>
          <div className="five">Административное право : 3</div>
          <div className="five">Английский язык : 3</div>
          <div className="five">Русский язык : 4</div>
          <div className="five">Кыргызская язык и литература : 4</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2-Модуль</Accordion.Header>
        <Accordion.Body>
          <div className="five">Математика: 3</div>
          <div className="five">История Кыргызстана : 5</div>
          <div className="five">Административное право : 5</div>
          <div className="five">Английский язык : 3</div>
          <div className="five">Русский язык : 5</div>
          <div className="five">Кыргызская язык и литература : 4 </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
