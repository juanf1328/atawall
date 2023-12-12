import React from 'react';
import { Button, Input, Row, Col } from 'antd';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
      showLoginForm: false, // Nuevo estado para controlar la visibilidad del formulario de inicio de sesión
    };
  }

  changeLanguage = (language) => {
    this.setState({ language });
  };

  showLoginForm = () => {
    this.setState({ showLoginForm: true });
  };

  render() {
    const { language, showLoginForm } = this.state;

    const loginPage = {
      title: language === 'english' ? 'atawall' : 'atawall',
      buttonText: language === 'english' ? 'Log In' : 'Iniciar Sesión',
      registerText: language === 'english' ? 'Register' : 'Registrarme',
      needHelpText: language === 'english' ? 'Need Help?' : 'Necesitas ayuda?',
    };

    return (
      <div className="login-container">
        <h1>{loginPage.title}</h1>
        <h2 className="subtitle">{language === 'english' ? 'Welcome' : 'Bienvenido'}</h2>
        {showLoginForm && (
          <>
           <Row>
  <Col span={8}>
    <Input
      style={{
        width: '14rem',
        marginBottom: '1rem',
        marginLeft:'-0.5rem',
        height:'2rem',
        marginTop:'1rem',  // Ajusta la separación vertical entre los inputs
        borderColor: '#1b1b1b',  // Cambia el color del borde al color del fondo
      }}
      placeholder={language === 'english' ? 'Email' : 'Correo electrónico'}
    />
  </Col>
</Row>
<Row>
  <Col span={8}>
    <Input.Password
      style={{
        width: '14rem',
        marginBottom: '1rem',
        marginLeft:'-0.5rem',
        height:'2rem',  // Ajusta la separación vertical entre los inputs
        borderColor: '#1b1b1b',  // Cambia el color del borde al color del fondo
      }}
      placeholder={language === 'english' ? 'Password' : 'Contraseña'}
    />
  </Col>
</Row>
          </>
        )}
<Row>
  <Col span={8}>
    <div className="button-container">
      <Button onClick={this.showLoginForm} style={{ width: '15rem', color: '#000', background: '#05c988', borderColor: '#05c988' }}>
        {loginPage.buttonText}
      </Button>
    </div>
    <div className="button-container">
      <Button style={{ width: '15rem', marginTop: '10px', background: '#1b1b1b', color: '#fff', borderColor: '#fff' }}>{loginPage.registerText}</Button>
    </div>
  </Col>
</Row>

<Row>
  <Col span={8}>
    <p style={{ color: '#05c988', textDecoration: 'underline', textDecorationColor: '#05c988', width: '7rem', cursor: 'pointer', marginLeft: '3rem' }}>{loginPage.needHelpText}</p>
  </Col>
</Row>
<Row>
  <Col span={8}>
    <div className="language-container">
      <Button style={{ color:'#7c7c7c', background:'#1b1b1b', borderColor:'#1b1b1b' }} onClick={() => this.changeLanguage('english')} className="language-button">ENG</Button>
      <div className="language-divider" />
      <Button style={{ color:'#7c7c7c', background:'#1b1b1b', borderColor:'#1b1b1b' }} onClick={() => this.changeLanguage('spanish')} className="language-button">ESP</Button>
    </div>
  </Col>
</Row>
      </div>
    );
  }
}

export default Login;
