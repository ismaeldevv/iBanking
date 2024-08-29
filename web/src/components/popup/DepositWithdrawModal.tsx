import React, { useState } from "react";
import { formatNumber } from "../../utils/formatNumber";

interface DepositWithdrawModalProps {
  type: 'withdraw' | 'deposit';
  label: 'Withdraw' | 'Deposit';
  balance: number;
  onClick: (type: 'withdraw' | 'deposit' | 'close', value?: number) => void;
}

const DepositWithdrawModal: React.FC<DepositWithdrawModalProps> = ({ type, label, balance, onClick }) => {
  const [value, setValue] = useState('');

  const handleInput = (e: any) => {
    const newValue = e.target.value;
    
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };
  
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.4)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 absolute z-50 h-full w-full rounded-lg"></div>
      <div
        role="dialog"
        id="radix-:r3:"
        aria-labelledby="radix-:r4:"
        data-state="open"
        className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] absolute left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 rounded-[0.5rem] md:w-full max-w-sm"
        tabIndex={-1}
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2
            id="radix-:r4:"
            className="text-lg font-semibold leading-none tracking-tight"
          >
            {label}
          </h2>
        </div>
        <form className="flex flex-col gap-4">
          <div className="space-y-0.5">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Amount
            </label>
            <div
              id=":r11:-form-item-description"
              className="text-xs text-muted-foreground"
            >
              Available balance: {formatNumber(balance)}
            </div>
            <div className="relative h-9">
              <input
                className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-full w-full rounded-[0.375rem] border bg-transparent px-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={value}
                onInput={handleInput}
              />

            </div>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[0.375rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-foreground shadow hover:brightness-75 h-9 px-4 py-2 self-end"
            type="button"
            onClick={() => onClick(type, Number(value))}
          >
            {label}
          </button>
        </form>
        <button
          type="button"
          className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-[0.375rem] opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
          onClick={() => onClick('close', Number(value))}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
};

export default DepositWithdrawModal;
