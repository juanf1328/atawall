import React from 'react';
import { Button, Input, Row, Col } from 'antd';
import './App.css';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      language: 'english',
    };
 }

 changeLanguage = (language) => {
    this.setState({ language });
 };

 render() {
    const { language } = this.state;

    const loginPage = {
      title: language === 'english' ? 'Welcome to atawall' : 'Bienvenido a atawall',
      buttonText: language === 'english' ? 'Log In' : 'Iniciar Sesión',
      registerText: language === 'english' ? 'Register' : 'Registrarme',
      needHelpText: language === 'english' ? 'Need Help?' : 'Necesitas ayuda?',
    };

    return (
      <div className="login-container">
        <h1>{loginPage.title}</h1>
        <Row>
          <Col span={8}>
            <Input placeholder={language === 'english' ? 'Email' : 'Correo electrónico'} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Input.Password placeholder={language === 'english' ? 'Password' : 'Contraseña'} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Button type="primary">{loginPage.buttonText}</Button>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Button>{loginPage.registerText}</Button>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <p>{loginPage.needHelpText}</p>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Button onClick={() => this.changeLanguage('english')}>ENG</Button>
            <Button onClick={() => this.changeLanguage('spanish')}>ESP</Button>
          </Col>
        </Row>
      </div>
    );
 }
}

export default App;