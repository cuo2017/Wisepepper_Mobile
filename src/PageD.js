import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,ImageBackground, ScrollView, Image} from 'react-native';
import {BarA, BarB} from './Components/Primary';
import {NavigationBar,SegmentedView, Label, ListRow} from 'teaset';
import { Icon,Avatar,Divider,Button } from 'react-native-elements';

import { Router, Scene,Actions } from 'react-native-router-flux';

const CONTENT = "我家的藤椒在9月份的时候，不知道怎么回事最近就得了锈病了，叶子上全是锈斑，专家可以解答一下吗?";
const SOLUTION = "建议你在种植的时候预防锈病，不要让土壤水分太高。另外9月份本来就是锈病高爆发的时期，所以希望在这个时间段可以做好心里准备来应对灾害";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const nav = () => (
	<NavigationBar title='专家解答' />
);
const subnav = () => (
	<NavigationBar title='问题详情' leftView={<NavigationBar.BackButton title='返回' onPress={() => Actions.pop()}/>} />
);

export default class PageD extends Component {
  render() {
    return (
      <Router>
        <Scene  key="root" >
          <Scene navBar={nav} key="pageD" component={PageDContent} title="藤椒资讯" initial={true} 
          titleStyle={{
          	color:'#fff',
          	textAlign:'center',
          	fontWeight:'normal',
          	fontSize:20
          }}
          />
          <Scene navBar={subnav} key="pageDsub" component={ListItemContent} title="咨询详情"/>
        </Scene>
      </Router>
    )
  }
}

class PageDContent extends Component{
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
		        <View style={{flex: 1,marginTop:68}}>
				  	
					        <ScrollView 
						        showsVerticalScrollIndicator={false}
						        horizontal={false} 
								style={{
						        	width:'100%',
						        }}>
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
					        </ScrollView>
				    </View>
			    <NavigationBar title='专家解答' />
				</ImageBackground>
			</View>
		);
	}

	// 
}



const ListItem = () => (
	<View style={{
    	backgroundColor:'#fff',
    	height:150,
    	borderTopLeftRadius:5,
		borderTopRightRadius:5,
		borderBottomLeftRadius:5,
		borderBottomRightRadius:5,
		marginLeft:5,
	    marginRight:5,
	    marginTop:2.5,
	    marginBottom:2.5,
	    flexDirection: 'column',
	    justifyContent: 'flex-start',
	    alignItems: 'flex-start',
	    padding:10,
    }}>
    	<View style={{
    		height:50,
    		width:Dimensions.get('window').width-30,
    		flexDirection: 'row',
	    	justifyContent: 'flex-start',
	    	alignItems: 'center',
	    }}>
	    	<Avatar
			  size={25}
			  rounded
			  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
			  onPress={() => console.log("Works!")}
			  activeOpacity={0.7}
			/>
			<Text onPress={Actions.pageDsub}
			style={{
    			color:'#666',
    			fontSize:16,
    			marginLeft:10,
    		}}>嚣张的某网友</Text>
		</View>
    	<View style={{
    		height:80,
    		width:Dimensions.get('window').width-30,
    		flexDirection: 'column',
	    	justifyContent: 'center',
	    	alignItems: 'flex-start',
	    	backgroundColor:'rgb(250,250,250)',
	    	borderRadius:5,
    	}}>
    		<View style={{
    			width:Dimensions.get('window').width-50,
    			flexDirection: 'row',
		    	justifyContent: 'space-between',
		    	alignItems: 'center',
		    	margin:10,
    			}}>
	    		<Text onPress={Actions.pageDsub}
	    		style={{
	    			color:'#333',
	    			fontSize:16,
	    			fontWeight:'bold',
	    		}}>我家藤椒遇到锈病了该怎么办啊？</Text>
	    		<Text style={{
	    			color:'#999',
	    			fontSize:12,
	    		}}>2018.12.31</Text>
    		</View>
    		<View style={{
    			width:Dimensions.get('window').width-50,
    			flexDirection: 'row',
		    	justifyContent: 'space-between',
		    	alignItems: 'center',
		    	margin:10,
    		}}>
    			<View style={{
    			flexDirection: 'row',
		    	justifyContent: 'flex-start',
		    	alignItems: 'center',
    			}}>
	    			<Icon name='comment' size={14} type='evilicons' color='#66CC99'/>
		    		<Text style={{
		    			color:'#666',
		    			fontSize:14,
		    		}}>已有专家回复</Text>
	    		</View>
	    		<Text style={{
	    			color:'#999',
	    			fontSize:12,
	    		}}>2019.1.1</Text>
    		</View>
    	</View>
    </View>
);


class ListItemContent extends Component {
	constructor(props){
		super(props);
		this.state={
		}
	}
	
	render(){
		return(
			<View style={{
				backgroundColor:'#fff',
			}}>
				<ScrollView 
			        showsVerticalScrollIndicator={false}
			        horizontal={false} 
					style={{
			        	width:Dimensions.get('window').width - 20,
			        	margin:10,
			        	marginBottom:0,
			        	paddingBottom:10,
			        }}>
			        <View style={{marginTop:70, paddingBottom:10}}>
						<Text style={{
							fontSize:20,
							fontWeight:'bold',
							color:'#333',
							marginBottom:5,
							letterSpacing:2,
						}}>我家藤椒遇到锈病了该怎么办啊？</Text>
						<Text>2019.1.1</Text>
					</View>
					<View style={{paddingBottom:20}}>
						<Image
				    	source={require('../dist/images/pepper.jpg')}
				    	style={{
				    		borderTopLeftRadius:5,
	    					borderTopRightRadius:5,
	    					borderBottomLeftRadius:5,
	    					borderBottomRightRadius:5,
				    		width:Dimensions.get('window').width - 20,
				    		height:Dimensions.get('window').width/2,
				    	}}
				    	/>
						<Text style={{
							marginTop:10,
							fontSize:16,
							color:'#666',
							textIndent:20,
							letterSpacing:3,
							lineHeight:25,
						}}>
							{CONTENT}
						</Text>
					</View>
					<View style={{
						width:Dimensions.get('window').width - 20,
						flexDirection: 'column',
		    			justifyContent: 'center',
		    			alignItems: 'center',
		    			borderRadius:5,
		    			backgroundColor:'rgb(250,250,250)',
					}}>
						<View style={{
							flexDirection:'row',
							justifyContent:'space-between',
							alignItems:'center',
							width:Dimensions.get('window').width - 20,
							padding:10,
						}}>
							<View style={{
								flexDirection:'row',
								justifyContent:'flex-start',
								alignItems:'flex-start',
							}}>
								<Avatar
								  size={25}
								  rounded
								  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
								  onPress={() => console.log("Works!")}
								  activeOpacity={0.7}
								/>
								<Text
								style={{
					    			color:'#666',
					    			fontSize:16,
					    			marginLeft:10,
					    		}}>专家</Text>
				    		</View>
				    		<View>
				    			<Text>2019.1.1
				    			</Text>
				    		</View>
						</View>
						<View style={{padding:10}}> 
							<Text style={{
								fontSize:16,
								color:'#333',
								textIndent:20,
								letterSpacing:3,
								lineHeight:25,
							}}>{SOLUTION}</Text>
						</View>
						

					</View>
				</ScrollView>
			</View>
		);
	}
}