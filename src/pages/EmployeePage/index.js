import {Col, Container, Row} from 'react-bootstrap';
import {useMemo, useState} from 'react';
import {calculateQuarter, calculateSalary} from '../../utils/inflation';
import {AddEmployee} from '../../components/AddEmployee';
import {EmployeeTable} from '../../components/EmployeeTable';
import './index.scss';

export function EmployeePage() {
    const [employeeList, setEmployeeList] = useState([])
    const [date, setDate] = useState('');
    const currentQuarter = useMemo(() => calculateQuarter(date), [date])

    function onNewEmployeeAdded(newEmployee) {
        const newEmployeeList = [...employeeList, newEmployee];
        setEmployeeList(newEmployeeList);
    }

    const onCalculateClicked = () => {
        const newEmployeeList = [];
        for (const employee of employeeList) {
            const newEmployee = {
                ...employee,
                calculatedSalary: calculateSalary(Number(employee.salary), currentQuarter)
            }
            newEmployeeList.push(newEmployee);
        }
        setEmployeeList(newEmployeeList)
    }

    return (
        <Container fluid>
            <Row className='vh-100 align-items-center justify-content-center'>
                <Col lg={3} md={10} className='h-75 mt-lg-0 mt-sm-5'>
                    <AddEmployee onNewEmployeeAdded={onNewEmployeeAdded}/>
                </Col>
                <Col lg={8} md={10} className='h-75 mt-lg-0 mt-sm-5'>
                    <EmployeeTable employeeList={employeeList} onCalculateClicked={onCalculateClicked} date={date}
                                   setDate={setDate}/>
                </Col>
            </Row>
        </Container>
    )
}
