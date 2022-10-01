import { Image } from "@chakra-ui/react";
import { useState } from "react";
function Card(props) {
  const { data } = props;

  return (
    <div className="flex flex-col w-1/5 max-w-md rounded-lg p-2 min-h-fit border border-gray items-center hover:cursor-pointer my-1 transition-all animate-none [transition-duration:200ms] shadow-md hover:[transform:scale(1.075)] justify-center bg-gray-light">
      <div></div>
      <h1 className="text-xl font-semibold p-1.5 text-center">{data.API}</h1>

      <hr className="bg-brown h-0.5 w-3/4" />
      <div className="py-4">
        <p className="text-center">{data.Description}</p>
      </div>
      <hr className="bg-brown h-0.5 pt-0.5 w-4/5" />
      <div className="mt-3 pb-2">
        <table className="border-separate border-spacing-2 border border-b-gray-dark">
          <tr>
            <td>Auth:</td>
            <td>{data.Auth != "" ? data.Auth : "None"}</td>
          </tr>
          <tr>
            <td>HTTPS:</td>
            <td>{data.HTTPS == true ? "True" : "False"}</td>
          </tr>
          <tr>
            <td>Cors:</td>
            <td>{data.Cors}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{data.Category}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Card;
