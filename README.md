# react-native-event-flatlist 

![alt text](https://i.ibb.co/7CZ8Xyh/Screenshot-1548651376.png "Flat list event")

# Install

npm i react-native-event-flatlist

# Usage


```javascript

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import EventList from"./component/EventList";


const datalist=[
             {title:"One Piece ",date:"28 Jul 2014",image:"https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#EC407A"},
             {title:"Unlimited World Red",date:"28 JAN 2015",image:"https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#8E24AA"},
             {title:"Wine",date:"28 Jul 2014",image:"https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#EC407A"},
             {title:"Live On Tour",date:"28 JAN 2016",image:"https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#7B1FA2"},
             {title:"Tour",date:"28 Jul 2014",image:"https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#EC407A"},
             {title:"Component",date:"28 JAN 2017",image:"https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#283593"},
             {title:"Hopping",date:"28 Jul 2019",image:"https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#EC407A"},
             {title:"Dance",date:"28 JAN 2019",image:"https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg",desciption:"Bar Hopping in Erie, Pa",bgcolor:"#AD1457"},

             ]
export default class App extends Component<Props> {

  onpresed(item)
   {

    console.warn(item)
   }
  
  render() {
    return (
      <View style={styles.container}>
        <EventList
         data={datalist}
         onPressitem={this.onpresed}


         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  
});
```

# Props

| Prop          | Type           | Note  |
| ------------- |:-------------:| -----:|
| data          | array         | array of list data  |
| onPressitem   | func          |   return data when user press on item |

