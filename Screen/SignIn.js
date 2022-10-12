import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const authentic = useSelector((state) => state.data.user)
    const authentication = () => {
        if (authentic.email == email && authentic.password == password) {
            alert("you are successfully login")
        }
        else {
            alert("please enter valid account")
        }

    }
    return (
        // <ScrollView >
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>SignIn</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={{ paddingHorizontal: 10 }}>Email</Text>
                    <TextInput
                        placeholder='Enter email'
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail} />
                    <Text style={{ paddingHorizontal: 10, marginTop: 20 }}>Passcode</Text>
                    <TextInput
                        placeholder='Enter passcode'
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => { authentication() }}>
                        <Text style={{ color: 'white' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ height: 100 }} /> */}
        </View>
        // </ScrollView >
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        // height: 600,
        // width: '100%',
    },
    header: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        // heigth: 800,
        // width: '100%',
    },
    footer: {
        flex: 0.5,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: 'teal',
        height: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})