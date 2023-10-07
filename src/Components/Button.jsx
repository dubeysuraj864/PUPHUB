function Button(props) {
  return (
    <>
      <div className="button bg-[#124C5F] hover:bg-[#C7E7E1] hover:text-[#124C5F] text-white px-4 py-2 text-center rounded-sm transition-all">
        {props.text}
      </div>
    </>
  );
}

export default Button;
