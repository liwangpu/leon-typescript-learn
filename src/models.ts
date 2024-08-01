import { DataType, readExcel, ExcelField } from './excel-reader';

export class PlatformDTO {
  /**
   * 订单编号
   */
  @ExcelField({
    title: [
      'Order ID',
      'orderNumber',
    ],
  })
  orderNo: string;
  /**
   * 订单状态
   */
  @ExcelField({
    title: [
      'Order Status',
      'status',
    ],
  })
  orderStatus: string;
  /**
   * 取消原因
   */
  @ExcelField({
    title: ['Cancel reason'],
  })
  cancelReason: string;
  /**
   * 退货退款状态
   */
  @ExcelField({
    title: ['Return / Refund Status'],
  })
  refundStatus: string;
  /**
   * 追踪编号
   */
  @ExcelField({
    title: ['Tracking Number*'],
  })
  trackingNumber: string;
  /**
   * 运输选项
   */
  @ExcelField({
    title: ['Shipping Option'],
  })
  shippingOption: string;
  /**
   * 装运方式
   */
  @ExcelField({
    title: ['Shipment Method'],
  })
  shipmentMethod: string;
  /**
   * 预计发货时间
   */
  @ExcelField({
    title: ['Estimated Ship Out Date'],
    type: DataType.date,
  })
  estimatedShipOutDate: number;
  /**
   * 发货时间
   */
  @ExcelField({
    title: ['Ship Time'],
    type: DataType.date,
  })
  shipTime: number;
  /**
   * 订单创建时间
   */
  @ExcelField({
    title: [
      'Order Creation Date',
      'createTime',
    ],
    type: DataType.date,
  })
  orderCreationDate: number;
  /**
   * 订单支付时间
   */
  @ExcelField({
    title: [
      'Order Paid Time',
      'deliveredDate',
    ],
    type: DataType.date,
  })
  orderPaidTime: number;
  /**
   * 店铺产品SKU
   */
  @ExcelField({
    title: [
      'SKU Reference No.',
      'sellerSku',
    ],
  })
  sku: string;
  /**
   * 规格
   */
  @ExcelField({
    title: [
      'Variation Name',
      'variation',
    ],
  })
  variationName: string;
  /**
   * 原价
   */
  @ExcelField({
    title: [
      'Original Price',
      'unitPrice',
    ],
    type: DataType.number,
  })
  originPrice: number;
  /**
   * 交易价格
   */
  @ExcelField({
    title: [
      'Deal Price',
      'paidPrice',
    ],
    type: DataType.number,
  })
  dealPrice: number;
  /**
   * 销售数量
   */
  @ExcelField({
    title: ['Quantity'],
    type: DataType.number,
  })
  quanity: number;
  /**
   * 退回数量
   */
  @ExcelField({
    title: ['Returned quantity'],
    type: DataType.number,
  })
  returnedQuantity: number;
  /**
   * 卖家返佣
   */
  @ExcelField({
    title: ['Seller Rebate'],
    type: DataType.number,
  })
  sellerRebate: string;
  /**
   * 卖家折扣
   */
  @ExcelField({
    title: [
      'Seller Discount',
      'sellerDiscountTotal',
    ],
    type: DataType.number,
  })
  sellerDiscount: string;
  /**
   * 平台返佣
   */
  @ExcelField({
    title: ['Shopee Rebate'],
    type: DataType.number,
  })
  shopeeRebate: number;
  /**
   * SKU总重量
   */
  @ExcelField({
    title: ['SKU Total Weight'],
    type: DataType.number,
  })
  SKUtotalWeight: number;
  /**
   * 订单总重量
   */
  @ExcelField({
    title: ['Order Total Weight'],
    type: DataType.number,
  })
  orderTotalWeight: number;
  /**
   * 总金额
   */
  @ExcelField({
    title: ['Total Amount'],
    type: DataType.number,
  })
  totalAmount: number;
  /**
 * 买方支付运费
 */
  @ExcelField({
    title: [
      'Buyer Paid Shipping Fee',
      'shippingFee',
    ],
    type: DataType.number,
  })
  buyerPaidShippingFee: number;
  /**
   * 运费回扣估算
   */
  @ExcelField({
    title: ['Shipping Rebate Estimate'],
    type: DataType.number,
  })
  shippingRebateEstimate: number;
  /**
   * 交易手续费
   */
  @ExcelField({
    title: ['Transaction Fee'],
    type: DataType.number,
  })
  transactionFee: number;
  /**
   * 佣金
   */
  @ExcelField({
    title: ['Commission Fee'],
    type: DataType.number,
  })
  commissionFee: number;
  /**
   * 服务费
   */
  @ExcelField({
    title: ['Service Fee'],
    type: DataType.number,
  })
  serviceFee: number;
  /**
   * 总计
   */
  @ExcelField({
    title: ['Grand Total'],
    type: DataType.number,
  })
  grandTotal: number;
  /**
   * 预计运费
   */
  @ExcelField({
    title: ['Estimated Shipping Fee'],
    type: DataType.number,
  })
  estimatedShippingFee: number;
  /**
   * 送货地址
   */
  @ExcelField({
    title: ['Delivery Address'],
  })
  deliveryAddress: string;
  /**
   * 订单完成时间
   */
  @ExcelField({
    title: ['Order Complete Time'],
    type: DataType.date,
  })
  orderCompleteDate: number;
}
