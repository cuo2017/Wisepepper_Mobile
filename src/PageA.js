import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView,Dimensions,TouchableHighlight} from 'react-native';
import {CardA, CardB, CardC, CardD, CardE} from './Components/Primary';
import {NavigationBar,Overlay,Label,Carousel} from 'teaset';
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
			      		<View style={{flex:1,borderTopLeftRadius:5,
		        			borderTopRightRadius:5,
		        			borderBottomLeftRadius:5,
		        			borderBottomRightRadius:5,}}>
			      		<ImageBackground source={require('../dist/images/sun.jpg')} style={{
				          	width:Dimensions.get('window').width-10,
				          	borderRadius:5,
				          	height:100,
				          	alignItems: 'center', justifyContent: 'center' 
				        	}}
				        	imageStyle={{
				        		borderRadius:5,
				        	}}
				        	>
			      	<Carousel
					  style={{alignItems: 'flex-end',borderTopLeftRadius:5,
		        			borderTopRightRadius:5,
		        			borderBottomLeftRadius:5,
		        			borderBottomRightRadius:5,
		        			backgroundColor:'rgb(0,0,0,0)',
		        			height: 100,
		        			width:Dimensions.get('window').width-10,}}
					  control={false}
					>
						
				       <View style={{ 
				       		height: 100,

				       	 	width:Dimensions.get('window').width-10, alignItems: 'center', justifyContent: 'center' }}>

				        		<Text style={{fontSize:20,color:'#fff'}}>{'四川省绵阳市'}</Text>
				        		<Text style={{fontSize:14,color:'#fff'}}>{'当前地点'}</Text>
				        	
				        </View>
				        <View style={{ 
				       		height: 100,
				       	 	width:Dimensions.get('window').width-10, alignItems: 'center', justifyContent: 'center' }}>
				        	<Text style={{fontSize:20,color:'#fff'}}>{moment(Date()).format('ll')}</Text>
			        		<Text style={{fontSize:14,color:'#fff'}}>{'当前日期'}</Text>
			        	</View>
			        	<View style={{ 
				       		height: 100,
				       	 	width:Dimensions.get('window').width-10, alignItems: 'center', justifyContent: 'center' }}>
				        	<Text style={{fontSize:20,color:'#fff'}}>{ 4 + '°C'}</Text>
				        	<Text style={{fontSize:14,color:'#fff'}}>{'体感温度'}</Text>
			        	</View>
			        	<View style={{ 
				       		height: 100,
				       	 	width:Dimensions.get('window').width-10, alignItems: 'center', justifyContent: 'center' }}>
				        	<Text style={{fontSize:20,color:'#fff'}}>{'晴'}</Text>
				        	<Text style={{fontSize:14,color:'#fff'}}>{'当前天气'}</Text>
			        	</View>

			        </Carousel>
			        </ImageBackground>
			        </View>
			      )}>
			      	<View style={{marginTop:2.5,width:'100%',backgroundColor:'rgb(255,255,255,0)'}}>
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