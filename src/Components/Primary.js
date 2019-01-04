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
		value:'48%',
		description:{
			a:'低概率：0%~60%',
			b:'中等概率：60%~80%',
			c:'高概率：80%~100%',
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
	cardC:{
		title:'未来一周天气预报',
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
	cardD:{
		title:'湿度情况',
		label:['空气湿度', '土壤'],
		data:[0.64,0.72],
	},
	cardE:{
		title:'其他天气情况',
		valueA:'晴',
		valueB:'3000',
		valueC:'27610',
		valueD:'东南',
		valueE:'4',
		valueF:'300',
	},

	barA:{
		title:'过去一周空气温度走势',
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
		title:'过去一周空气湿度走势',
		label:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		data: [
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			          Math.random(),
			        ]
	}
	
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
			    <View style={{backgroundColor: '#fff', minWidth: 300, minHeight: 500, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
			      <Label type='title' size='xl' text={this.props.title} />
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
						fontSize:50,
						color:'#66CC99',
					}}>{this.props.value}</Text>
					<Text style={{
						fontSize:14,
						color:'#666',
					}}>锈病爆发概率</Text>
				</View>
				<View style={styles.boardContent}>
					<Text style={{
						fontSize:14,
						color:'#66CC99',
					}}>{this.props.description.a}</Text>
					<Text style={{
						fontSize:14,
						color:'#FF9966',
					}}>{this.props.description.b}</Text>
					<Text style={{
						fontSize:14,
						color:'#FF6666',
					}}>{this.props.description.c}</Text>
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
							color:'#FF9966',
  							fontSize:20}}>{this.props.valueA}</Text>
						<Text>实时天气</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#6699FF',
  							fontSize:20}}>{this.props.valueB}</Text>
						<Text>气压</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#9966FF',
  							fontSize:20}}>{this.props.valueC}</Text>
						<Text>紫外线强度</Text>

					</View>
				</View>
				<View style={styles.boardBs}>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#66CCFF',
  							fontSize:20}}>{this.props.valueD}</Text>
						<Text>风向</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#66CCFF',
  							fontSize:20}}>{this.props.valueE}</Text>
						<Text>风级</Text>

					</View>
					<View style={styles.boardContent}>
						<Text style={{
							color:'#66CCFF',
  							fontSize:20}}>{this.props.valueF}</Text>
						<Text>风速</Text>

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
					<BoardA value={data.cardA.value} description={data.cardA.description}/>
					<LiChart title={data.cardA.titlex} width={Dimensions.get('window').width - 20} label={data.cardA.label} data={data.cardA.data} color="#9966FF"/>
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
					<LiChart width={2*Dimensions.get('window').width - 20} label={data.cardB.label} data={data.cardB.data} color="#337ab7"/>
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
				<LiChart width={Dimensions.get('window').width - 20} label={data.cardC.label} data={data.cardC.data} color="#66CC99"/>
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
				<Title title={data.cardD.title} icon="cloud-drizzle" subtitle={moment(Date()).format('ll')}/>
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
				<BoardB valueA={data.cardE.valueA} 
						valueB={data.cardE.valueB} 
						valueC={data.cardE.valueC} 
						valueD={data.cardE.valueD} 
						valueE={data.cardE.valueE} 
						valueF={data.cardE.valueF}/>
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
			      color:  (opacity = 1) => `rgba(102, 153, 255, ${opacity})`,
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
	      		外圈为空气湿度，内圈为土壤湿度
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
				<LiChart width={Dimensions.get('window').width - 20} label={data.barA.label} data={data.barA.data} color="#337ab7"/>
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
				<LiChart width={Dimensions.get('window').width - 20} label={data.barB.label} data={data.barB.data} color="#337ab7"/>
			</View>
		);
	}
}
