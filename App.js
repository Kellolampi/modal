import { StyleSheet, Text, Pressable, View, Modal, StatusBar} from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  const textClicked = () => {
    setModalVisible(true)  }

  return (
    <View style={styles.container}>
      <Pressable onPress={textClicked}>
        {!modalVisible ? (
          <Text>Show modal message</Text>
        ) :
        (<Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <StatusBar/>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is modal...</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#f32121',
    alignSelf: 'stretch',
    bottom: 0
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});