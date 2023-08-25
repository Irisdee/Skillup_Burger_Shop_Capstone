import React from "react";

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"sjda 12-32ss dsad"} </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Stuart"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {2131232123}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b> {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-02-2002"}
                    </p>
                    <p>
                        <b>Delivered At</b> {"23-02-2003"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b> {"COD"}
                    </p>
                    <p>
                        <b>Payment Reference</b>#{"asdasdsadsad"} </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2003"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>€ {3.95}
                    </p>
                    <p>
                        <b>Shipping Charges</b>€ {2.95}
                    </p>
                    <p>
                        <b>Tax included</b>€ {((3.95+2.95) * 0.09).toFixed(2)}
                    </p>
                    <p>
                        <b>Total Amount</b> € {(3.95 + 2.95).toFixed(2)} </p>
                </div>
                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{1}</span></div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{0}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{0}</span>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            &euro; {6.90.toFixed(2)}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};
export default OrderDetails;
