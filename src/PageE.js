import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, ScrollView,Dimensions} from 'react-native';

import { NavigationBar,Input,Label } from 'teaset';
import { Avatar,Button,PricingCard,Icon } from 'react-native-elements';

import { Router, Scene,Actions } from 'react-native-router-flux';

export default class PageE extends Component {
  render() {
    return (
      <Router>
        <Scene  key="root" >
          <Scene navBar={nav} key="pageE" component={PageEContent} title="藤椒资讯" initial={true} 
          titleStyle={{
          	color:'#fff',
          	textAlign:'center',
          	fontWeight:'normal',
          	fontSize:20
          }}
          />
          <Scene navBar={subnav} key="pageEsub" component={userContent} title="咨询详情"/>
        </Scene>
      </Router>
    )
  }
}

const nav = () => (
	<NavigationBar title='用户信息' />
);
const subnav = () => (
	<NavigationBar title='个人信息' leftView={<NavigationBar.BackButton title='返回' onPress={() => Actions.pop()}/>} />
);


const styles = StyleSheet.create({
  page: {
    flex: 1,
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class PageEContent extends Component{
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
		        <ScrollView showsVerticalScrollIndicator={false}
			        horizontal={false} 
					style={{
			        	width:'100%',
			        	marginLeft:5,
			        }}>
		        	<View style={{
		        	width:Dimensions.get('window').width - 10,
		        	marginBottom:5,
		        	flexDirection: 'row',
				    justifyContent: 'center',
				    alignItems: 'center',
				    backgroundColor:'#fff',
				    borderBottomLeftRadius:5,
				    borderBottomRightRadius:5,
				    borderTopLeftRadius:5,
				    borderTopRightRadius:5,
				    marginTop:75,
		        	}}>
						<PricingCard
						  color='#337ab7'
						  title='标准版'
						  price='￥-/年'
						  info={['监测统计', '专业咨询', '专家提问']}
						  button={{ title: '加入', icon: 'flight-takeoff' }}
						  titleStyle={{
						  	fontSize:14
						  }}
						  pricingStyle={{
						  	fontSize:20
						  }}
						  infoStyle={{
						  	fontSize:14,
						  }}
						  containerStyle={{
						  	width:(Dimensions.get('window').width - 50)/2,
						  	borderWidth:0,
						  	borderRadius:5,
						  	boxShadow:'none',
						  	backgroundColor:'rgb(250,250,250)',
						  	marginRight:5,
						  }}
						/>
						<PricingCard
						  color='#9966FF'
						  title='定制版'
						  price='￥-/年'
						  info={['定制硬件', '实时监控', '精确数据']}
						  button={{ title: '加入', icon: 'flight-takeoff' }}
						  titleStyle={{
						  	fontSize:14
						  }}
						  pricingStyle={{
						  	fontSize:20
						  }}
						  infoStyle={{
						  	fontSize:14,
						  }}
						  containerStyle={{
						  	width:(Dimensions.get('window').width - 50)/2,
						  	borderWidth:0,
						  	borderRadius:5,
						  	boxShadow:'none',
						  	backgroundColor:'rgb(250,250,250)',
						  	marginLeft:5,
						  }}
						/>
						
					</View>
		        	
					
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
							  onPress={Actions.pageEsub}
							/>
						</View>
					</View>



					<View style={{
		        	width:Dimensions.get('window').width - 10,
		        	height:300,
		        	flexDirection: 'column',
				    justifyContent: 'center',
				    alignItems: 'center',
				    backgroundColor:'#fff',
				    borderBottomLeftRadius:5,
				    borderBottomRightRadius:5,
				    borderTopLeftRadius:5,
				    borderTopRightRadius:5,
				    marginTop:5,
				    marginBottom:10,
		        	}}>
			        	<View style={{
				        	height:50,
				        	flexDirection: 'column',
					    	justifyContent: 'center',
					    	alignItems: 'center',
				        }}>
				        	<Label style={{color: '#666', fontSize: 20}} text='新用户注册' />
				        </View>
				        <View style={{
				        	height:220,
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
							  placeholder="手机号"
							/>
							<Input
							  style={{width: 250, backgroundColor: 'rgb(250,250,250)', borderColor: '#fff', color: '#333', textAlign: 'left'}}
							  onChangeText={text => this.setState({valueCustom: text})}
							  placeholder="密码"
							/>
							<Input
							  style={{width: 250, backgroundColor: 'rgb(250,250,250)', borderColor: '#fff', color: '#333', textAlign: 'left'}}
							  onChangeText={text => this.setState({valueCustom: text})}
							  placeholder="确认密码"
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
							  title='注册'
							  buttonStyle={{
							    backgroundColor: "#66CCFF",
							    width: 200,
							  }}
							/>
						</View>
					</View>
					

				</ScrollView>
				<NavigationBar title='用户信息' />
				</ImageBackground>
			</View>
		);
	}
}




class userContent extends Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<View style={styles.page}>
				<ScrollView 
			        showsVerticalScrollIndicator={false}
			        horizontal={false} 
					style={{
			        	width:Dimensions.get('window').width - 20,
			        	margin:10,
			        	marginBottom:0,
			        }}>
			        <View style={{marginTop:70, padding:10,backgroundColor:'#fff', borderRadius:5, 
			        	width:Dimensions.get('window').width - 20,
			        	flexDirection: 'row',
					    justifyContent: 'space-between',
					    alignItems: 'center',
			        }}>
			        	<View style={{
			        		flexDirection: 'column',
						    justifyContent: 'center',
						    alignItems: 'center',
						    width:(Dimensions.get('window').width - 40)/2,
			        	}}>
							<Avatar
							  size={50}
							  rounded
							  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
							  onPress={() => console.log("Works!")}
							  activeOpacity={0.7}
							/>
							<Text style={{marginTop:10,color:'#333',fontSize:16}}>用户名
							</Text>
						</View>
						<View style={{
			        		flexDirection: 'column',
						    justifyContent: 'center',
						    alignItems: 'center',
						    width:(Dimensions.get('window').width - 40)/2,
			        	}}>
							<Text style={{margin:10,color:'#333',fontSize:14}}>18012345678
							</Text>
							<Text style={{margin:10,color:'#333',fontSize:14}}>四川省绵阳市三台县
							</Text>
							<Text style={{margin:10,color:'#333',fontSize:14}}>拥有10000株藤椒
							</Text>
							<Text style={{margin:10,color:'#333',fontSize:14}}>普通用户
							</Text>
						</View>
					</View>
					<View style={{marginTop:5, padding:10,backgroundColor:'#fff', borderRadius:5, 
			        	width:Dimensions.get('window').width - 20,
			        	height:150,
			        	flexDirection: 'row',
					    justifyContent: 'center',
					    alignItems: 'center',
			        }}>
			        	<Text>问卷调差</Text>
					</View>
				
					<View style={{
						width:Dimensions.get('window').width - 20,
						height:Dimensions.get('window').width/4,
						flexDirection: 'row',
		    			justifyContent: 'center',
		    			alignItems: 'center',
					}}>
						<Button
						  large
						  icon={<Icon
							    	type="feather"
							      	name={'edit'}
							      	size={20}
							      	color='#fff'
							    />}
						  title={'修改'} 
						  buttonStyle={{
							    backgroundColor: "#337ab7",
							    width: 200,
							    color:'#fff',
							    height:40,
							  }}/>

					</View>
				</ScrollView>
			</View>
		);
	}
}
