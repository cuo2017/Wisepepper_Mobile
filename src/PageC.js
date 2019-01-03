import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,ImageBackground, ScrollView, Image} from 'react-native';
import {BarA, BarB} from './Components/Primary';
import {NavigationBar,SegmentedView, Label, ListRow} from 'teaset';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
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

export default class PageC extends Component{
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
		        <SegmentedView style={{flex: 1,marginTop:68}} type='projector'>
				  	<SegmentedView.Sheet title='藤椒资讯' style={{paddingTop:0}}>
					    <View style={{flex: 1, alignItems: 'center'}}>
					         
					    </View>
					</SegmentedView.Sheet>
					<SegmentedView.Sheet title='锈病'>
					    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
					        </ScrollView>
					    </View>
				  	</SegmentedView.Sheet>
				  	<SegmentedView.Sheet title='虫害'>
					    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
						        
					        </ScrollView>
					    </View>
				  	</SegmentedView.Sheet>
				  	<SegmentedView.Sheet title='干旱'>
					    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
						        
					        </ScrollView>
					    </View>
				  	</SegmentedView.Sheet>
				  	<SegmentedView.Sheet title='冻害'>
					    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						       	<ListItem />
						        
					        </ScrollView>
					    </View>
				  	</SegmentedView.Sheet>
				</SegmentedView>
			    <NavigationBar title='藤椒资讯' />
				</ImageBackground>
			</View>
		);
	}

	// 
}



const ListItem = () => (
	<View style={{
    	backgroundColor:'#fff',
    	height:110,
    	borderTopLeftRadius:5,
		borderTopRightRadius:5,
		borderBottomLeftRadius:5,
		borderBottomRightRadius:5,
		marginLeft:5,
	    marginRight:5,
	    marginTop:2.5,
	    marginBottom:2.5,
	    flexDirection: 'row',
	    justifyContent: 'space-between',
	    alignItems: 'flex-start',
    }}>
    	<Image
    	source={require('../dist/images/bg2.jpeg')}
    	style={{
    		borderTopLeftRadius:5,
    		borderTopRightRadius:5,
    		borderBottomLeftRadius:5,
    		borderBottomRightRadius:5,
    		width:160,
    		height:90,
    		margin:10,
    	}}
    	></Image>
    	<View style={{
    		height:110,
    		width:Dimensions.get('window').width-190,
    		flexDirection: 'column',
	    	justifyContent: 'center',
	    	alignItems: 'flex-start',
    	}}>
    		<Text style={{
    			color:'#333',
    			fontSize:16,
    			fontWeight:'bold',
    		}}>藤椒的基本情况</Text>
    		<Text style={{
    			color:'#666',
    			fontSize:14,
    		}}>我的老家就在这个屯，我是这个屯里土生土长的人</Text>
    		<Text style={{
    			color:'#999',
    			fontSize:12,
    		}}>2019.1.1</Text>
    	</View>
    </View>
);