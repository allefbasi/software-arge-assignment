import {Button, Card, Col, Container, Form, InputGroup, Row} from 'react-bootstrap';
import {Eye, EyeSlash, Lock, Person} from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import './index.scss'
import dqTurkiyeIcon from './img/icon.png'

export function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onLoginClicked = () => {
        navigate('/employee');
    }

    return (
        <Container fluid>
            <Row className='vh-100 align-items-center justify-content-center'>
                <Col lg={4} md={6} xs={8}>
                    <Card className='shadow text-center border-0'>
                        <Card.Body>
                            <Card.Title>
                                <img className='login-dq-turkiye-icon mb-3' src={dqTurkiyeIcon} alt=''/>
                            </Card.Title>
                            <Card.Text className='text-light mb-5'>
                                Login Portal'a hoş geldiniz.
                            </Card.Text>
                            <hr className='mx-3 mb-5 line'/>
                            <Form className='mx-5' onSubmit={onLoginClicked}>
                                <Form.Group className='mb-3'>
                                    <InputGroup size='lg' className='mb-3 shadow-sm rounded'>
                                        <InputGroup.Text id='username' className='bg-transparent pe-0 ps-2'>
                                            <Person className='text-light' size={20}/>
                                        </InputGroup.Text>
                                        <Form.Control className='border-start-0 ps-2 p-3'
                                                      placeholder='Kullanıcı Adı'
                                                      required/>
                                    </InputGroup>
                                    <InputGroup size='lg' className='mb-2 shadow-sm rounded'>
                                        <InputGroup.Text id='password' className='bg-transparent pe-0 ps-2'>
                                            <Lock className='text-light' size={20}/>
                                        </InputGroup.Text>
                                        <Form.Control className='border-start-0 ps-2 border-end-0 p-3'
                                                      type={showPassword ? 'text' : 'password'} placeholder='Şifre'
                                                      required/>
                                        <InputGroup.Text className='bg-transparent'>
                                            {
                                                showPassword ?
                                                    <Button className='border-0 bg-transparent p-0'
                                                            onClick={() => setShowPassword(false)}>
                                                        <Eye size={18} className='text-light'/>
                                                    </Button> :
                                                    <Button className='border-0 bg-transparent p-0'
                                                            onClick={() => setShowPassword(true)}>
                                                        <EyeSlash size={18} className='text-light'/>
                                                    </Button>
                                            }
                                        </InputGroup.Text>
                                    </InputGroup>
                                    <div className='d-flex justify-content-between text-light mb-5'>
                                        <Form.Check type='checkbox' id='default-checkbox' label='Şifremi hatırla'/>
                                        <a href='' className='text-decoration-none text-light'>Şifreni mi
                                            unuttun?</a>
                                    </div>
                                    <Button type='submit'
                                            className='text-white fw-bold w-100 p-2 rounded-3 login-button'>GİRİŞ
                                        YAP</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
