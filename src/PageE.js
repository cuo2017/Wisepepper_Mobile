import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';

import { Input,Label,Button } from 'teaset';


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

export default class PageE extends Component{
	constructor(props){
		super(props)
		this.state = {
			abc:'efg',
		}
	}
	render(){
		return(
			<View style={styles.page}>
				<ImageBackground source={require('../dist/images/bg2.jpeg')} style={{
		          width:'100%',
		          height:'100%',
		        }}>
		        <View style={{
		        	flex:1,
		        	flexDirection: 'column',
				    justifyContent: 'center',
				    alignItems: 'center',
		        }}>
		        	<View style={{
			        	height:100,
			        	flexDirection: 'column',
				    	justifyContent: 'center',
				    	alignItems: 'center',
			        }}>
			        	<Label style={{color: '#fff', fontSize: 20}} text='登录' />
			        </View>
			        <View style={{
			        	height:120,
			        	flexDirection: 'column',
				    	justifyContent: 'space-between',
				    	alignItems: 'center',
			        }}>
						<Input
						  style={{width: 250, backgroundColor: '#fff', borderColor: '#fff', color: '#333', textAlign: 'left'}}
						  onChangeText={text => this.setState({valueCustom: text})}
						  placeholder="用户名"
						/>
						<Input
						  style={{width: 250, backgroundColor: '#fff', borderColor: '#fff', color: '#333', textAlign: 'left'}}
						  onChangeText={text => this.setState({valueCustom: text})}
						  placeholder="密码"
						/>
						<Button
						  title='登录'
						  type='secondary'
						/>
					</View>
				</View>
				</ImageBackground>
			</View>
		);
	}
}