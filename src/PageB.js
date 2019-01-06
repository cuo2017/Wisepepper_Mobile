import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import {BarA, BarB,BarC,BarD,BarE} from './Components/Primary';
import {NavigationBar,SegmentedView} from 'teaset';
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
		        <SegmentedView style={{flex: 1,marginTop:68}} type='projector'>
				  	<SegmentedView.Sheet title='统计' style={{paddingTop:0}}>
					    <ScrollView 
					        showsVerticalScrollIndicator={false}
					        horizontal={false} 
							style={{
								marginTop:2.5,
					        	width:'100%',
					        	marginLeft:5,
					        	marginRight:5,
					        }}>
					        <BarA />
					        <BarB />
					        <BarC />
					        <BarD />
				        </ScrollView>
					</SegmentedView.Sheet>
					<SegmentedView.Sheet title='监测' style={{paddingTop:0}}>
					    <ScrollView 
					        showsVerticalScrollIndicator={false}
					        horizontal={false} 
							style={{
								marginTop:2.5,
					        	width:'100%',
					        	marginLeft:5,
					        	marginRight:5,
					        }}>
					        <BarE />
				        </ScrollView>
					</SegmentedView.Sheet>
				</SegmentedView>
		        
				
			    <NavigationBar title='图表监测' />
				</ImageBackground>
			</View>
		);
	}
}