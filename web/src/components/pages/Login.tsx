import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Login: React.FC = () => {
  const [pin, setPin] = useState("");
  const [buttons, setButtons] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fonction pour mélanger un tableau
    const shuffleArray = (array: string[]) => {
      let currentIndex = array.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    };

    // Générer et mélanger les chiffres
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    setButtons(shuffleArray(numbers));
  }, []);

  // Ajouter un chiffre au code PIN
  const handleButtonClick = (number: string) => {
    setPin((prevPin) => (prevPin + number).slice(0, 4)); // Limiter le code PIN à 4 chiffres
  };

  // Effacer le code PIN
  const handleClear = () => {
    setPin("");
  };

  // Soumettre le code PIN (par exemple, naviguer vers un autre écran)
  const handleSubmit = () => {
    console.log("PIN submitted:", pin);
    navigate("/dashboard");
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-background relative flex min-w-xs max-w-sm flex-col gap-2 rounded-[0.5rem] p-2 animation-fadeIn">
        <div className="bg-card flex flex-col gap-4 rounded-lg p-4 shadow">
          <h2 className="text-foreground font-bold text-xl text-center">Enter PIN</h2>
          <div className="text-muted-foreground flex items-center text-sm text-center">
            <h2 className="font-[400]">
              Please enter your PIN to proceed. Use the buttons below to input your PIN code.
            </h2>
          </div>

          {/* Affichage du code PIN */}
          <div className="text-center mt-4">
            <h3 className="text-4xl font-bold">{pin || "____"}</h3>
          </div>

          {/* Pavé numérique */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {buttons.slice(0, 9).map((num, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(num)}
                className="bg-secondary text-secondary-foreground rounded-md p-4 text-xl font-bold transition-all hover:brightness-90 active:bg-[#5c3131]"
              >
                {num}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="bg-secondary text-secondary-foreground rounded-md p-4 text-xl font-bold transition-all hover:brightness-90 active:bg-[#5c3131] col-span-2"
            >
              C
            </button>
            <button
              onClick={() => handleButtonClick(buttons[9])}
              className="bg-secondary text-secondary-foreground rounded-md p-4 text-xl font-bold transition-all hover:brightness-90 active:bg-[#5c3131]"
            >
              {buttons[9]}
            </button>
            <button
              onClick={handleSubmit}
              className="justify-center whitespace-nowrap rounded-[0.375rem] text-sm font-medium transition-all hover:brightness-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm animation-fadeInDelay h-9 px-3 py-2 flex items-center gap-2 col-span-3"
            >
              <MdLogin />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
