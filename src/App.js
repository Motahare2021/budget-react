import {
  Container,
} from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget"></MainHeader>
      <DisplayBalance title='your balance:' value='2,3366' size='small'></DisplayBalance>
     
      <MainHeader title="History" type="h3"></MainHeader>

      <EntryLine description='income' value='$20.000'></EntryLine>
      <EntryLine description='expense' value='$10.000' isExpense></EntryLine>
      
      <MainHeader title="Add New Transaction" type="h3"></MainHeader>
      <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
