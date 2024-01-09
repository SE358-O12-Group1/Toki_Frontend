import React from 'react';
import Circle from '/public/assets/images/Ellipse.png';
import Button from '@/components/common/Button';
import { mockCategory } from '../mockCategory';

export const Category = () => {
    const handleEdit = (index: number) => {
        return
    }

    const handleDelete = (index: number) => {
        
    }

    return (
        mockCategory.map((category, index) => (
            <div
                key={index}
                className='grid grid-cols-12'
                style={{
                    borderLeft: '2px solid #EEEEEE',
                    marginLeft: 30,
                    marginRight: 30,
                    paddingLeft: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 20,
                    alignItems: 'center',
                    borderBottom: '2px solid #EEEEEE',
                    borderRight: '2px solid #EEEEEE'
                }}
            >
                <div 
                    className='col-span-6' 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <img 
                        src={category.image} 
                        style={{
                            width: 60,
                            height: 60,
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <div style={{ paddingLeft: 10, fontWeight: 600 }}>
                        {category.name}
                    </div>
                </div>
                <div className='col-span-6'>
                    <div className='grid grid-cols-6 items-center'>
                        <div className='col-span-3 text-center'>
                            {category.shopsales}
                        </div>
                        <div className='col-span-3 flex text-center'>
                            <Button
                                className=''
                                backgroundColor='#FFFFFF'
                                textColor='#00adb5'
                                onClick={() => {
                                    handleEdit(parseInt(category._id))
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                className='ml-2'
                                backgroundColor='#FFFFFF'
                                textColor='#FF0000'
                                onClick={() => {
                                    handleDelete(parseInt(category._id))
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}