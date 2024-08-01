import * as fs from 'fs';
import * as path from 'path';
import { DataType, readExcel, ExcelField } from './excel-reader';
import "reflect-metadata";
import { PlatformDTO } from './models';
// const filename = path.join(__dirname, '../', 'files', '虾皮本土.xlsx');
// const filename = path.join(__dirname, '../', 'files', '虾皮本土1.xlsx');
const filename = path.join(__dirname, '../', 'files', 'lazada本土.xlsx');

const p=new PlatformDTO();



(async () => {
  const datas = await readExcel<PlatformDTO>({
    filename,
    headerRowIndex: 1,
    DTO: PlatformDTO,
  });
  console.log(`datas:`, datas);
})();


// No of product in order
// Order Total Weight
// Voucher Code
// Seller Voucher
// Seller Absorbed Coin Cashback
// Shopee Voucher
// Bundle Deal Indicator
// Shopee Bundle Discount
// Seller Bundle Discount
// Shopee Coins Offset
// Credit Card Discount Total
// Total Amount
// Buyer Paid Shipping Fee
// Shipping Rebate Estimate
// Reverse Shipping Fee
// Transaction Fee
// Commission Fee
// Service Fee
// Grand Total
// Estimated Shipping Fee
// Username (Buyer)
// Receiver Name
// Phone Number
// Delivery Address
// Town
// District
// City
// Province
// Country
// Zip Code
// Remark from buyer
// Order Complete Time
// Note