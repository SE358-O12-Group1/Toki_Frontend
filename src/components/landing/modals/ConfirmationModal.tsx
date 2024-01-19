import UserType from '@/types/UserType';

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
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal'>
                <div className='modal-header'>
                    <h5 className='modal-title'>Upgrade to Seller</h5>
                    <span className='close' onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className='modal-body'>
                    <p>Do you want to upgrade your account to seller?</p>
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
