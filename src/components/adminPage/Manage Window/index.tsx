import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import './tabStyle.css';
import Users from './Users';

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
                        <Tab
                            eventKey='Categories'
                            title='Categories'
                            style={{
                                fontSize: 300,
                                border: 1,
                                color: 'black'
                            }}
                        >
                            WIP
                        </Tab>
                        <Tab eventKey='Vouchers' title='Vouchers'>
                            WIP
                        </Tab>
                        <Tab eventKey='Users' title='Users'>
                            <Users></Users>
                        </Tab>
                        <Tab eventKey='Sellers' title='Sellers'>
                            WIP
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </>
    );
}
