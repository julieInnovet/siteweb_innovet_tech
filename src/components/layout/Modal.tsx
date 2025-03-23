import { Check } from "lucide-react";

interface SuccessModalProps {
  id: string;
  title: string;
  onClose: () => void;
}

export function SuccessModal(props: SuccessModalProps) {
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
            data-modal-toggle={props.id}
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
            data-modal-toggle={props.id}
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

interface DeleteModalProps {
  id: string;
  message: string;
  onConfirmed: () => void;
  onCancelled: () => void;
}

export function DeleteModal(props: DeleteModalProps) {
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
            className="text-secondary-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-secondary-200 hover:text-secondary-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle={props.id}
            onClick={props.onCancelled}
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
          <svg
            className="text-secondary-400 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="mb-4 text-secondary-500">{props.message}</p>
          <div className="flex justify-center items-center space-x-4">
            <button
              data-modal-toggle={props.id}
              type="button"
              className="py-2 px-3 text-sm font-medium text-secondary-500 bg-white rounded-lg border border-secondary-200 hover:bg-secondary-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-secondary-900 focus:z-10"
              onClick={props.onCancelled}
            >
              Non, annuler
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={props.onConfirmed}
            >
              Oui, supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
