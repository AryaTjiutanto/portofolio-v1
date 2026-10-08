const VerticalGridLines = () => {
    return (
        <div className="w-full h-full absolute grid grid-cols-5 left-0 top-0 z-1">
          <div className="border-r border-neutral-800"></div>
          <div className="border-r border-neutral-800"></div>
          <div className="border-r border-neutral-800"></div>
          <div className="border-r border-neutral-800"></div>
          <div></div>
        </div>
    )
}

export default VerticalGridLines;