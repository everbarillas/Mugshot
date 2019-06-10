import React, {Component} from 'react';
import { Router, Scene, Stack} from "react-native-router-flux";
import Landing from './landing'
import Movies from './movies'
import Profile from './profile'
type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        <Router>
          <Stack key="root">
            <Scene key='landing' component={Landing} title='Landing Page' initial/>
            <Scene key='movie' component={Movies} title='Movies Page'/>
            <Scene key='profile' component={Profile} title='Profile Page'/>

          </Stack>
        </Router>
    );
  }
}

