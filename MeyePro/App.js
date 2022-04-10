import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './App/Screens/Login';
import Signup from './App/Screens/Signup';
import Dashboard from './App/Screens/Dashboard';
import LiveStreaming from './App/Screens/LiveStreaming';
import DetailsLiveStreaming from './App/Screens/DetailsLiveStreaming';
import Search from './App/Screens/Search';
import RecordedVideos from './App/Screens/RecordedVideos';
import Setting from './App/Screens/Setting';
import DetailsRecordedVideos from './App/Screens/DetailsRecordedVideos';
import RecordingMode from './App/Screens/RecordingMode';
import DVRsetting from './App/Screens/DVRsetting';
import AddDVR from './App/Screens/AddDVR';
import EditDVR from './App/Screens/EditDVR';
import Live from './App/Screens/Live';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{title: 'Login'}}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{title: 'Signup'}}
          component={Signup}
        />
        <Stack.Screen
          name="Dashboard"
          options={{title: 'Dasboard'}}
          component={Dashboard}
        />
        <Stack.Screen
          name="Live Streaming"
          options={{title: 'Live Streaming'}}
          component={LiveStreaming}
        />
        <Stack.Screen
          name="List"
          options={{title: 'Search'}}
          component={Search}
        />
        <Stack.Screen
          name="Recorded"
          options={{title: 'Recorded Videos'}}
          component={RecordedVideos}
        />
        <Stack.Screen
          name="Setting"
          options={{title: 'Setting'}}
          component={Setting}
        />
        <Stack.Screen
          name="DetailsLiveStreaming"
          options={{title:'Details Live Streaming'}}
          component={DetailsLiveStreaming}
        />
        <Stack.Screen
          name="DetailsRecordedVideos"
          options={{title: 'Details Recorded Videos'}}
          component={DetailsRecordedVideos}
        />
        <Stack.Screen
          name="RecordingMode"
          options={{title: 'Recording Mode'}}
          component={RecordingMode}
        />
         <Stack.Screen
          name="DVRsetting"
          options={{title: 'DVR Setting'}}
          component={DVRsetting}
        />
        <Stack.Screen
          name="AddDVR"
          options={{title: 'Add DVR '}}
          component={AddDVR}
        />
         <Stack.Screen
          name="EditDVR"
          options={{title: 'Update DVR '}}
          component={EditDVR}
        />
        <Stack.Screen
          name="Live"
          options={{title: 'Live '}}
          component={Live}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
