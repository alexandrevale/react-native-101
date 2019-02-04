import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
// utilizar /native para indicar os components do React Native

export const LocationBox = styled.Views`
  background: #fff;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;  

${Platform.select({
	ios: css`
	  margin-top: 20px;
	`,
	android: css`
	  margin-top: 10px;
	  margin-left: 10px;
	`
	})}
`;

export const LocationText = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
  color: #333;
`;

export const LocationTimeText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const LocationTimeTextSmall = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 40 })};
  left: 20px;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 40 })};
  left: 20px;
`;