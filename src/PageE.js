import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView,Dimensions} from 'react-native';

import { Input,Label } from 'teaset';
import { Button,PricingCard,Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
		        	width:Dimensions.get('window').width - 10,
		        	height:200,
		        	flexDirection: 'column',
				    justifyContent: 'center',
				    alignItems: 'center',
				    backgroundColor:'#fff',
				    borderBottomLeftRadius:5,
				    borderBottomRightRadius:5,
				    borderTopLeftRadius:5,
				    borderTopRightRadius:5,
		        	}}>
			        	<View style={{
				        	height:50,
				        	flexDirection: 'column',
					    	justifyContent: 'center',
					    	alignItems: 'center',
				        }}>
				        	<Label style={{color: '#666', fontSize: 20}} text='用户登录' />
				        </View>
				        <View style={{
				        	height:120,
				        	flexDirection: 'column',
					    	justifyContent: 'space-between',
					    	alignItems: 'center',
				        }}>
							<Input
							  style={{width: 250, backgroundColor: 'rgb(250,250,250)', borderColor: '#fff', color: '#333', textAlign: 'left'}}
							  onChangeText={text => this.setState({valueCustom: text})}
							  placeholder="用户名"
							/>
							<Input
							  style={{width: 250, backgroundColor: 'rgb(250,250,250)', borderColor: '#fff', color: '#333', textAlign: 'left'}}
							  onChangeText={text => this.setState({valueCustom: text})}
							  placeholder="密码"
							/>
							<Button
							  icon={
							    <Icon
							    	type="feather"
							      	name='log-in'
							      	size={15}
							      	color='#fff'
							    />
							  }
							  title='登录'
							  buttonStyle={{
							    backgroundColor: "#66CC99",
							    width: 200,
							  }}
							/>
						</View>
					</View>
					<View style={{
		        	width:Dimensions.get('window').width - 10,
		        	marginTop:10,
		        	flexDirection: 'row',
				    justifyContent: 'center',
				    alignItems: 'center',
				    backgroundColor:'#fff',
				    borderBottomLeftRadius:5,
				    borderBottomRightRadius:5,
				    borderTopLeftRadius:5,
				    borderTopRightRadius:5,
		        	}}>
						<PricingCard
						  color='#6699FF'
						  title='标准版'
						  price='￥-/年'
						  info={['监测统计', '专业咨询', '专家提问']}
						  button={{ title: '加入', icon: 'flight-takeoff' }}
						  titleStyle={{
						  	fontSize:20
						  }}
						  pricingStyle={{
						  	fontSize:40
						  }}
						/>
						<PricingCard
						  color='#9966FF'
						  title='定制版'
						  price='￥-/年'
						  info={['定制硬件', '实时监控', '精确数据']}
						  button={{ title: '加入', icon: 'flight-takeoff' }}
						  titleStyle={{
						  	fontSize:20
						  }}
						  pricingStyle={{
						  	fontSize:40
						  }}
						/>
					</View>
				</View>
				</ImageBackground>
			</View>
		);
	}
}