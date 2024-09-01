import React from "react";
import { ReceiptText, SearchIcon } from "lucide-react";
import Navbar from "../ui/navbar";

import InvoiceTypeButtons from "../ui/InvoiceTypeButtons";
import UnpaidInvoicesTable from "../modals/UnpaidInvoicesTable";
import PaidInvoicesTable from "../modals/PaidInvoicesTable";
import SentInvoicesTable from "../modals/SentInvoicesTable";

import Pagination from "../modals/Pagination";

type BaseInvoice = {
  id: number;
  type: "paid" | "unpaid";
  amount: number;
  message: string;
  date: string;
  target: number;
};

const DEBUG_INVOICES = [
  {
    id: 0,
    type: "paid",
    amount: 3000,
    to: "Some account",
    message: "",
    date: "11/11/1111",
  },
];

const Invoices: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [tab, setTab] = React.useState<"unpaid" | "paid" | "sent">("unpaid");

  return (
    <div className="bg-background relative flex h-[768px] w-[1280px] rounded-[0.5rem]">
      <Navbar />

      <div className="flex h-full w-full flex-col gap-2 overflow-hidden p-2">
        <div className="flex h-full w-full flex-col gap-2 p-2">
          <div className="bg-card flex flex-col rounded-[0.5rem] p-4 shadow h-full gap-4">
            <div className="text-muted-foreground flex items-center justify-between">
              <h2 className="font-bold">Invoices</h2>
              <ReceiptText />
            </div>
            <div>
              <div className="relative h-9">
                <div className="text-muted-foreground pointer-events-none absolute top-1/2 flex h-full w-9 -translate-y-1/2 transform items-center justify-center">
                  <SearchIcon className="w-5" />
                </div>
                <input
                  className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-full w-full rounded-[0.354rem] border bg-transparent px-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="grid gap-2"></div>
              <InvoiceTypeButtons tab={tab} setTab={setTab} />
            </div>
            <div className="flex h-full flex-col justify-between">
              {tab === "unpaid" && <UnpaidInvoicesTable />}
              {tab === "paid" && <PaidInvoicesTable />}
              {tab === "sent" && <SentInvoicesTable />}
              <Pagination
                maxPages={3}
                page={page}
                setPage={(page) => setPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
