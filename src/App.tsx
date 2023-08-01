import { useState } from "react";
import ListGroup from "./componenets/ListGroup";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
import Exersice from "./componenets/Exersice";

function App() {
  let items = ["adama", "addis", "shager", "gonder"];
  const handleSelected = (item: string) => {
    console.log(item);
  };
  const handlAlert = (e: MouseEvent) => {
    e.preventDefault();
  };
  const [alerVisibile, setAlertVisble] = useState(false);
  // for exercis
  const [visble, setVisiblity] = useState(false);
  return (
    <div>
      {/* <ListGroup items={items} heading="cities" onSelectedItem={handleSelected}/> */}

      {/* <Alert> */}
      {/* Mengsitu abebe */}
      {/* if i want to send html we need to change the interfance datatype in to reactnode */}
      {/* </Alert> */}
      {/* {alerVisibile && <Alert onClose={()=>setAlertVisble(false)}>my alert</Alert>}
      <Button
        color="danger"
        onClick={() => setAlertVisble(true)}
      >
        my Button
      </Button> */}
      {/* exerices */}
      { visble && <Alert onClose={()=>setVisiblity(false)}>my alert</Alert>}
      <Exersice color="primary" onClick={() => setVisiblity(true)}>
        Click
      </Exersice>
    </div>
  );
}

export default App;
