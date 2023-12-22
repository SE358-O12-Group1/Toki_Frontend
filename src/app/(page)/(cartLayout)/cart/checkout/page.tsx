import CartLayout from '../../layout';
import CartCheckout from '@/components/cart/components/CartCheckout';

const CheckoutPage = () => {
    return (
        <div className='min-h-[70vh]'>
            <CartCheckout></CartCheckout>
        </div>
    );
};

export default CheckoutPage;
