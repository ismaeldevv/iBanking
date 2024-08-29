import React from "react";
import Navbar from "../ui/navbar";

import OverviewChart from "../ui/OverviewChart";
import InvoiceItem from '../ui/InvoiceItem';
import TransactionItem from "../ui/TransactionItem";

import {
  FaBalanceScale,
  FaExclamation,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Dashboard: React.FC = () => {
  const data = {
    overview: [
      {
        day: "Mon",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        day: "Tue",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        day: "Wed",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        day: "Thu",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        day: "Fri",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        day: "Sat",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        day: "Sun",
        income: Math.floor(Math.random() * 5000) + 1000,
        expenses: Math.floor(Math.random() * 5000) + 1000,
      },
    ],
    invoices: [
      {
        amount: 1500,
        date: "28/10/2023",
        issuer: "John Doe",
        paid: false,
      },
      {
        amount: 8200,
        date: "28/10/2023",
        issuer: "Bobby Smith",
        paid: false,
      },
      {
        amount: 13999,
        date: "28/10/2023",
        issuer: "Michael Jackson",
        paid: true,
      },
      {
        amount: 300,
        date: "28/10/2023",
        issuer: "Some Body",
        paid: true,
      },
      {
        amount: 300,
        date: "28/10/2023",
        issuer: "Some Body",
        paid: true,
      },
    ],
    transactions: [
      { amount: 1500, message: "Salary", date: "28/10/2023", type: "inbound" },
      { amount: 2900, message: "Salary", date: "28/10/2023", type: "inbound" },
      {
        amount: 12700,
        message: "Withdraw",
        date: "28/10/2023",
        type: "outbound",
      },
      { amount: 3500, message: "Deposit", date: "28/10/2023", type: "inbound" },
      { amount: 3500, message: "Deposit", date: "28/10/2023", type: "inbound" },
    ],
  };

  if (!data) return null;
  return (
    <div className="bg-background relative flex h-[768px] w-[1280px] rounded-[0.5rem]">
      <Navbar />

      <div className="flex h-full w-full flex-col gap-2 p-2">
        <div className="flex justify-between gap-2">
          <div className="bg-card flex justify-between gap-4 rounded-[0.5rem] p-4 shadow flex-1">
            <div className="w-[300px] flex items-center gap-2">
              <div className="min-w-0 shrink-0 grow-0 basis-full">
                <div className="bg-background flex flex-col gap-4 rounded-[0.5rem] border p-4 shadow-sm">
                  <div className="line-clamp-1">Personal Card</div>
                  <div className="bg-background -ml-2 -mt-2 -mb-2 text-foreground text-sm p-2">
                    1234 1234 1234 1234
                  </div>
                  <div className="flex justify-between text-xs">
                    <div className="flex items-center flex-row gap-3">
                      <div className="flex items-left flex-col gap-1">
                        <h2 className="text-foreground">Author</h2>
                        <p className="text-muted-foreground">Ismael Dev</p>
                      </div>
                      <div className="flex items-left flex-col gap-1">
                        <h2 className="text-foreground">Expiration</h2>
                        <p className="text-muted-foreground">09/28</p>
                      </div>
                    </div>
                    <div className="text-muted-foreground text-xl mt-5">
                      <RiMastercardFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-muted-foreground flex items-center justify-between">
                <h2 className="font-bold">Card balance</h2>
                <FaBalanceScale />
              </div>
              <div className="text-3xl">$3,500</div>
            </div>
          </div>
          <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow flex-1">
            <div className="text-muted-foreground flex items-center justify-between">
              <h2 className="font-bold">Informations</h2>
              <FaExclamation />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-lg">
                Welcome <span className="text-[#693838]">Ismael Dev</span>
              </div>
              <div className="text-xs text-muted-foreground w-3/4">
                Here you can manage, check, and send your money. You can also
                create and edit your cards, set spending limits, view your
                transaction history, and adjust security settings to keep
                everything safe and secure.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card flex flex-col gap-6 rounded-[0.5rem] p-4 shadow">
          <div className="text-muted-foreground flex items-center justify-between">
            <h2 className="font-bold">Weekly overview</h2>
            <IoStatsChart />
          </div>
          <OverviewChart data={data?.overview} />
        </div>
        <div className="flex flex-1 gap-2">
          <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow flex-1">
            <div className="text-muted-foreground flex items-center justify-between">
              <h2 className="font-bold">Recent transactions</h2>
              <IoIosSend />
            </div>
            <div className="flex flex-col gap-4 pr-4 overflow-y-scroll max-h-[90px]">
              {data.transactions?.map((transaction) => (
                <TransactionItem
                  key={`${transaction.amount}-${transaction.date}`}
                  amount={transaction.amount}
                  message={transaction.message}
                  date={transaction.date}
                  type={transaction.type as 'inbound' | 'outbound'}
                />
              ))}
            </div>
          </div>
          <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow flex-1">
            <div className="text-muted-foreground flex items-center justify-between">
              <h2 className="font-bold">Recent invoices</h2>
              <FaFileInvoiceDollar />
            </div>
            <div className="flex flex-col gap-4 pr-4 overflow-y-scroll max-h-[90px]">
              {data.invoices?.map((invoice) => (
                <InvoiceItem
                  key={`${invoice.issuer}-${invoice.date}`}
                  amount={invoice.amount}
                  date={invoice.date}
                  issuer={invoice.issuer}
                  paid={invoice.paid}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
