import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Dimensions,ImageBackground, ScrollView, Image} from 'react-native';
import {BarA, BarB} from './Components/Primary';
import {NavigationBar,SegmentedView, Label, ListRow,NavigationPage} from 'teaset';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


import { Router, Scene,Actions } from 'react-native-router-flux';

import { Button,Icon } from 'react-native-elements';
export default class PageC extends Component {
  render() {
    return (
      <Router>
        <Scene  key="root" >
          <Scene navBar={nav} key="pageC" component={PageCContent} title="藤椒资讯" initial={true} 
          titleStyle={{
          	color:'#fff',
          	textAlign:'center',
          	fontWeight:'normal',
          	fontSize:20
          }}
          />
          <Scene navBar={subnav} key="pageCsub" component={ListItemContent} title="咨询详情"/>
        </Scene>
      </Router>
    )
  }
}

const CONTENT = "藤椒，中文学名：竹叶花椒（拉丁学名：Zanthoxylum armatum DC.），别称：万花针、白总管、竹叶总管（江西、湖南）等。由于其枝叶披散，延长状若藤蔓，故称藤椒；多年生灌木，高3-5米的落叶小乔木；茎枝多锐刺，叶面稍粗皱；或为椭圆形，小叶柄甚短或无柄。花序近腋生或同时生于侧枝之顶，果紫红色，有微凸起少数油点，种子径3-4毫米，褐黑色。花期4-5月，果期8-10月。主要分布于中国大陆西南、华东、华中及华北等地。 根、茎、叶、果及种子均药用，可祛风散寒、行气止痛，治风湿性关节炎等疾病。高3-5米的落叶小乔木；茎枝多锐刺，刺基部宽而扁，红褐色，小枝上的刺劲直，水平抽出，小叶背面中脉上常有小刺，仅叶背基部中脉两侧有丛状柔毛，或嫩枝梢及花序轴均被褐锈色短柔毛。叶有小叶3-9、稀11片，翼叶明显，稀仅有痕迹；小叶对生，通常披针形，长3-12厘米，宽1-3厘米，两端尖，有时基部宽楔形，干后叶缘略向背卷，叶面稍粗皱；或为椭圆形，长4-9厘米，宽2-4.5厘米，顶端中央一片最大，基部一对最小；有时为卵形，叶缘有甚小且疏离的裂齿，或近于全缘，仅在齿缝处或沿小叶边缘有油点；小叶柄甚短或无柄。花序近腋生或同时生于侧枝之顶，长2-5厘米，有花约30朵以内；花被片6-8片，形状与大小几相同，长约1.5毫米；雄花的雄蕊5-6枚，药隔顶端有1干后变褐黑色油点；不育雌蕊垫状凸起，顶端2-3浅裂；雌花有心皮3-2个，背部近顶侧各有1油点，花柱斜向背弯，不育雄蕊短线状。果紫红色，有微凸起少数油点，单个分果瓣径4-5毫米；种子径3-4毫米，褐黑色。";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
});

class PageCContent extends Component{
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
		        <SegmentedView style={{marginTop:68, flex: 1}} type='projector'>
				  	<SegmentedView.Sheet title='藤椒资讯' style={{paddingTop:0}}>
					    <View style={{flex: 1, alignItems: 'center'}}>
					         <ListItem title={'1'} subtitle={'2'}/>
					    </View>
					</SegmentedView.Sheet>
					<SegmentedView.Sheet title='病害'>
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
				</ImageBackground>
			</View>
		);
	}

			    // 
}

const nav = () => (
	<NavigationBar title='藤椒资讯' />
);
const subnav = () => (
	<NavigationBar title='资讯详情' leftView={<NavigationBar.BackButton title='返回' onPress={() => Actions.pop()}/>} />
);

class ListItem extends Component { 
	constructor(props){
		super(props);
	}
	render(){
		return(
		<View 
		style={{
	    	backgroundColor:'#fff',
	    	height:90,
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
	    	
	    	<View style={{
	    		height:90,
	    		width:Dimensions.get('window').width-130,
	    		flexDirection: 'column',
		    	justifyContent: 'center',
		    	alignItems: 'flex-start',
		    	paddingLeft:10,
	    	}}>
	    		<Text onPress={Actions.pageCsub}
	    		style={{
	    			color:'#333',
	    			fontSize:16,
	    			fontWeight:'bold',
	    		}}>藤椒的基本情况</Text>
	    		<Text onPress={Actions.pageCsub}
	    		style={{
	    			color:'#666',
	    			fontSize:14,
	    		}}>我的老家就在这个屯，我是这个屯里土生土长的人</Text>
	    		<View style={{
	    			flexDirection: 'row',
    				justifyContent: 'space-between',
		    		alignItems: 'flex-start',
		    		width:100}}>
		    		<Text style={{
		    			color:'#999',
		    			fontSize:12,
		    		}}>2019.1.1</Text>
		    		<View style={{
		    			flexDirection: 'row',
	    				justifyContent: 'center',
			    		alignItems: 'center',
		    		}}>
		    			<Icon name="thumbs-up" type="feather" color="#999" size={12}/>
		    			<Text style={{marginLeft:5,color:'#999',fontSize:12,}}>{666}
		    			</Text>
		    		</View>
	    		</View>
	    	</View>
	    	<Image
	    	source={require('../dist/images/pepper.jpg')}
	    	style={{
	    		borderTopLeftRadius:2.5,
	    		borderTopRightRadius:2.5,
	    		borderBottomLeftRadius:2.5,
	    		borderBottomRightRadius:2.5,
	    		width:100,
	    		height:70,
	    		margin:10,
	    	}}
	    	/>
	    </View>
	)}
}


class ListItemContent extends Component {
	constructor(props){
		super(props);
		this.state={
			activate:'thumbs-o-up',
			num:''
		}
	}
	tu(e){
		this.setState({
			activate:'thumbs-up',
			num:'667'
		});
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
			        <View style={{marginTop:70, paddingBottom:10}}>
						<Text style={{
							fontSize:20,
							fontWeight:'bold',
							color:'#333',
							marginBottom:5,
							letterSpacing:2,
						}}>藤椒的基本情况</Text>
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
						height:Dimensions.get('window').width/4,
						flexDirection: 'row',
		    			justifyContent: 'center',
		    			alignItems: 'center',
					}}>
						<Button
						  large
						  onPress={this.tu.bind(this)}
						  icon={<Icon
							    	type="font-awesome"
							      	name={this.state.activate}
							      	size={20}
							      	color='#fff'
							    />}
						  title={this.state.num} 
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

