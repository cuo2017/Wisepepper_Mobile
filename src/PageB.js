import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import {BarA, BarB} from './Components/Primary';
import {NavigationBar} from 'teaset';
const styles = StyleSheet.create({
  page: {
    flex: 1,
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

export default class PageB extends Component{
	constructor(props){
		super(props)
		this.state = {
			abc:'efg',
		}
	}
	render(){
		return(
			<View style={styles.page}>

				<ImageBackground source={require('../dist/images/bg3.jpeg')} style={{
		          width:'100%',
		          height:'100%',
		        }}>
		        
				<ScrollView 
			        showsVerticalScrollIndicator={false}
			        horizontal={false} 
					style={{
						marginTop:70,
			        	width:'100%',
			        }}>
			        <BarA />
			        <BarB />
		        </ScrollView>
			    <NavigationBar title='图表监测' />
				</ImageBackground>
			</View>
		);
	}
}