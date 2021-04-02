import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
    return (
      
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
             <DisplayBalance title='Income' value='1234.5' color='green'></DisplayBalance>
             <DisplayBalances></DisplayBalances>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='Expence' value='675.7' color='red'></DisplayBalance>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances
