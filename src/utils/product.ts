import { CheckoutItemType } from '@/types/CartType';
import { SellerType } from '@/types/ProductType';

type IProductGroup = {
    seller: Pick<SellerType, '_id' | 'name'>;
    products: number[];
};

export const groupProductsByShops = (cart: CheckoutItemType[]) => {
    const productGroups: IProductGroup[] = [];

    cart.forEach((cartItem, index) => {
        var temp = -1;

        productGroups.forEach((group, groupIndex) => {
            if (group.seller._id === cartItem.product.seller._id) {
                temp = groupIndex;
                productGroups[groupIndex].products.push(index);
            }
        });

        if (temp === -1) {
            productGroups.push({
                seller: cartItem.product.seller,
                products: [index]
            });
        }
    });
    return productGroups;
};
