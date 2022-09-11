import {Button, Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import {calculateInflation, calculateQuarter} from "../../utils/inflation";
import './index.scss'
import {useMemo} from 'react';

export function EmployeeTable({employeeList, onCalculateClicked, date, setDate}) {
    const currentQuarter = useMemo(() => calculateQuarter(date), [date])
    const currentInflation = useMemo(() => calculateInflation(currentQuarter), [currentQuarter])

    return (
        <Card className='h-100 shadow text-primary border-0'>
            <Card.Body>
                <Card.Text className='text-center mb-3'>
                    <h6>ABC Şirketi</h6>
                </Card.Text>
                <Container fluid>
                    <Row className='h-100'>
                        <Col xs={9} className='d-flex justify-content-center'>
                            <div className='table-div overflow-scroll'>
                                <Table striped bordered hover size='sm'>
                                    <thead>
                                    <tr className='text-center'>
                                        <th>Ad Soyad</th>
                                        <th>E-posta</th>
                                        <th>Maaş</th>
                                        <th>Departman</th>
                                        <th>Hesaplanan Maaş</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        employeeList.map((employee, index) => (
                                            <tr key={index} className={'text-center overflow-hidden'}>
                                                <td>{employee.nameSurname}</td>
                                                <td>{employee.emailAddress}</td>
                                                <td>{Number(employee.salary).toLocaleString('tr-TR', {maximumFractionDigits: 2})}₺</td>
                                                <td>{employee.department}</td>
                                                <td>{!employee.calculatedSalary ? ' ' : (employee.calculatedSalary)?.toLocaleString('tr-TR', {maximumFractionDigits: 2}) + '₺'}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col xs={3} className='d-flex flex-column align-items-center justify-content-between'>
                            <Form className='w-100'>
                                <Form.Control
                                    className='date-input text-center fw-bold border-primary'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder='Tarih Seçiniz'
                                    type='text'
                                    size='sm'
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => e.target.type = 'text'}
                                />
                            </Form>
                            {
                                date.length === 0 ?
                                    null :
                                    <div className='text-center fs-5'>
                                        <div className='mb-5'>
                                            Seçtiğiniz tarih
                                            <div className='fw-bold fs-4'>
                                                {currentQuarter}. çeyreğe
                                            </div>
                                            denk gelmektedir.
                                        </div>
                                        Enflasyon oranı
                                        <div className='fw-bold fs-4'>{currentInflation}%</div>
                                    </div>
                            }
                            <Button className='text-white fw-bold w-100'
                                    disabled={date.length === 0}
                                    onClick={() => onCalculateClicked()}>HESAPLA</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}
