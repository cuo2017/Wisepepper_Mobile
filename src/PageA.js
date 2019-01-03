import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView,Dimensions,TouchableHighlight} from 'react-native';
import {CardA, CardB, CardC, CardD, CardE} from './Components/Primary';
import {NavigationBar,Overlay,Label} from 'teaset';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import moment from 'moment';
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
		        <ParallaxScrollView
		        	style={{
			        	width:Dimensions.get('window').width-10,
			        	marginTop:72.5,
			        	marginLeft:5,
			        	marginRight:5,
			        	
			        }}
			        showsVerticalScrollIndicator={false}
			      	backgroundColor="rgb(255,255,255,0)"
			      	parallaxHeaderHeight={100}
			      	contentContainerStyle={{
			      		backgroundColor:'rgb(255,255,255,0)',
			      	}}
			      	fadeOutForeground
			      	renderForeground={() => (
			       <View style={{ 
			       	borderTopLeftRadius:5,
		        	borderTopRightRadius:5,
		        	borderBottomLeftRadius:5,
		        	borderBottomRightRadius:5,
		        	backgroundColor:'#fff',
			       	height: 100, width:Dimensions.get('window').width-10, alignItems: 'center', justifyContent: 'center' }}>
			        	<Text>四川省绵阳市</Text>
			        	<Text>{moment(Date()).format('ll')}</Text>
			        </View>
			      )}>
			      	<View style={{paddingTop:2.5,width:'100%',backgroundColor:'rgb(255,255,255,0)'}}>
			      	<CardA />
			        <CardB />
			        <CardC />
			        <CardD />
			        <CardE />
			        </View>

			    </ParallaxScrollView>
				</ImageBackground>

				
		        <NavigationBar title='智慧藤椒' />
			</View>
		);
	}
}