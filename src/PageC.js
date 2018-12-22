import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';
import {BarA, BarB} from './Components/Primary';
import {NavigationBar,SegmentedView, Label, ListRow} from 'teaset';
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
					        <ScrollView 
						        showsVerticalScrollIndicator={false}
						        horizontal={false} 
								style={{
						        	width:'100%',
						        }}>
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
					        </ScrollView>
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
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
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
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
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
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
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
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
						        <ListRow title='Custom title' titleStyle={{fontSize: 18, color: '#31708f'}} />
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