import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
   
      <Container>
        <Header as="h1">Budget</Header>


        <Statistic size="small">
          <Statistic.Label>your balance: </Statistic.Label>
          <Statistic.Value>2,3366</Statistic.Value>
        </Statistic>


        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{textAlign: "left"}}>Incoming...</Statistic.Label>
                  <Statistic.Value>2,3366</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
              <Statistic size="tiny" color="green">
                  <Statistic.Label style={{textAlign: "left"}}>Expense...</Statistic.Label>
                  <Statistic.Value>6,234</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as="h3">History</Header>

        <Segment color="red">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Somthing</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$50</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered></Icon>
                <Icon name='trash' bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>

        <Segment color="green">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Somthing else</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$767</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered></Icon>
                <Icon name='trash' bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
        <Segment color="red">
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Somthing</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$120</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered></Icon>
                <Icon name='trash' bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>

        <Header as="h3">Add New Transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input icon='tags' width={12} Label='Description' placeholder="new shiny thing"></Form.Input>
            <Form.Input width={4} Label='Value' placeholder="100.00" icon='dollar' iconPosition='left'></Form.Input>
          </Form.Group>
          <Button.Group style={{marginTop:20}}>
            <Button>Cancel</Button>
            <Button.Or></Button.Or>
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>

      </Container>
 
  );
}

export default App;
