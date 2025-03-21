"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("bnpl_transactions")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error(error);
      } else {
        setTransactions(data);
      }
      setLoading(false);
    };

    fetchTransactions();
  }, [router]);

  const handleAddTransaction = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase.from("bnpl_transactions").insert({
      user_id: user.id,
      product_name: "Test Product",
      total_amount: 150.00,
      installment_plan: 3,
    });

    if (!error) {
      const { data } = await supabase
        .from("bnpl_transactions")
        .select("*")
        .eq("user_id", user.id);
      setTransactions(data || []);
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-bold mb-6">Your BNPL Dashboard</h1>
      <button
        onClick={handleAddTransaction}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
      >
        Add Sample Transaction
      </button>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {transactions.map((txn) => (
            <div key={txn.id} className="p-4 border rounded-md">
              <p><strong>Product:</strong> {txn.product_name}</p>
              <p><strong>Total Amount:</strong> ${txn.total_amount}</p>
              <p><strong>Plan:</strong> {txn.installment_plan} months</p>
              <p><strong>Status:</strong> {txn.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}