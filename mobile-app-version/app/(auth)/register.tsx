import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from 'expo-router';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // TODO: Call API and store JWT in AsyncStorage
    console.log('Register data:', data);
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white dark:bg-gray-900">
      <Text className="text-3xl font-bold text-center mb-8 text-purple-700 dark:text-purple-400">Create Account</Text>
      <View className="mb-4">
        <Text className="mb-2 text-gray-700 dark:text-gray-300">Email</Text>
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your email"
              placeholderTextColor="#888"
              autoCapitalize="none"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>
      <View className="mb-4">
        <Text className="mb-2 text-gray-700 dark:text-gray-300">Username</Text>
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your username"
              placeholderTextColor="#888"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>
      <View className="mb-6">
        <Text className="mb-2 text-gray-700 dark:text-gray-300">Password</Text>
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your password"
              placeholderTextColor="#888"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>
      <TouchableOpacity
        className="bg-purple-600 rounded-lg py-3 mb-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center font-semibold text-lg">Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('(auth)/login')}>
        <Text className="text-center text-purple-600 dark:text-purple-400">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
