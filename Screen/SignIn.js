import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignIn = () => {
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
                        style={styles.input} />
                    <Text style={{ paddingHorizontal: 10, marginTop: 20 }}>Passcode</Text>
                    <TextInput
                        placeholder='Enter passcode'
                        style={styles.input} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
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