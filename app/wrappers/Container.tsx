interface ContainerProps {
  children: React.ReactNode;
  large?: boolean;
}

export default function Container({ children, large }: ContainerProps) {
  return (
    <div
      className={
        large ? "mb-[190px] md:mb-[300px]" : "mb-[150px] md:mb-[200px]"
      }
    >
      {children}
    </div>
  );
}
