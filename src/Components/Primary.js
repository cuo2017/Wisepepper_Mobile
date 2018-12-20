import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit';





const data = {
	cardA:{
		title:'灾害预警',
		value:'48%',
		description:'低概率：0%~60%，中等概率：60%~80%，高概率：80%~100%',
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
	
}

const styles = StyleSheet.create({
  title: {
    width:'100%',
    height:50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    paddingLeft:20,
  },
  title_text:{
    	color:'#000',
    	fontWeight:'bold',
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

});


class Title extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.title}>
				<Text style={styles.title_text}>{this.props.title}</Text>
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
					<Text>{this.props.description}</Text>
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
				<Title title={data.cardA.title} />
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
				<Title title={data.cardB.title} />
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
				<Title title={data.cardC.title} />
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
				<Title title={data.cardD.title} />
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
				<Title title={data.cardE.title} />
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
