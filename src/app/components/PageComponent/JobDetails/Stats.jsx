import CountUp from "react-countup";
export  const Stats =() => {
    return (
        <>
        <div className="text-white relative z-2 text-center text-base sm:text-3xl bg-[#384639] w-full flex flex-col sm:flex-row justify-around items-center py-5 gap-5">
          <div>
            Live Jobs: <CountUp start={0} end={1200} duration={6.5} separator="," />
          </div>
          <div>Compare Salaries</div>
          <div>
            Process: <CountUp start={0} end={550} duration={6.5} separator="," />
          </div>
        </div>
        </>
    )
}