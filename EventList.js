'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity
  
} from 'react-native';
import { styles } from './Styles';

export default class EventList extends Component {
constructor(props) {
    super(props);
    this.state = { 
           p: this.props.visible,


    };
   
    };
  
  componentWillReceiveProps ()
 {

    var p = this.props;
    console.warn(p)

 }

  render() {


    return (
    	<View>

       <ScrollView>
         
         <FlatList
                 listKey="EventList"
                 data={this.props.data}
                 keyExtractor={(z, b) => b.toString()}
                 renderItem={({item}) =>
                 
                <TouchableOpacity style={styles.lists}  onPress={this.props.onPressitem.bind(this, item)}>
                    <Text style={[styles.dates,{backgroundColor:item.bgcolor}]}>{item.date} </Text>
                    <Image source={{uri:item.image}}  style={styles.childimage}/>

                    <View style={styles.subdata}> 
                        <Text style={styles.title}>{item.title} </Text>
                        <Text style={styles.desciption}>{item.desciption}: </Text>
                    </View>
                </TouchableOpacity>

                  }  
                />

         </ScrollView>

      </View>
    );
  }
}

