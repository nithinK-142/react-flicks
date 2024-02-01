import "@/styles/windmill.css";

const Loading = ({ bg }: { bg?: string }) => {
  return (
    <div className={`flex items-center justify-center h-[85vh] z-50 dark:${bg}`}>
      <div className="col-3">
        <div className="snippet" data-title="dot-windmill">
          <div className="stage">
            <div className="dot-windmill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
