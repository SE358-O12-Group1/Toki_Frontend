import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import './tabStyle.css';
export default function ManageWindow() {
    return (
        <>
            <Container className='py-4'>
                <Row style={{ justifyContent: 'center' }}>
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
                        <Tab
                            eventKey='Vouchers'
                            title='Vouchers'
                            style={{ fontSize: 300 }}
                        >
                            WIP
                        </Tab>
                        <Tab
                            eventKey='Users'
                            title='Users'
                            style={{ fontSize: 300 }}
                        >
                            WIP
                        </Tab>
                        <Tab
                            eventKey='Sellers'
                            title='Sellers'
                            style={{ fontSize: 300 }}
                        >
                            WIP
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </>
    );
}
