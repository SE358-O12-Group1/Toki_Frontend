import { ReactNode } from 'react';
import { IProduct, mockProducts } from '../productPage/mockData';
import CategoryCard from './components/CategoryCard';
import { ICategory, mockCategories } from './mockData';
import ProductCard from './product';
import Bank from '/public/assets/images/Bank.png';

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
    const categories: ICategory[] = mockCategories;
    const products: IProduct[] = mockProducts;

    function getProductGrid(products: IProduct[]) {
        let result: ReactNode[] = [];
        let index = 0;
        const len = products.length;
        while (index < len) {
            result.push(
                <div className='row mb-4' key={index}>
                    <div className='col'>
                        {index < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 1 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 1]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 2 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 2]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 3 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 3]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            );
            index += 4;
        }
        return result;
    }

    return (
        <>
            <div className='grid grid-cols-12 bg-gray-200 px-5 py-3'>
                <div className='col-span-3 mb-5'>
                    <div className='col offset-1 ms-5 rounded-md border bg-white shadow-md'>
                        <div className=' font-weight-bold mt-3  text-center'>
                            CATEGORY
                        </div>
                        {categories.map((cate) => (
                            <CategoryCard
                                category={cate}
                                key={cate._id || cate.name}
                            ></CategoryCard>
                        ))}
                    </div>

                    <div className='col offset-1 ms-5 mt-3 rounded-md border bg-white shadow-md'>
                        <button
                            type='button'
                            className='btn'
                            style={{ minWidth: 280 }}
                        >
                            <div className='row my-1 ms-1'>
                                <div className='d-flex'>
                                    <img src={Bank.src} />
                                    <div className='mt- ms-3 mt-1'>
                                        Start selling with Toki
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div />
                    </div>
                </div>

                <div className='col-span-9 mb-5 me-5 px-5'>
                    {getProductGrid(products)}
                </div>
            </div>
        </>
    );
}
