interface ContainerProps {
  children: React.ReactNode;
  large?: boolean;
}

export default function Container({ children, large }: ContainerProps) {
  return (
    <div
      className={
        large ? "mb-[190px] md:mb-[350px]" : "mb-[150px] md:mb-[270px]"
      }
    >
      {children}
    </div>
  );
}
