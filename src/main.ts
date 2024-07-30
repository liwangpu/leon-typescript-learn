import * as fs from 'fs';
import * as path from 'path';
import { DataType, readExcel } from './excel-reader';

// const filename = path.join(__dirname, '../', 'files', '虾皮本土.xlsx');
const filename = path.join(__dirname, '../', 'files', '虾皮本土1.xlsx');
// const filename = path.join(__dirname, '../', 'files', 'a.xlsx');


const dataMapping = {
  orderNo: ['Order ID'],
  orderStatus: ['Order Status'],
  cancelReason: ['Cancel reason'],
  refundStatus: ['Return / Refund Status'],
  trackingNumber: ['Tracking Number*'],
  shippingOption: ['Shipping Option'],
  shipmentMethod: ['Shipment Method'],
  estimatedShipOutDate: ['Estimated Ship Out Date'],
  shipTime: ['Ship Time'],
  // xxx: ['Order Creation Date'],
  orderPaidTime: ['Order Paid Time'],
  sku: ['SKU Reference No.'],
  variationName: ['Variation Name'],
  originPrice: ['Original Price'],
  dealPrice: ['Deal Price'],
  quanity: ['Quantity'],
  returnedQuantity: ['Returned quantity'],
  sellerRebate: ['Seller Rebate'],
  sellerDiscount: ['Seller Discount'],
  shopeeRebate: ['Shopee Rebate'],
  SKUtotalWeight: ['SKU Total Weight'],
  orderTotalWeight: ['Order Total Weight'],
  deliveryAddress: ['Delivery Address'],
  orderCompleteDate: ['Order Complete Time'],
  // xxx: [''],
  // xxx: [''],
  // xxx: [''],
  // xxx: [''],
  // xxx: [''],
};

const dataTypeMapping = {
  estimatedShipOutDate: DataType.date,
  shipTime: DataType.date,
  orderPaidTime: DataType.date,
  orderCompleteDate: DataType.date,
  originPrice: DataType.number,
  dealPrice: DataType.number,
  quanity: DataType.number,
  returnedQuantity: DataType.number,
  sellerRebate: DataType.number,
  sellerDiscount: DataType.number,
  shopeeRebate: DataType.number,
  orderTotalWeight: DataType.number,
};



(async () => {
  const datas = await readExcel({
    filename,
    // worksheets: ['orders'],
    headerRowIndex: 1,
    dataMapping,
    dataTypeMapping,
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