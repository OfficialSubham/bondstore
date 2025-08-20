const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full max-w-3xl mx-auto">
      <div className="pt-2 px-4 flex flex-col gap-4 relative">{children}</div>
    </div>
  );
};

export default Container;
