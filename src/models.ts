import { readExcel, ExcelField } from './excel-reader';

export class PlatformDTO {
  /**
   * 订单编号
   */
  @ExcelField.Field({
    title: [
      'Order ID',
      'orderNumber',
    ],
    flag: 'order',
  })
  orderNo: string;
  /**
   * 订单状态
   */
  @ExcelField.Field({
    title: [
      'Order Status',
      'status',
    ],
    flag: 'order',
  })
  orderStatus: string;
  /**
   * 取消原因
   */
  @ExcelField.Field({
    title: ['Cancel reason'],
    flag: 'order',
  })
  cancelReason: string;
  /**
   * 退货退款状态
   */
  @ExcelField.Field({
    title: ['Return / Refund Status'],
    flag: 'order',
  })
  refundStatus: string;
  /**
   * 追踪编号
   */
  @ExcelField.Field({
    title: ['Tracking Number*'],
    flag: 'order',
  })
  trackingNumber: string;
  /**
   * 运输选项
   */
  @ExcelField.Field({
    title: ['Shipping Option'],
    flag: 'order',
  })
  shippingOption: string;
  /**
   * 装运方式
   */
  @ExcelField.Field({
    title: ['Shipment Method'],
    flag: 'order',
  })
  shipmentMethod: string;
  /**
   * 预计发货时间
   */
  @ExcelField.Field({
    title: ['Estimated Ship Out Date'],
    type: ExcelField.DataType.date,
    flag: 'order',
  })
  estimatedShipOutDate: number;
  /**
   * 发货时间
   */
  @ExcelField.Field({
    title: ['Ship Time'],
    type: ExcelField.DataType.date,
    flag: 'order',
  })
  shipTime: number;
  /**
   * 订单创建时间
   */
  @ExcelField.Field({
    title: [
      'Order Creation Date',
      'createTime',
    ],
    type: ExcelField.DataType.date,
    flag: 'order',
  })
  orderCreationDate: number;
  /**
   * 订单支付时间
   */
  @ExcelField.Field({
    title: [
      'Order Paid Time',
      'deliveredDate',
    ],
    type: ExcelField.DataType.date,
    flag: 'order',
  })
  orderPaidTime: number;
  /**
   * 店铺产品SKU
   */
  @ExcelField.Field({
    title: [
      'SKU Reference No.',
      'sellerSku',
    ],
    flag: 'production',
  })
  sku: string;
  /**
   * 规格
   */
  @ExcelField.Field({
    title: [
      'Variation Name',
      'variation',
    ],
    flag: 'production',
  })
  variationName: string;
  /**
   * 原价
   */
  @ExcelField.Field({
    title: [
      'Original Price',
      'unitPrice',
    ],
    type: ExcelField.DataType.number,
    flag: 'production',
  })
  originPrice: number;
  /**
   * 交易价格
   */
  @ExcelField.Field({
    title: [
      'Deal Price',
      'paidPrice',
    ],
    type: ExcelField.DataType.number,
    flag: 'production',
  })
  dealPrice: number;
  /**
   * 销售数量
   */
  @ExcelField.Field({
    title: ['Quantity'],
    type: ExcelField.DataType.number,
    flag: 'production',
  })
  quanity: number;
  /**
   * 退回数量
   */
  @ExcelField.Field({
    title: ['Returned quantity'],
    type: ExcelField.DataType.number,
    flag: 'production',
  })
  returnedQuantity: number;
  /**
   * 卖家返佣
   */
  @ExcelField.Field({
    title: ['Seller Rebate'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  sellerRebate: string;
  /**
   * 卖家折扣
   */
  @ExcelField.Field({
    title: [
      'Seller Discount',
      'sellerDiscountTotal',
    ],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  sellerDiscount: string;
  /**
   * 平台返佣
   */
  @ExcelField.Field({
    title: ['Shopee Rebate'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  shopeeRebate: number;
  /**
   * SKU总重量
   */
  @ExcelField.Field({
    title: ['SKU Total Weight'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  SKUtotalWeight: number;
  /**
   * 订单总重量
   */
  @ExcelField.Field({
    title: ['Order Total Weight'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  orderTotalWeight: number;
  /**
   * 总金额
   */
  @ExcelField.Field({
    title: ['Total Amount'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  totalAmount: number;
  /**
 * 买方支付运费
 */
  @ExcelField.Field({
    title: [
      'Buyer Paid Shipping Fee',
      'shippingFee',
    ],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  buyerPaidShippingFee: number;
  /**
   * 运费回扣估算
   */
  @ExcelField.Field({
    title: ['Shipping Rebate Estimate'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  shippingRebateEstimate: number;
  /**
   * 交易手续费
   */
  @ExcelField.Field({
    title: ['Transaction Fee'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  transactionFee: number;
  /**
   * 佣金
   */
  @ExcelField.Field({
    title: ['Commission Fee'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  commissionFee: number;
  /**
   * 服务费
   */
  @ExcelField.Field({
    title: ['Service Fee'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  serviceFee: number;
  /**
   * 总计
   */
  @ExcelField.Field({
    title: ['Grand Total'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  grandTotal: number;
  /**
   * 预计运费
   */
  @ExcelField.Field({
    title: ['Estimated Shipping Fee'],
    type: ExcelField.DataType.number,
    flag: 'order',
  })
  estimatedShippingFee: number;
  /**
   * 送货地址
   */
  @ExcelField.Field({
    title: ['Delivery Address'],
    flag: 'order',
  })
  deliveryAddress: string;
  /**
   * 订单完成时间
   */
  @ExcelField.Field({
    title: ['Order Complete Time'],
    type: ExcelField.DataType.date,
    flag: 'order',
  })
  orderCompleteDate: number;
}
