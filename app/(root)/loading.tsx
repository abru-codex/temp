const Loading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-3">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="animate-pulse  h-full justify-start space-y-5">
          <div className="w-full  rounded-md h-30 bg-body " />
          <div className="w-36 bg-body h-6 rounded-md " />
          <div className="w-full bg-body h-6 rounded-md " />
        </div>
      ))}
    </div>
  );
};

export default Loading;
