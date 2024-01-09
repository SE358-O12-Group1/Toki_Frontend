

export interface VoucherStatusProps {
    status: string;
}

export default function VoucherStatus({ status }: VoucherStatusProps) {
    const handleStatus = (status: string) => {
        if(status == 'upcoming') {
            return (
                <div
                    style={{
                        paddingLeft: 4,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingRight: 4,
                        fontSize: 10,
                        display: 'inline-block',
                        backgroundColor: '#FFD9D9',
                        color: '#FF0000',
                        lineHeight: '12px',
                        marginLeft: -115,
                    }}
                >{status}</div>
            )
        }else if(status == 'ongoing') {
            return (
                <div
                    style={{
                        paddingLeft: 4,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingRight: 4,
                        backgroundColor: '#D2F8E2',
                        color: '#00C853',
                        fontSize: 10,
                        display: 'inline-block',
                        marginLeft: -115,
                        lineHeight: '12px',
                    }}
                >{status}</div>
            )
        } else {
            return (
                <div
                    style={{
                        paddingLeft: 4,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingRight: 4,
                        backgroundColor: '#D8D8D8',
                        color: '#777777',
                        fontSize: 10,
                        display: 'inline-block',
                        marginLeft: -115,
                        lineHeight: '12px',
                    }}
                >{status}</div>
            )
        }
    }

    return handleStatus(status)
}