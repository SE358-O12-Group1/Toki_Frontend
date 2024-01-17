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

    return (
        <div
            className='modal fade'
            id='exampleModal'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            Confirm
                        </h5>
                        <button
                            type='button'
                            className='close'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {'Delete items?\nThis action cannot be revert.'}
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            data-dismiss='modal'
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            type='button'
                            className='btn btn-main'
                            onClick={onConfirm}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
