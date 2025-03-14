import { Check } from "lucide-react";

interface ModalProps {
  id: string;
  title: string;
  onClose: () => void;
}

export function SuccessModal(props: ModalProps) {
  return (
    <div
      id={props.id}
      tabIndex={-1}
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
          <button
            type="button"
            className="text-secondary-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-secondary-200 hover:text-secondary-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            data-modal-toggle="successModal"
            onClick={props.onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Fermer le modal</span>
          </button>
          <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
            <Check className="w-8 h-8 text-primary-500" />
            <span className="sr-only">Succès</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-secondary-900">
            {props.title}
          </p>
          <button
            data-modal-toggle="successModal"
            type="button"
            className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
            onClick={props.onClose}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
