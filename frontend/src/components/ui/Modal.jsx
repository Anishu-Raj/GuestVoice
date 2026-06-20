import { useEffect } from "react";
function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {

  useEffect(() => {

    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);

  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        justify-center
        items-center
      "
    >
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">

        <div className="flex justify-between mb-4">

          <h2 className="font-bold text-xl">
            {title}
          </h2>

          <button onClick={onClose}>
            ✖
          </button>

        </div>

        {children}

      </div>
    </div>
  );
}

export default Modal;