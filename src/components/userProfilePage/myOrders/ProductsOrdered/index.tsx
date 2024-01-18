/* eslint-disable @next/next/no-img-element */
import ChatIcon from '/public/assets/images/chaticon.png';
import Iphone from '/public/assets/images/Iphone.png';

interface IProps {}

const ProductsOrdered = ({}: IProps) => {
    return (
        <div
            className='col'
            style={{
                marginTop: 20,
                backgroundColor: '#ffffff',
                borderRadius: 10,
                fontSize: 18,
                maxHeight: '100%'
            }}
        >
            <div className='row'>
                <div className='col-12 d-flex'>
                    <div
                        className='col-5 text mt-2'
                        style={{
                            marginInlineStart: 15,
                            color: '#808089',
                            fontWeight: 500
                        }}
                    >
                        Ordered Product
                    </div>
                    <div
                        className='col-2 text mt-2'
                        style={{
                            color: '#808089',
                            fontWeight: 500
                        }}
                    >
                        Variations
                    </div>
                    <div
                        className='col-2 text mt-2'
                        style={{
                            color: '#808089',
                            fontWeight: 500
                        }}
                    >
                        Unit Price
                    </div>
                    <div
                        className='col-1 text mt-2'
                        style={{
                            color: '#808089',
                            fontWeight: 500
                        }}
                    >
                        Quantity
                    </div>
                    <div
                        className='col-1 text mt-2 text-left'
                        style={{
                            color: '#808089',
                            fontWeight: 500,
                            marginInlineStart: 75
                        }}
                    >
                        Total
                    </div>
                </div>
            </div>
            <hr
                style={{
                    marginTop: 5,
                    border: 'none',
                    borderTop: '2px dashed black',
                    width: '100%'
                }}
            ></hr>
            <div className='row'>
                <div
                    className='col'
                    style={{
                        marginInlineStart: 15,
                        color: '#27272A',
                        fontWeight: 500
                    }}
                >
                    <div className='col d-flex'>
                        <div style={{ fontWeight: 650 }}>TOKI Shop</div>
                        <div style={{ marginInlineStart: 15, marginTop: 10 }}>
                            <img
                                src={ChatIcon.src}
                                alt=''
                                style={{
                                    flexShrink: 0,
                                    width: '100%'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div
                    className='col d-flex'
                    style={{ alignItems: 'center', marginBottom: 60 }}
                >
                    <div
                        className='col-1'
                        style={{ marginTop: 15, marginInlineStart: 25 }}
                    >
                        <img
                            src={Iphone.src}
                            style={{ width: '100%' }}
                            alt=''
                        />
                    </div>
                    <div
                        className='col-3'
                        style={{
                            fontWeight: 500,
                            maxWidth: '10',
                            marginInlineStart: 25,
                            marginTop: 12
                        }}
                    >
                        iPhone 15 Pro 128GB Chính Hãng VN/A
                    </div>
                    <div
                        className='col-2'
                        style={{
                            marginTop: 15,
                            marginInlineStart: 25,
                            color: '#27272A'
                        }}
                    >
                        <div className='row'>Color: White Titan</div>
                        <div className='row'>Storage: 256GB</div>
                    </div>
                    <div
                        className='col-2'
                        style={{
                            marginTop: 15,
                            marginInlineStart: 25,
                            marginInlineEnd: 85,
                            color: '#000000',
                            width: '6em',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            fontWeight: 600
                        }}
                    >
                        26.200.000đ
                    </div>
                    <div
                        className='col-1'
                        style={{
                            marginTop: 15,
                            marginInlineStart: 25,
                            fontWeight: 600
                        }}
                    >
                        1
                    </div>
                    <div
                        className='col-2'
                        style={{
                            marginTop: 15,
                            marginInlineStart: 25,
                            color: '#00ADB5',
                            width: '6em',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            fontWeight: 600
                        }}
                    >
                        26.200.000đ12312321
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsOrdered;
