function ButtonCta({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="btn-brutal mt-6 w-full py-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime"
      aria-label="Collaborer avec DevEnGalère"
    >
      {children}
    </button>
  );
}

export default ButtonCta;
