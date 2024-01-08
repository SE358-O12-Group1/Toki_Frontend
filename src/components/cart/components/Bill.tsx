import orderApi, { CreateOrderRequest } from '@/apis/order.api';
import Button from '@/components/common/Button';
import { toastMessages, toastOptions } from '@/constants/toast';
import { useAppDispatch } from '@/redux/hook';
import { resetCart } from '@/redux/slices/cart.slice';
import { CheckoutItemType } from '@/types/CartType';
import { formatCurrency } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

interface IProps {
    totalPrice: number;
    voucher: number;
    productList: CheckoutItemType[];
    address: string;
    codeDiscount: string;
}

export default function Bill({
    totalPrice,
    voucher,
    productList,
    address,
    codeDiscount
}: IProps) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const order_lines = productList.map((orderLine) => ({
        product: orderLine.product._id,
        variants: orderLine.variants,
        quantity: orderLine.quantity
    }));

    const createOrderMutation = useMutation({
        mutationKey: 'order',
        mutationFn: (body: CreateOrderRequest) => orderApi.createOrder(body)
    });

    const handlePlaceOrder = () => {
        if (address === '') {
            toast.error('Please enter address to receive order', toastOptions);
            return;
        }

        createOrderMutation.mutate(
            {
                discount: codeDiscount,
                order_lines,
                delivery_address: address
            },
            {
                onSuccess: (res) => {
                    console.log(res);
                    toast.success(toastMessages.placeOrder, toastOptions);
                    dispatch(resetCart());
                    router.push('/cart');
                },
                onError: (err: any) => console.log(err)
            }
        );
    };

    return (
        <div className='container mt-4 grid grid-cols-3 rounded-sm bg-white p-4'>
            <div className='col-span-1 '></div>
            <div className='col-span-1 '></div>
            <div className='col-span-1'>
                <div className='flex items-center'>
                    <span className='text-sm text-gray-400'>Product cost</span>
                    <span className='ml-auto text-lg'>
                        {formatCurrency(totalPrice)} đ
                    </span>
                </div>
                <div className='flex items-center'>
                    <span className='text-sm text-gray-400'>Discount</span>
                    {voucher ? (
                        <span className='ml-auto text-lg'>
                            -{formatCurrency(voucher)} đ
                        </span>
                    ) : (
                        <span className='ml-auto text-lg'>0 đ</span>
                    )}
                </div>
                <div className='text-main mt-2 flex items-center font-semibold'>
                    <span className=''>Total payment</span>
                    <span className=' ml-auto text-xl'>
                        {formatCurrency(totalPrice - voucher)} đ
                    </span>
                </div>
                <div className='dashed-divider'></div>
                <Button
                    className='ml-auto px-4 text-lg uppercase text-white'
                    onClick={handlePlaceOrder}
                >
                    {'Place Order'}
                </Button>
            </div>
        </div>
    );
}
