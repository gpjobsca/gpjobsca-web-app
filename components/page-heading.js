function PageHeadingComponent({ text }) {
  return (
    <div className="flex justify-center mb-8">
      <h1 className="text-2xl font-bold text-gray-700 md:text-3xl">{text}</h1>
    </div>
  );
}

export default PageHeadingComponent;
