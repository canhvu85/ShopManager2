import { ImportProductDetail } from './import-product-detail';

export class ImportProduct {
  public id: number;

  public time_enter: string;

  public status: boolean;
  public sub_total: number;
  public total_money: number;

  public UserId: string;
  public User: string;

  public ImportProductDetails: ImportProductDetail[];
}
