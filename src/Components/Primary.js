import React, {Component} from 'react';
import {Platform, StyleSheet, Text,View, Dimensions,ScrollView} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit';

import { Icon,Avatar } from 'react-native-elements';
import moment from 'moment';
import {Button,Overlay,Label,Carousel} from 'teaset';

const data = {
	cardA:{
		title:'灾害预警',
		value:'较低',
		description:{
			a:'较低概率：爆发概率较小，基本不会爆发',
			b:'中等概率：有一定爆发概率，程度不会太严重',
			c:'较高概率：爆发概率较大，请做好准备措施',
		},
		info:'通过神经网络得出的藤椒灾害预警',
		label:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
		data: [
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			          Math.floor(Math.random() * 10),
			        ],
	    titlex:'近一年锈病爆发次数'
	},
	cardB:{
		title:'24小时天气预报',
		label:['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
		data: [
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			        ]
	},
	cardC1:{
		title:'未来一周天气预报',
		label:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		data: [
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			        ]
	},
	cardC:{
		title:'未来一周气温（°C）',
		label:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		data: [
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			          Math.random() * 10 - 5,
			        ]
	},
	cardD:{
		title:'未来一周湿度情况',
		label:['空气湿度'],
		data:[0.64],
	},
	cardE:{
		title:'其他天气情况',
		titleA:'实时天气',
		titleB:'气压',
		titleC:'紫外线强度',
		titleD:'风向',
		titleE:'风级',
		titleF:'风速',
		valueA:'晴',
		valueB:'3000',
		valueC:'27610',
		valueD:'东南',
		valueE:'4',
		valueF:'300',
	},

	barA:{
		title:'历史锈病爆发情况',
		label:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		data: [
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			          Math.random() * 10,
			        ]
	},
	barB:{
		title:'过去一年月均温走势',
		label:['一月', '二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',],
		data: [
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			        ]
	},
	barC:{
		title:'过去一年月均湿度走势',
		label:['一月', '二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',],
		data: [
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			        ]
	},
	barD:{
		title:'过去一年月均降水量走势',
		label:['一月', '二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',],
		data: [
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			        ]
	},
	barE:{
		title:'实时监控',
		titleA:'空气温度',
		titleB:'湿度',
		titleC:'土壤水分',
		titleD:'气压',
		titleE:'光照',
		titleF:'土壤EC值',
		valueA:'4°C',
		valueB:'64%',
		valueC:'400',
		valueD:'10000',
		valueE:'27610',
		valueF:'0',
	},
	
}

const styles = StyleSheet.create({
  title: {
    width:'100%',
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  titlex: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    paddingLeft:20,
    paddingRight:10,
  },
  title_text:{
    	color:'#333',
    	fontWeight:'bold',
    	marginLeft:5,
    	fontSize:16,
  },
  subtitle_text:{
    	color:'#666',
    	marginLeft:5,
    	fontSize:14,
  },

  card: {
  	flex:1,
  	height:250,
  	flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(250,250,250)',
    marginTop:2.5,
    marginBottom:2.5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  boardContent: {
  	flex:1,
  	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardA: {
  	width:'100%',
  	height:200,
  	flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight:20,
  },
  boardD: {
  	width:80,
  	height:140,
  	marginLeft:5,
  	marginRight:5,
  	marginTop:30,
  	marginBottom:30,
  	backgroundColor:'#fff',
  	borderRadius:5,
  	flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boardB: {
  	width:'100%',
  	height:200,
  	flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boardBs: {
  	width:'100%',
  	height:100,
  	flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boardBsText:{
  	color:'darkgreen',
  	fontSize:18,
  },


  bar: {
  	flex:1,
  	height:250,
  	flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(250,250,250)',
    marginTop:2.5,
    marginBottom:2.5,
  },

});















class Title extends Component {
	constructor(props){
		super(props)
	}
	modal(e){
		let overlayView = (
		    <Overlay.PopView
			    style={{alignItems: 'center', justifyContent: 'center'}}
			    >
			    <View style={{backgroundColor: '#fff', minWidth: 300, minHeight: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
			      <Label type='title' size='md' text={this.props.title} />
			      <Text style={{marginTop:5,}}>{this.props.subtitle}</Text>
			    </View>
			</Overlay.PopView>
		);
		Overlay.show(overlayView);
	}
	render(){
		return(
			<View style={styles.title}>
				<View style={styles.titlex}>
					<Icon name={this.props.icon} size={20} type='feather' color='#337ab7'/>
					<Text style={styles.title_text}>{this.props.title}</Text>
				</View>
				<View style={styles.titlex}>
					<Button onPress={this.modal.bind(this)} style={{padding:0,width:47,backgroundColor: '#fff', borderColor: '#fff'}}>
					  <Icon name='info' size={20} type='feather' color='#337ab7'/>
					</Button>
				</View>
			</View>
		);
	}
}






class BoardA extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.boardA}>
				<View style={styles.boardContent}>
					<Text style={{
						fontSize:20,
						color:'#66CC99',
					}}>{this.props.value}</Text>
					<Text style={{
						fontSize:14,
						color:'#666',
						marginTop:5,
					}}>锈病爆发概率</Text>
				</View>
				<View style={styles.boardContent}>
					<Text style={{
						fontSize:12,
						color:'#66CC99',
					}}>{this.props.description.a}</Text>
					<Text style={{
						fontSize:12,
						color:'#FF9966',
					}}>{this.props.description.b}</Text>
					<Text style={{
						fontSize:12,
						color:'#FF6666',
					}}>{this.props.description.c}</Text>
				</View>
			</View>
		);
	}
}


class BoardD extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.boardD}>
				<View style={styles.boardContent}>
					<Icon name={this.props.icon} size={20} type='feather' color='#337ab7'/>
					<Text style={{
						fontSize:20,
						color:this.props.color ? this.props.color : '#337ab7',
					}}>{this.props.value}</Text>
					<Text style={{
						fontSize:14,
						color:'#666',
						marginTop:10,
					}}>{this.props.hrs}</Text>
				</View>
			</View>
		);
	}
}

class BoardB extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.boardB}>
				<View style={styles.boardBs}>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#337ab7',
  							fontSize:20}}>{this.props.valueA}</Text>
						<Text>{this.props.titleA}</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#337ab7',
  							fontSize:20}}>{this.props.valueB}</Text>
						<Text>{this.props.titleB}</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#337ab7',
  							fontSize:20}}>{this.props.valueC}</Text>
						<Text>{this.props.titleC}</Text>

					</View>
				</View>
				<View style={styles.boardBs}>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#337ab7',
  							fontSize:20}}>{this.props.valueD}</Text>
						<Text>{this.props.titleD}</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#337ab7',
  							fontSize:20}}>{this.props.valueE}</Text>
						<Text>{this.props.titleE}</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#337ab7',
  							fontSize:20}}>{this.props.valueF}</Text>
						<Text>{this.props.titleF}</Text>

					</View>
				</View>
			</View>
		);
	}
}

export class CardA extends Component {
	constructor(props){
		super(props);
		this.state={
			isVisible:false,
		}

	}
	
	render(){
		return(
			<View style={styles.card}>
				<Title  title={data.cardA.title} icon="compass" subtitle={'四川省绵阳市，' + moment(Date()).format('ll')}/>
				<Carousel
				  style={{height: 200, width:'100%'}}
				  control={
				    <Carousel.Control
				      style={{alignItems: 'flex-end'}}
				      dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#337ab7', padding: 4}}>□</Text>}
				      activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#337ab7', padding: 4}}>■</Text>}
				      />
				  }
				>
					<BoardA value={data.cardA.value} description={data.cardA.description} />
				</Carousel>
			</View>
		);
	}
}

export class CardB extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.cardB.title} icon="cloud" subtitle={moment(Date()).format('ll')}/>
				<ScrollView 
			        showsHorizontalScrollIndicator={false}
			        horizontal={true} 
					style={{
			        	width:'100%',
			        }}>
					<BoardD hrs={'0:00'} value={'阴'} icon="cloud"/>
					<BoardD hrs={'1:00'} value={'雪'} icon="cloud-snow"/>
					<BoardD hrs={'2:00'} value={'雪'} icon="cloud-snow"/>
					<BoardD hrs={'3:00'} value={'雪'} icon="cloud-snow"/>
					<BoardD hrs={'4:00'} value={'雪'} icon="cloud-snow"/>
					<BoardD hrs={'5:00'} value={'雪'} icon="cloud-snow"/>
					<BoardD hrs={'6:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'7:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'8:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'9:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'10:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'11:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'12:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'13:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'14:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'15:00'} value={'晴'} icon="sun"/>
					<BoardD hrs={'16:00'} value={'雨'} icon="cloud-rain"/>
					<BoardD hrs={'17:00'} value={'雨'} icon="cloud-rain"/>
					<BoardD hrs={'18:00'} value={'雨'} icon="cloud-rain"/>
					<BoardD hrs={'19:00'} value={'雨'} icon="cloud-rain"/>
					<BoardD hrs={'20:00'} value={'阴'} icon="cloud"/>
					<BoardD hrs={'21:00'} value={'阴'} icon="cloud"/>
					<BoardD hrs={'22:00'} value={'阴'} icon="cloud"/>
					<BoardD hrs={'23:00'} value={'阴'} icon="cloud"/>
				</ScrollView>
			</View>
		);
	}
}

export class CardC1 extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.cardC1.title} icon="cloud" subtitle={moment(Date()).format('ll')}/>
				<ScrollView 
			        showsHorizontalScrollIndicator={false}
			        horizontal={true} 
					style={{
			        	width:'100%',
			        }}>
					<BoardD hrs={'周一'} value={'晴'} icon="sun"/>
					<BoardD hrs={'周二'} value={'晴'} icon="sun"/>
					<BoardD hrs={'周三'} value={'阴'} icon="cloud"/>
					<BoardD hrs={'周四'} value={'晴'} icon="sun"/>
					<BoardD hrs={'周五'} value={'阴'} icon="cloud"/>
					<BoardD hrs={'周六'} value={'晴'} icon="sun"/>
					<BoardD hrs={'周日'} value={'阴'} icon="cloud"/>
				</ScrollView>
			</View>
		);
	}
}




export class CardC extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.cardC.title} icon="cloud-rain" subtitle={moment(Date()).format('ll')}/>
				<LiChart width={Dimensions.get('window').width - 20} label={data.cardC.label} data={data.cardC.data} color="#337ab7"/>
			</View>
		);
	}
}

export class CardD extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.cardD.title} icon="cloud-drizzle" subtitle={'定制版可提供土壤湿度，精确监测'}/>
				<PrChart label={data.cardD.label}  data={data.cardD.data} color="#337ab7"/>
			</View>
		);
	}
}

export class CardE extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.cardE.title} icon="moon" subtitle={moment(Date()).format('ll')}/>
				<Carousel
					  style={{alignItems: 'flex-end',borderTopLeftRadius:5,
		        			borderTopRightRadius:5,
		        			borderBottomLeftRadius:5,
		        			borderBottomRightRadius:5,
		        			backgroundColor:'rgb(250,250,250)',
		        			height: 200,
		        			width:Dimensions.get('window').width-10,}}
					  control={
					    <Carousel.Control
					      style={{alignItems: 'flex-end'}}
					      dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#337ab7', padding: 4}}>□</Text>}
					      activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#337ab7', padding: 4}}>■</Text>}
					      />
					  }
					>
					<BoardB 
						titleA={data.cardE.titleA} 
						titleB={data.cardE.titleB} 
						titleC={data.cardE.titleC} 
						titleD={data.cardE.titleD} 
						titleE={data.cardE.titleE} 
						titleF={data.cardE.titleF}
						valueA={data.cardE.valueA} 
						valueB={data.cardE.valueB} 
						valueC={data.cardE.valueC} 
						valueD={data.cardE.valueD} 
						valueE={data.cardE.valueE} 
						valueF={data.cardE.valueF}
					/>
					<BoardB 
						titleA={data.cardE.titleA} 
						titleB={data.cardE.titleB} 
						titleC={data.cardE.titleC} 
						titleD={data.cardE.titleD} 
						titleE={data.cardE.titleE} 
						titleF={data.cardE.titleF}
						valueA={data.cardE.valueA} 
						valueB={data.cardE.valueB} 
						valueC={data.cardE.valueC} 
						valueD={data.cardE.valueD} 
						valueE={data.cardE.valueE} 
						valueF={data.cardE.valueF}
					/>
				</Carousel>
			</View>
		);
	}
}





export class LiChart extends Component {
	constructor(props){
		super(props)
	}
	render() {
	    return (
	      <View>
			  <LineChart
			    data={{
			      labels: this.props.label,
			      datasets: [{
			        data: this.props.data,
			      }]
			    }}
			    width={this.props.width} // from react-native
			    height={170}
			    chartConfig={{
			      backgroundColor: 'rgb(250,250,250)',
			      backgroundGradientFrom: 'rgb(250,250,250)',
			      backgroundGradientTo: 'rgb(250,250,250)',
			      decimalPlaces: 1, // optional, defaults to 2dp 小数点两位
			      color: () => this.props.color,
			      style: {
			        borderRadius: 0,
			      }
			    }}
			    bezier
			    style={{
			      marginVertical: 0,
			      borderRadius: 0,
			    }}
			  />
			  <Text style={{width:'100%',textAlign:'center'}}>{this.props.title}</Text>
			</View>
	    );
	}
}

export class PrChart extends Component {
	constructor(props){
		super(props)
	}
	render() {
	    return (
	      <View style={{
	      	flexDirection: 'column',
		    justifyContent: 'center',
		    alignItems: 'center',
	      }}>
	      	
			  <ProgressChart
			    data={this.props.data}
			    width={Dimensions.get('window').width - 20} // from react-native
			    height={170}
			    chartConfig={{
			      backgroundColor: 'rgb(250,250,250)',
			      backgroundGradientFrom: 'rgb(250,250,250)',
			      backgroundGradientTo: 'rgb(250,250,250)',
			      decimalPlaces: 1, // optional, defaults to 2dp 小数点两位
			      color:  (opacity = 1) => `rgba(51, 122, 183, ${opacity})`,
			      style: {
			        borderRadius: 0,
			      }
			    }}
			    style={{
			      marginVertical: 0,
			      borderRadius: 0,
			    }}
			  />
			  <Text>
	      		空气湿度
	      	  </Text>
			</View>
	    );
	}
}




//  ======= Page B ====== //

export class BarA extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.barA.title} icon="monitor"/>
				<ScrollView 
			        showsHorizontalScrollIndicator={false}
			        horizontal={true} 
					style={{
			        	width:'100%',
			        }}>
					<BoardD hrs={'1月'} value={'轻度'} color={'#66CC99'}/>
					<BoardD hrs={'2月'} value={'轻度'} color={'#66CC99'}/>
					<BoardD hrs={'3月'} value={'中等'} color={'#FF9966'}/>
					<BoardD hrs={'4月'} value={'严重'} color={'#FF6666'}/>
					<BoardD hrs={'5月'} value={'中等'} color={'#FF9966'}/>
					<BoardD hrs={'6月'} value={'轻度'}  color={'#66CC99'}/>
					<BoardD hrs={'7月'} value={'轻度'}  color={'#66CC99'}/>
					<BoardD hrs={'8月'} value={'轻度'}  color={'#66CC99'}/>
					<BoardD hrs={'9月'} value={'中等'} color={'#FF9966'}/>
					<BoardD hrs={'10月'} value={'严重'} color={'#FF6666'}/>
					<BoardD hrs={'11月'} value={'中等'} color={'#FF9966'}/>
					<BoardD hrs={'12月'} value={'轻度'}  color={'#66CC99'}/>
				</ScrollView>
			</View>
		);
	}
}

export class BarB extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.barB.title} icon="thermometer"/>
				<ScrollView 
			        showsHorizontalScrollIndicator={false}
			        horizontal={true} 
					style={{
			        	width:'100%',
			        }}>
				<LiChart width={Dimensions.get('window').width + 100} label={data.barB.label} data={data.barB.data} color="#337ab7"/>
				</ScrollView>
			</View>
		);
	}
}

export class BarC extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.barC.title} icon="monitor"/>
				<ScrollView 
			        showsHorizontalScrollIndicator={false}
			        horizontal={true} 
					style={{
			        	width:'100%',
			        }}>
				<LiChart width={Dimensions.get('window').width + 100} label={data.barC.label} data={data.barC.data} color="#337ab7"/>
				</ScrollView>
			</View>
		);
	}
}

export class BarD extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.barD.title} icon="monitor"/>
				<ScrollView 
			        showsHorizontalScrollIndicator={false}
			        horizontal={true} 
					style={{
			        	width:'100%',
			        }}>
				<LiChart width={Dimensions.get('window').width + 100} label={data.barD.label} data={data.barD.data} color="#337ab7"/>
				</ScrollView>
			</View>
		);
	}
}

export class BarE extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.barE.title} icon="monitor"/>
				<BoardB titleA={data.barE.titleA} 
						titleB={data.barE.titleB} 
						titleC={data.barE.titleC} 
						titleD={data.barE.titleD} 
						titleE={data.barE.titleE} 
						titleF={data.barE.titleF}
						valueA={data.barE.valueA} 
						valueB={data.barE.valueB} 
						valueC={data.barE.valueC} 
						valueD={data.barE.valueD} 
						valueE={data.barE.valueE} 
						valueF={data.barE.valueF}/>
			</View>
		);
	}
}
