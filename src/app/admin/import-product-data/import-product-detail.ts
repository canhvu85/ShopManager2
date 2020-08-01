import { ImportProduct } from './import-product';
import { Product } from '../product-data/product';

export class ImportProductDetail {
  public id: number;

  public priceImport: number;
  public priceRetail: number;
  public priceWholesale: number;
  public quantity: number;
  public quantityReal: number;
  public total: number;
  public status: number;
  public productId: number;
  public product: Product = new Product();
  public importProductId: number;
  public importProduct: ImportProduct;
}
