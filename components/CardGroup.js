import Card from "./Card";
function CardGroup() {
  const data = {
    API: "AdoptAPet",
    Description: "Resource to help get pets adopted",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "yes",
    Link: "https://www.adoptapet.com/public/apis/pet_list.html",
    Category: "Animals",
  };
  return (
    <div className="flex flex-wrap flex-row gap-7 place-content-center px-4">
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
    </div>
  );
}

export default CardGroup;
