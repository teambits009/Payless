"use client";

import { supabase } from "../lib/supabase";

type Payment = {
  id: number;
  amount: number;
  due_date: string;
  status: string;
};

export default function PaymentTable({ payments }: { payments: Payment[] }) {
  const handlePay = async (paymentId: number) => {
    const { error } = await supabase
      .from("payments")
      .update({ status: "paid", paid_at: new Date().toISOString() })
      .eq("id", paymentId);
    if (!error) window.location.reload(); // Refresh to update UI
  };

  return (
    <table className="w-full mt-4 text-left">
      <thead>
        <tr className="text-gray-700">
          <th>Amount</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id} className="border-t">
            <td>${payment.amount.toFixed(2)}</td>
            <td>{new Date(payment.due_date).toLocaleDateString()}</td>
            <td className={payment.status === "paid" ? "text-green-600" : "text-red-600"}>
              {payment.status}
            </td>
            <td>
              {payment.status === "pending" && (
                <button
                  onClick={() => handlePay(payment.id)}
                  className="text-blue-600 hover:underline"
                >
                  Pay Now
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}