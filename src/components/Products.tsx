import Smartwatch from '../assets/Smartwatch.jpg'
import GarminFenix from '../assets/GarminFenix.jpg'
import Huaweiwatch from '../assets/Huaweiwatch.jpg'

export type Product = {
    id: number,
    name: string,
    image: string, 
    price: number
    quantity: number
}

export const Products: Product[] = [
    {
        id: 1,
        name: 'Redmi Watch 5 Lite Xiaomi',
        image: Smartwatch,
        price: 64.00,
        quantity: 0
    },
    {
        id: 2,
        name: 'Huawei Watch GT 5',
        image: Huaweiwatch,
        price: 308.00,
        quantity: 0
    },
    {
        id: 3,
        name: 'Garmin Fenix 8',
        image: GarminFenix,
        price: 1033.00,
        quantity: 0
    }
]