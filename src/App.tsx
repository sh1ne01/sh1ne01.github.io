"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "You misstakened",
      "Are you sure?",
      "Think a bit more",
      "Come oooon",
      "Pleease",
      "??",
      "You will not press it",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
        <img src="https://i.gifer.com/6nz.gif" />
          <div className="my-4 text-4xl font-bold">YEEEES!!!I love you honey!!))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://i.gifer.com/origin/6e/6e086b5523cbb7a83a6ff8be9be9808e_w200.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine???</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
