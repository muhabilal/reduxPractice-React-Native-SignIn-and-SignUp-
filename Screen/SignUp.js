import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>SignUp</Text>
            </View>
            <View style={styles.footer}>
                <View>

                    <Text style={{ paddingHorizontal: 10 }}>Name</Text>
                    <TextInput
                        placeholder='Enter name'
                        style={styles.input} />
                    <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>Email</Text>
                    <TextInput
                        placeholder='Enter email'
                        style={styles.input} />
                    <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>Passcode</Text>
                    <TextInput
                        placeholder='Enter passcode'
                        style={styles.input} />

                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ height: 100 }} /> */}
        </View>
    )
}

export default SignUp

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