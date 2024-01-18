import UserType from '@/types/UserType';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    user: UserType;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    user
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
            <div className='modal'>
                <div className='modal-header'>
                    <h5 className='modal-title'>Set status</h5>
                    <span className='close' onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className='modal-body'>
                    <p>
                        Change status of user{' '}
                        <span className='font-bold'>{user.name}</span> to{' '}
                        <span
                            className={
                                user.status === 1
                                    ? 'text-red-500'
                                    : 'text-green-500'
                            }
                        >
                            {user.status === 1 ? 'Inactive' : 'Active'}
                        </span>
                        ?
                    </p>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-secondary' onClick={onClose}>
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
