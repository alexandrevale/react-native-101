import React, { Component } from 'React';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import uberx from '../../assets/uberx.png'

export default Details extends Component {
	render() {
		return 
			<Container>
				
				<TypeTitle>Popular</TypeTitle>
				<TypeDescription>Viagens baratas para o seu dia a dia</TypeDescription>
				<TypeImage source={ uberx } />
				
				<TypeTitle>Uber X</TypeTitle>
				<TypeDescription>R$ 6,00</TypeDescription>
				<RequestButton onPress={() => {}}>
					<RequestButtonText>Solicitar Uber X</RequestButtonText>
				</RequestButton>
			
			</Container>

	}
}