import { ImportProductDetail } from '../import-product-data/import-product-detail';
import { Bill } from '../bill-data/bill';

export class BillDetail {
  public id: number;
  public price: number;
  public quantity: number;
  public discount: number;
  public total: number;
  public status: number;
  public importProductDetailId: number;
  public importProductDetail: ImportProductDetail = new ImportProductDetail();
  public billId: number;
  public bill: Bill;
}
