/* eslint-disable react/prop-types */
import Input from "../Input/Input";

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target[0].value;
    const email = event.target[1].value;

    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
    >
      <Input type="text" placeholder="Insira seu nome" required />
      <Input type="email" placeholder="Insira seu email" required />
      <button
        type="submit"
        className="bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase py-1 px-5 outline-none w-full max-w-sm hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;
