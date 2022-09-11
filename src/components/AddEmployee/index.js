import {Button, Card, Form} from 'react-bootstrap';
import {useState} from 'react';
import './index.scss';

export function AddEmployee({onNewEmployeeAdded}) {
    const [nameSurname, setNameSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [salary, setSalary] = useState();
    const [department, setDepartment] = useState('');
    const [validated, setValidated] = useState(false);

    const addNewEmployee = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        const newEmployee = {
            nameSurname,
            emailAddress,
            salary,
            department,
            calculatedSalary: null,
        };
        onNewEmployeeAdded(newEmployee)
        setNameSurname('');
        setEmailAddress('');
        setSalary('');
        setDepartment('');
        setValidated(false)
    }

    return (
        <>
            <Card className='shadow text-center border-0 h-100'>
                <Card.Body>
                    <Card.Title className='pb-5 mt-2 text-primary'>
                        Çalışan Ekle
                    </Card.Title>
                    <Form className={'pt-5'} noValidate validated={validated} onSubmit={addNewEmployee}>
                        <Form.Control className='mb-2' placeholder='Adı Soyadı' value={nameSurname}
                                      onChange={(e) => setNameSurname(e.target.value)} required/>
                        <Form.Control className='mb-2' placeholder='E-posta' value={emailAddress}
                                      onChange={(e) => setEmailAddress(e.target.value)} required/>
                        <Form.Control className='mb-2' placeholder='Maaş' value={salary} type={'number'}
                                      onChange={(e) => setSalary(e.target.value)} required/>
                        <Form.Control className='mb-5' placeholder='Departman' value={department}
                                      onChange={(e) => setDepartment(e.target.value)} required/>
                        <Button className='w-75 text-white fw-bold' type={'submit'}>EKLE</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
