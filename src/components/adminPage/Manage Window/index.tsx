import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import './tabStyle.css';
import Categories from "./Categories"
import Vouchers from './Vouchers';
import Users from './Users';
import Sellers from './Sellers';

export default function ManageWindow() {
    return (
        <>
            <Container className='py-4'>
                <Row
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <Tabs
                        variant='pills'
                        defaultActiveKey='Categories'
                        className='mb-1 p-0'
                    >
                        <Tab eventKey='Categories' title='Categories'>
                            <Categories></Categories>
                        </Tab>
                        <Tab eventKey='Vouchers' title='Vouchers'>
                            <Vouchers></Vouchers>
                        </Tab>
                        <Tab eventKey='Users' title='Users'>
                            <Users></Users>
                        </Tab>
                        <Tab eventKey='Sellers' title='Sellers'>
                            <Sellers></Sellers>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </>
    );
}
