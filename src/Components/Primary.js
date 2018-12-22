import React, {Component} from 'react';
import {Platform, StyleSheet, Text,View, Dimensions} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit';

import { Icon,Avatar,Button,Tooltip } from 'react-native-elements';



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
    paddingRight:20,
  },
  title_text:{
    	color:'#000',
    	fontWeight:'bold',
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
    marginLeft:5,
    marginRight:5,
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
	render(){
		return(
			<View style={styles.title}>
				<View style={styles.titlex}>
					<Icon name={this.props.icon} type='feather' color='#337ab7'/>
					<Text style={styles.title_text}>{this.props.title}</Text>
				</View>
				<View style={styles.titlex}>
					<Tooltip popover={<Text>{data.cardA.info}</Text>}>
						<Icon name='info' type='FontAwesome' color='#337ab7' />
					</Tooltip>
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
					<Text>锈病爆发概率</Text>
					<Text style={{
						fontSize:50,
						color:'green',
					}}>{this.props.value}</Text>
				</View>
				<View style={styles.boardContent}>
					<Text>{this.props.description.a}</Text>
					<Text>{this.props.description.b}</Text>
					<Text>{this.props.description.c}</Text>
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
						<Text>实时天气</Text>
						<Text style={styles.boardBsText}>{this.props.value}</Text>
					</View>
					<View style={styles.boardContent}>
						<Text>气压</Text>
						<Text style={styles.boardBsText}>{this.props.value}</Text>
					</View>
					<View style={styles.boardContent}>
						<Text>紫外线强度</Text>
						<Text style={styles.boardBsText}>{this.props.value}</Text>
					</View>
				</View>
				<View style={styles.boardBs}>
					<View style={styles.boardContent}>
						<Text>风向</Text>
						<Text style={styles.boardBsText}>{this.props.value}</Text>
					</View>
					<View style={styles.boardContent}>
						<Text>风级</Text>
						<Text style={styles.boardBsText}>{this.props.value}</Text>
					</View>
					<View style={styles.boardContent}>
						<Text>风速</Text>
						<Text style={styles.boardBsText}>{this.props.value}</Text>
					</View>
				</View>
			</View>
		);
	}
}

export class CardA extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.card}>
				<Title title={data.cardA.title} icon="compass"/>
				<BoardA value={data.cardA.value} description={data.cardA.description}/>
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
				<Title title={data.cardB.title} icon="cloud"/>
				<LiChart label={data.cardB.label} data={data.cardB.data}/>
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
				<Title title={data.cardC.title} icon="cloud-rain"/>
				<LiChart label={data.cardC.label} data={data.cardC.data}/>
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
				<Title title={data.cardD.title} icon="cloud-drizzle"/>
				<PrChart label={data.cardD.label}  data={data.cardD.data} />
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
				<Title title={data.cardE.title} icon="moon"/>
				<BoardB value={data.cardA.value}/>
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
			    width={Dimensions.get('window').width - 20} // from react-native
			    height={200}
			    chartConfig={{
			      backgroundColor: 'rgb(250,250,250)',
			      backgroundGradientFrom: 'rgb(250,250,250)',
			      backgroundGradientTo: 'rgb(250,250,250)',
			      decimalPlaces: 1, // optional, defaults to 2dp 小数点两位
			      color: () => `#666`,
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
	      	<Text>
	      		外圈为空气湿度，内圈为土壤湿度
	      	</Text>
			  <ProgressChart
			    data={this.props.data}
			    width={Dimensions.get('window').width - 20} // from react-native
			    height={180}
			    chartConfig={{
			      backgroundColor: 'rgb(250,250,250)',
			      backgroundGradientFrom: 'rgb(250,250,250)',
			      backgroundGradientTo: 'rgb(250,250,250)',
			      decimalPlaces: 1, // optional, defaults to 2dp 小数点两位
			      color:  (opacity = 1) => `rgba(95, 95, 95, ${opacity})`,
			      style: {
			        borderRadius: 0,
			      }
			    }}
			    style={{
			      marginVertical: 0,
			      borderRadius: 0,
			    }}
			  />
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
			<View style={styles.bar}>
				<Title title={data.barA.title} icon="monitor"/>
				<LiChart label={data.barA.label} data={data.barA.data}/>
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
			<View style={styles.bar}>
				<Title title={data.barB.title} icon="thermometer"/>
				<LiChart label={data.barB.label} data={data.barB.data}/>
			</View>
		);
	}
}
