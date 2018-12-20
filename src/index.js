import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabView} from 'teaset';
import PageA from './PageA';

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
		  >
		  	<PageA />
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='监测'
		  >
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='咨询'
		  >
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='专家'
		  >
		  </TabView.Sheet>
		  <TabView.Sheet
		    title='用户'
		  >
		  </TabView.Sheet>
		</TabView>
      </View>
    );
  }
}