import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
 
export default class ScreenBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['id','Name','Score', 'Rank'],
      tableData: [
        ['1', 'Ravi', '190', '4'],
        ['2', 'Rahul', '360', '2'],
        ['3', 'Tara', '450', '1'],
        ['4', 'Sia', '240', '3']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
