import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [100, 101, 102, 103];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
                <tr key={i}>
                    <td>{i}</td>
                    <td>Processing</td>
                    <td>1</td>
                    <td>€ {3.95}</td>
                    <td>iDeal</td>
                    <td>
                        <Link to={`/order/${i}`}>
                            <AiOutlineEye />
                        </Link>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
