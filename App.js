import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	ImageBackground,
} from 'react-native';
let image = require('./assets/pancake.png');

export default function App() {
	const [timesPressed, setTimesPressed] = useState(0);

	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image} resizeMode='cover'>
				<Text style={styles.title}>2 Cats 2 Kitten</Text>
				<TouchableOpacity
					title={'Listen to latest Episode'}
					style={styles.button}
					onPress={() => Alert.alert('Episode dropping soon!')}
				>
					<Text>Press Here</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	image: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: 40,
		width: '100%',
	},
	title: {
		marginTop: 5,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: '#20232a',
		borderRadius: 6,
		backgroundColor: '#008000',
		color: '#000000',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	text: {
		fontSize: 16,
		margin: 30,
	},
	button: {
		marginTop: 5,
		alignItems: 'center',
		color: '#FFFFFF',
		backgroundColor: '#008000',
	},
});
