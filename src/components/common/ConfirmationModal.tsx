import React, { useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm
}) => {
    if (!isOpen) return null;

    // return (
    //     <div
    //         className='modal fade'
    //         id='exampleModal'
    //         tabIndex={-1}
    //         role='dialog'
    //         aria-labelledby='exampleModalLabel'
    //         aria-hidden='true'
    //     >
    //         <div className='modal-dialog' role='document'>
    //             <div className='modal-content'>
    //                 <div className='modal-header'>
    //                     <h5 className='modal-title' id='exampleModalLabel'>
    //                         Confirm
    //                     </h5>
    //                     <button
    //                         type='button'
    //                         className='close'
    //                         data-dismiss='modal'
    //                         aria-label='Close'
    //                     >
    //                         <span aria-hidden='true'>&times;</span>
    //                     </button>
    //                 </div>
    //                 <div className='modal-body'>
    //                     {'Delete items?\nThis action cannot be revert.'}
    //                 </div>
    //                 <div className='modal-footer'>
    //                     <button
    //                         type='button'
    //                         className='btn btn-secondary'
    //                         data-dismiss='modal'
    //                         onClick={onClose}
    //                     >
    //                         Close
    //                     </button>
    //                     <button
    //                         type='button'
    //                         className='btn btn-main'
    //                         onClick={onConfirm}
    //                     >
    //                         Save changes
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div
                style={{
                    width: 700,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    padding: 30,
                }}
            >
                <div className='modal-header'>  
                    <h5 style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>Delete item</h5>
                </div>
                <div className='modal-body'>
                    <p style={{
                        fontSize: 16,

                    }}>Delete items? This action cannot be reverted.</p>
                </div>
                <div className='modal-footer'
                    style={{
                        marginTop: 50,
                    }}
                >
                    <button className='btn btn-secondary' style={{marginRight: 20}} onClick={onClose}>
                        Close
                    </button>
                    <button className='btn btn-danger' onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
