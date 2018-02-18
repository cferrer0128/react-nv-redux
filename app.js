import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { fetchTasksFromAPI } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { tasks, isFetching } = props.tasks;
  return (
    <View style={container}>
      <Text style={text}>Redux Example</Text>
      <TouchableHighlight style={button} onPress={() => props.getTasks()}>
        <Text style={buttonText}>Load Tasks</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        tasks.length ? (
          tasks.map((task, i) => {
            var cdate = (new Date(task.date).toLocaleDateString("en-US"))
            return <View key={i} >
              <Text>Name: {task.Title}</Text>
              <Text>Date: {cdate}</Text>
              <Text>Lat: {task.lat}</Text>
              <Text>Lon: {task.lng}</Text>
            </View>
          })
        ) : null
      }
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getTasks: () => dispatch(fetchTasksFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

