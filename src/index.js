import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabView} from 'teaset';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';
import PageE from './PageE';
import { Icon } from 'react-native-elements';


export default class App extends Component {
  render(){
    return(
      <View style={{
      	flex:1,
      	height:'100%',
      	width:'100%',
      	flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center',
      }}>
        <TabView style={{flex: 1,width:'100%'}} type='projector'>
		  <TabView.Sheet
		    title='首页'
		    icon={<Icon name='home' type='font-awesome' color='#ccc'/>}
		    activeIcon={<Icon name='home' type='font-awesome' color='#337ab7' />}
		  >
		  	<PageA />
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='监测'
		    icon={<Icon name='dashboard' type='font-awesome' color='#ccc' />}
		    activeIcon={<Icon name='dashboard' type='font-awesome' color='#337ab7' />}
		  >
		  	<PageB />
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='资讯'
		    icon={<Icon name='envelope' type='font-awesome' color='#ccc'/>}
		    activeIcon={<Icon name='envelope' type='font-awesome' color='#337ab7' />}
		  >
		  	<PageC />
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='专家'
		    icon={<Icon name='comments' type='font-awesome' color='#ccc'/>}
		    activeIcon={<Icon name='comments' type='font-awesome' color='#337ab7' />}
		  >
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='用户'
		    icon={<Icon name='users' type='font-awesome' color='#ccc'/>}
		    activeIcon={<Icon name='users' type='font-awesome' color='#337ab7' />}
		  >
		  	<PageE />
		  </TabView.Sheet>
		</TabView>
      </View>
    );
  }
}