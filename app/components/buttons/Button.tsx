interface ButtonProps {
  label: string;
  action: () => void;
  large?: boolean;
  secondary?: boolean;
}

const Button = ({ label, action, large, secondary }: ButtonProps) => {
  return (
    <button
      name={label}
      onClick={action}
      className={`rounded-xl duration-300 ease-in-out
      ${large ? "text-xl px-5 py-3" : "p-2"} ${
        secondary
          ? "text-black border-4 border-[#095234] bg-transparent hover:bg-[#095234] hover:text-white "
          : "bg-gradient-to-r from-[#095234] to-[#16925F] hover:bg-[#095234] hover:text-whit text-white"
      } `}
    >
      {label}
    </button>
  );
};

export default Button;
