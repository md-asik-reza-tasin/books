import img from "../../../public/a.jpg";
export default function Cover() {
  return (
    <div className="flex justify-evenly items-center w-full">
      <div>
        <p className="text-5xl">Books to freshen up</p> 
        <p className="text-5xl">your bookself</p>
        <button className="w-[130px] h-[57px] bg-[#23BE0A] rounded-md text-white mr-2 mt-8">View The List</button>
      </div>
      <div>
        <img className="w-[318px] h-[394px]" src={img} alt="" />
      </div>
    </div>
  );
}
