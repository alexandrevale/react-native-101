import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from '.components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router>
			// Scene === Screen
			<Scene key="root" hideNavBar>
				
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" initial />
				</Scene>
				
				<Scene key="main">
					
					<Scene 
						key="employeeList" 
						title="Funcionários"
						component={EmployeeList} 
						rightTitle="Adicionar"
						onRight={() => { Actions.employeeCreate() }}
						initial
					/>

					<Scene 
						key="employeeCreate" 
						title="Novo Funcionário" 
						component={EmployeeCreate} 
					/>

					<Scene
						key="employeeEdit"
						component={EmployeeEdit}
						title="Editar Funcionário"
					/>

				</Scene>

			</Scene>
		</Router>
	);
};

export default RouterComponent;