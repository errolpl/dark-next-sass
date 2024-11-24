export const Banner = () => {
  return (
    <div
      className="py-3 text-center"
      style={{
        background:
          "linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7))",
      }}
    >
      <div className="container ">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <a href="#" className="underline underline-offset-4 font-medium">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
