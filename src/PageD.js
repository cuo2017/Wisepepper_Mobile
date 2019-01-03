import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,ImageBackground, ScrollView, Image} from 'react-native';
import {BarA, BarB} from './Components/Primary';
import {NavigationBar,SegmentedView, Label, ListRow} from 'teaset';
import { Icon,Avatar,Divider } from 'react-native-elements';

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

export default class PageD extends Component{
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
    	minHeight:120,
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
			  size="small"
			  rounded
			  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
			  onPress={() => console.log("Works!")}
			  activeOpacity={0.7}
			/>
			<Text style={{
    			color:'#666',
    			fontSize:16,
    			marginRight:10,
    		}}>嚣张的某网友</Text>
		</View>
    	<View style={{
    		height:110,
    		width:Dimensions.get('window').width-30,
    		flexDirection: 'column',
	    	justifyContent: 'space-between',
	    	alignItems: 'flex-start',
    	}}>
    		<View style={{
    			width:Dimensions.get('window').width-50,
    			flexDirection: 'row',
		    	justifyContent: 'space-between',
		    	alignItems: 'center',
		    	margin:10,
    			}}>
	    		<Text style={{
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