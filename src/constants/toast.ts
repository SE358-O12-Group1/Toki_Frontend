import { ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
    position: 'top-center',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
};

const toastMessages = {
    register: 'Register successfully!',
    login: 'Login successfully!',
    addToCart: 'Add to cart successfully!',
    deleteFromCart: 'Delete from cart successfully!',
    placeOrder: 'Place order successfully!'
};

export { toastMessages, toastOptions };
