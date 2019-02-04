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