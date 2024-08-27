import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { RiMastercardFill, RiBillFill, RiLockPasswordFill } from "react-icons/ri";

const Register: React.FC = () => {
  const [cardNumber, setCardNumber] = useState(""); // État pour le numéro de carte
  const [pin, setPin] = useState(""); // État pour le code PIN
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("Registering with card number:", cardNumber, "and PIN:", pin);
    navigate("/");
  };

  // Fonction pour formater le numéro de carte (optionnel)
  const formatCardNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.match(/.{1,4}/g)?.join(" ") || "";
  };

  // Fonction pour ajouter un chiffre au code PIN
  const handlePinClick = (number: string) => {
    setPin((prevPin) => (prevPin + number).slice(0, 4)); // Limiter le code PIN à 4 chiffres
  };

  // Fonction pour effacer le code PIN
  const handleClearPin = () => {
    setPin("");
  };

  // Fonction pour formater le code PIN avec des astérisques
  const formatPin = (value: string) => {
    return "*".repeat(value.length) || "____"; // Affiche des astérisques pour chaque chiffre saisi
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-background relative flex min-w-[400px] max-w-lg flex-col gap-2 rounded-[0.5rem] p-2">
        {/* Section Carte */}
        <div className="bg-card flex flex-col gap-4 rounded-[0.5rem] p-4 shadow">
          <div className="text-muted-foreground flex items-center justify-between">
            <h2 className="font-bold">Card Creation</h2>
            <BsFillCreditCard2FrontFill />
          </div>
          <div className="flex items-center gap-2">
            <div className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="bg-background flex flex-col gap-4 rounded-[0.5rem] border p-4 shadow-sm">
                <div className="line-clamp-1">Personal Card</div>
                <input
                  type="text"
                  value={formatCardNumber(cardNumber)}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9123 4567"
                  maxLength={19}
                  className="bg-background -ml-2 -mt-2 -mb-2 text-muted-foreground text-sm p-2 placeholder:text-muted-foreground focus:outline-none"
                />
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
        </div>

        {/* Section Code PIN */}
        <div className="bg-card flex flex-col gap-2 rounded-[0.5rem] p-4 shadow">
          <div className="text-muted-foreground flex items-center justify-between">
            <h2 className="font-bold">Card PIN</h2>
            <RiLockPasswordFill />
          </div>
          <div>
            <div className="mb-2 -mt-3 text-center text-xl">{formatPin(pin)}</div>
            <div className="grid grid-cols-3 gap-2 jusitfy-center">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => handlePinClick(num.toString())}
                  className="bg-secondary p-2 rounded transition-all hover:brightness-90 active:bg-[#5c3131]"
                >
                  {num}
                </button>
              ))}
              {[4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => handlePinClick(num.toString())}
                  className="bg-secondary p-2 rounded transition-all hover:brightness-90 active:bg-[#5c3131]"
                >
                  {num}
                </button>
              ))}
              {[7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handlePinClick(num.toString())}
                  className="bg-secondary p-2 rounded transition-all hover:brightness-90 active:bg-[#5c3131]"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handlePinClick("0")}
                className="bg-secondary p-2 rounded col-span-3 mb-1 transition-all hover:brightness-90 active:bg-[#5c3131]"
              >
                0
              </button>
              <button
                onClick={handleClearPin}
                className="p-2 border rounded col-span-3"
              >
                C
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button
            onClick={handleRegister}
            className="justify-center whitespace-nowrap rounded-[0.375rem] text-sm font-medium transition-all hover:brightness-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm animation-fadeInDelay h-9 px-3 py-2 flex items-center gap-2"
          >
            <RiBillFill />
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
