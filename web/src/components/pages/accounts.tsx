import React, { useEffect, useState } from "react";
import Navbar from "../ui/navbar";
import { formatNumber } from "../../utils/formatNumber";
import {
  ServerOff,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Plus,
  ScanText,
  Settings,
  Landmark,
  Wallet,
  Move3D,
  Notebook,
  Logs,
  MoveRight,
  Share,
  Pen,
  Trash
} from "lucide-react";
import { formatNumberWithSpaces } from "../../utils/formatCardNumber";

import DepositWithdrawModal from '../popup/DepositWithdrawModal'
import TransferAccountModal from '../popup/TransferAccountModal'

const Accounts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activePage, setActivePage] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<any>(null);

  const items = [
    {
      id: 3157587991234535,
      balance: 132032,
      label: "Some name",
      owner: "Some owner",
      type: "personal",
      role: "owner",
    },
    {
      id: 3124567891234535,
      balance: 0,
      label: "Some name",
      owner: "Some owner",
      type: "shared",
      role: "viewer",
    },
    {
      id: 1234567891234535,
      balance: 132032,
      label: "My Account",
      isDefault: true,
      owner: "Some owner",
      type: "personal",
      role: "owner",
    },
    {
      id: 1234567891234532,
      balance: 132032,
      label: "Some name",
      owner: "Some owner",
      type: "shared",
      role: "manager",
    },
    {
      id: 1234567891234589,
      balance: 132032,
      label: "Some name",
      owner: "Some owner",
      type: "personal",
      role: "owner",
    },
    {
      id: 1234567891234576,
      balance: 132032,
      label: "Some name",
      owner: "Some owner",
      type: "personal",
      role: "owner",
    },
    {
      id: 1234567891234567,
      balance: 132032,
      label: "Some name",
      owner: "Some owner",
      type: "personal",
      role: "owner",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  useEffect(() => {
    if (activePage !== null) {
      // Trouver l'élément actif en fonction de l'ID
      const item = items.find((item) => item.id === activePage);
      setActiveItem(item || null); // Mettre à jour l'élément actif
    }
  }, [activePage]);

  const [DepositWithdrawData, SetDepositWithdrawData] = useState<any>(null);
  const [isDepositWithdraw, SetDepositWithdraw] = useState<boolean>(false);
  const [isTransferAccount, SetTransferAccount] = useState<boolean>(false);

  const handleDepositWithdraw = (type: 'withdraw' | 'deposit' | 'close', value?: number) => {
    if (type === 'close') return SetDepositWithdraw(false);

    console.log(`FETCH ${type} / ${value}`);
    return SetDepositWithdraw(false)
  }

  const handleTransfer = (type: 'transfer' | 'close', id?: number , value?: number) => {
    if (type === 'close') return SetTransferAccount(false);

    console.log(`FETCH ${type} / ${id} / ${value}`);
    return SetTransferAccount(false)
  }

  return (
    <div className="bg-background relative flex h-[768px] w-[1280px] rounded-[0.5rem]">
      <Navbar />

      <div className="flex h-full w-full flex-col gap-2 overflow-hidden p-2">
        <React.Suspense fallback={<p>Loading...</p>}>
          <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow overflow-visible">
            <div className="text-muted-foreground flex items-center justify-between">
              <h2 className="font-bold">Cards</h2>
              <CreditCard />
            </div>

            <div className="relative flex flex-col items-center w-full">
              <div className="flex items-center w-full">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground shadow hover:bg-primary hover:text-foreground h-8 w-8 rounded-full"
                >
                  <ChevronLeft />
                </button>
                <div className="flex flex-1 justify-start gap ml-5 mr-2">
                  <div className="flex w-[250px] flex-col items-center justify-center rounded-[0.5rem] border border-dashed bg-background p-4 shadow transition-all hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-secondary m-2">
                    <Plus />
                  </div>
                  {currentItems.map((item: any, index) => (
                    <div
                      key={index}
                      onClick={() => setActivePage(item.id)}
                      className={` ${
                        activePage === item.id
                          ? "-translate-y-1 scale-105 cursor-pointer bg-secondary"
                          : ""
                      } flex w-[250px] flex-col rounded-[0.5rem] border bg-background p-4 shadow transition-all hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-secondary m-2`}
                    >
                      <h2 className="line-clamp-1">{item.owner}</h2>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {item.type === "personal"
                          ? "Personal Card"
                          : item.type === "shared"
                          ? "Shared Card"
                          : "Company Card"}
                      </p>
                      <p className="mb-2 text-sm">
                        {formatNumberWithSpaces(item.id)}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          {formatNumber(item.balance)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground shadow hover:bg-primary hover:text-foreground h-8 w-8 rounded-full"
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="mt-1 flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentPage
                        ? "bg-primary"
                        : "bg-muted-foreground opacity-50"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </React.Suspense>

        {activeItem ? (
          <div className="flex w-full gap-2">
            <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow flex-1">
              <div className="text-muted-foreground flex items-center justify-between">
                <h2 className="font-bold">Details</h2>
                <ScanText />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-xs">Card name</p>
                    <p>{activeItem.label}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-xs">Card number</p>
                    <p>{formatNumberWithSpaces(activeItem.id)}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-xs">Card owner</p>
                    <p>{activeItem.owner}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-xs">Card type</p>
                    <p>
                      {activeItem.type === "personal"
                        ? "Personal Card"
                        : activeItem.type === "shared"
                        ? "Shared Card"
                        : "Company Card"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-xs">
                      Disposable amount
                    </p>
                    <p>{formatNumber(activeItem.balance)}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-xs">Card role</p>
                    <p>{activeItem.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col gap-2">
                <button onClick={() => {SetDepositWithdrawData({
                  type: "withdraw",
                  label: "Withdraw",
                  balance: activeItem.balance
                }); SetDepositWithdraw(true)}} className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Wallet />
                  Withdraw
                </button>
                <button onClick={() => {SetDepositWithdrawData({
                  type: "deposit",
                  label: "Deposit",
                  balance: activeItem.balance
                }); SetDepositWithdraw(true)}} className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Landmark />
                  Deposit
                </button>
                <button onClick={() => {SetDepositWithdrawData({
                  type: "transfer",
                  label: "Transfer",
                  balance: activeItem.balance
                }); SetTransferAccount(true)}} className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Move3D />
                  Transfer
                </button>
                <button className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Notebook />
                  Invoices
                </button>
                <button className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Logs />
                  Logs
                </button>
              </div>
            </div>
            <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow h-fit flex-[0.75]">
              <div className="text-muted-foreground flex items-center justify-between">
                <h2 className="font-bold">Settings</h2>
                <Settings />
              </div>
              <div className="flex flex-col gap-2">
                <button className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <MoveRight />
                  Transfer ownership (can change account owner)
                </button>
                <button className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Share />
                  Share card
                </button>
                <button className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background border text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Pen />
                  Edit
                </button>
                <button className="inline-flex whitespace-nowrap rounded-[0.35rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-secondary-foreground shadow-sm transition-all hover:scale-[0.98] hover:cursor-pointer hover:bg-secondary h-fit w-full items-center justify-start gap-4 p-4">
                  <Trash />
                  Delete card (can delete the account)
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-muted-foreground">
            <ServerOff size={32} />
            <p className="text-xl">No card selected</p>
          </div>
        )}
      </div>

      {isDepositWithdraw && (
        <DepositWithdrawModal type={DepositWithdrawData.type} label={DepositWithdrawData.label} balance={DepositWithdrawData.balance} onClick={(type, value) => handleDepositWithdraw(type, value)}/>
      )}

      {isTransferAccount && (
        <TransferAccountModal type={DepositWithdrawData.type} label={DepositWithdrawData.label} balance={DepositWithdrawData.balance} onClickTransfer={(type, id, value) => handleTransfer(type, id, value)} />
      )}
    </div>
  );
};

{/** pushing */}

export default Accounts;
