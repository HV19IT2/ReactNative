import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import axios from 'axios';
import config from '../../api/config';
export default () => {
  
  const [auth, setauth] = useState(false);
  const { register, setValue, handleSubmit, control, reset, errors } = useForm();
  const onSubmit = data => {
    // console.log({...data,signin:true});
    // console.log("ok");
    axios.post(config.api+"/login_tmp.php",{data}).then((res) => {
        console.log(res);
        setauth(true)
    })
   console.log("ok2");
  };
 
  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  console.log(errors);

  if(auth){
    return( 
    <View>
      <Text>Login successfull</Text>
    </View>)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
