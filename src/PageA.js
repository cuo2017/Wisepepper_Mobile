import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import {CardA, CardB, CardC, CardD, CardE} from './Components/Primary';
import {NavigationBar,Overlay,Label} from 'teaset';
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

export default class PageA extends Component{
	constructor(props){
		super(props)
		this.state = {
			isVisible:false,
		}
	}
	render(){
		return(
			<View style={styles.page}>
				<ImageBackground source={require('../dist/images/bg.jpeg')} style={{
		          width:'100%',
		          height:'100%',
		        }}>
		        
				<ScrollView 
			        showsVerticalScrollIndicator={false}
			        horizontal={false} 
					style={{
			        	width:'100%',
			        }}>
			        <View style={{
			        	height:0,
					    marginTop:72.5,
			        }}>
			        </View>
			        <CardA />
			        <CardB />
			        <CardC />
			        <CardD />
			        <CardE />
		        </ScrollView>
		        <NavigationBar title='智慧藤椒' />
				</ImageBackground>
			</View>
		);
	}
}