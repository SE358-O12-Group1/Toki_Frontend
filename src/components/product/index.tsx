import { strict } from 'assert';
import { maxHeaderSize } from 'http';
import { MouseEventHandler, ReactNode } from 'react';
import Iphone from "src/app/assets/images/Iphone.png"
import Rating from "src/app/assets/images/Rating.png"



export interface IProductProps {
    className?: string;
    id?: string;
    placeholder?: string;
    disable?: boolean;
    required?: boolean;
    children?: ReactNode;
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


export default async function Button(props: IProductProps) {
    const {
        className,
        id,
        placeholder,
        disable,
        children,
        backgroundColor,
        onClick
    } = props;
    return (
        <>
        <div >
        <button
                disabled={disable}
                id={id}
                style={{
                    borderWidth:1,
                    backgroundColor: backgroundColor || '#FFFFFF',
                    borderRadius: 5,
                    padding: 2,
                    width:205,
                    color: '#000000',
                    textAlign:'left',
                    marginBottom:25
                    }}
                className={className + 'form-control'}
                placeholder={placeholder}
                onClick={onClick}
            >
                <img className="ms-4" style={{ scale:0.8}} src={Iphone.src}></img>
                <div className='text-left'>
                    <div className='ms-2 ' style={{fontSize:16}}> iPhone 15 Pro 128GB Chính Hãng VN/A </div>
                    <div className='row d-flex-fluid p-2'>
                        <div className='col-3 me-1'>
                            <img className="mb-2"src={Rating.src}></img>
                        </div>
                        <div className='col' style={{fontSize:12}}> | 12k sold</div>
                    </div>
                    <h5 className='ms-2 ' style={{fontSize:18}}>26.200.000 đ</h5>
                    <div className='row d-flex'>
                        <div className='col-3 main-colored ms-4' style={{fontWeight:500}}> 
                            <div className='-ms-4 text-center'>-10%</div> 
                        </div>
                        <div className='col ' style={{fontSize:12}}> 28.999.000 đ</div>
                    </div>
                    <div className='text-end me-2' style={{fontSize:10, fontWeight:300}}> Tp Hồ Chí Minh</div>
                </div>
                
            </button>


            {children}
        </div>
            
        </>
    );
}

