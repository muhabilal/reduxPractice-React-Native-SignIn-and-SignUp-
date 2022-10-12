import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { account } from '../src/SignInSlice'
import { ScrollView } from 'react-native-gesture-handler'

const SignUp = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userAccount = useSelector((state) => state.data.user)
    // console.log("deatail:", userAccount);
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>SignUp </Text>
            </View>
            <View style={styles.footer}>
                <ScrollView>

                    <View>
                        <Text style={{ paddingHorizontal: 10 }}>Name</Text>
                        <TextInput
                            placeholder='Enter name'
                            style={styles.input}
                            value={name}
                            onChangeText={setName} />
                        <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>Email</Text>
                        <TextInput
                            placeholder='Enter email'
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail} />
                        <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>Passcode</Text>
                        <TextInput
                            placeholder='Enter passcode'
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true} />

                    </View>
                </ScrollView>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        dispatch(account({ name, email, password }));
                        navigation.navigate("signIn");
                        setName("");
                        setEmail("");
                        setPassword("");
                    }}>
                        <Text style={{ color: 'white' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Name:{userAccount.name}</Text>
                    <Text>Email:{userAccount.email}</Text>
                    <Text>Password:{userAccount.password}</Text>
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