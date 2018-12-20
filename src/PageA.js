import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import {CardA, CardB, CardC, CardD, CardE} from './Components/Primary';
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
			abc:'efg',
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
			        	width:'100%',
			        	height:100,
			        	flexDirection: 'row',
					    justifyContent: 'space-between',
					    alignItems: 'flex-end',
					    padding:10,
			        }}>
			        	<View style={{

			        		flex:1,
			        		flexDirection: 'row',
						    justifyContent: 'flex-start',
						    alignItems: 'center',
			        	}}>
							<Text style={{
								color:'#fff',
								fontSize:17
							}}>{'四川省绵阳市'}</Text>
						</View>
						<View style={{
			        		flex:1,
			        		flexDirection: 'row',
						    justifyContent: 'flex-end',
						    alignItems: 'center',
			        	}}>
							<Text style={{
								color:'#fff',
								fontSize:17
							}}>{moment(Date()).format('ll')}</Text>
						</View>
			        </View>
			        <CardA />
			        <CardB />
			        <CardC />
			        <CardD />
			        <CardE />
		        </ScrollView>
				</ImageBackground>
			</View>
		);
	}
}