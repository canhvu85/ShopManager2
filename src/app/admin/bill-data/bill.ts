import { BillDetail } from '../bill-data/bill-detail';

export class Bill {
  public id: number;

  public time_enter: string;
  public time_out: string;

  public status: number;
  public sub_total: number;
  public fee_service: number;
  public total_money: number;

  public UserId: string;
  public User: string;

  public CustomerId: string;
  public Customer: string;

  public BillDetails: BillDetail[];
}
