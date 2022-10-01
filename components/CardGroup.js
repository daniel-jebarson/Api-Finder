import Card from "./Card";
function CardGroup(props) {
  return (
    <div className="flex flex-wrap flex-row gap-7 place-content-center px-4">
      {props.data.map((value, index) => {
        return <Card data={value} />;
      })}
    </div>
  );
}

export default CardGroup;
