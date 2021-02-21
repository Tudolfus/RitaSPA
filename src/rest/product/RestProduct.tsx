import { AxiosResponse } from 'axios';
import { getRequest } from '../../common/requests/BaseRequests';
import { IProduct } from '../../interfaces/products/IProduct';

export const getProduct = async (productName: string): Promise<AxiosResponse<IProduct[]>> => {
    return await getRequest<IProduct[]>(`https://localhost:44337/api/product/getproducts?productName=${productName}`);
};