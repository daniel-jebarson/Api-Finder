import { useRouter } from "next/router";
import Axios from "axios";
import CardGroup from "../components/CardGroup";
import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Category() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    // console.log(router.query.category);
    setLoading(true);
    if (!router.isReady) {
      return;
    }

    setCategory(router.query.category);
    fetchFunction(router.query.category);
    console.log("This is" + router.query.category + "category");
    // getRequest(category);
  }, [router.isReady]);

  async function fetchFunction(c) {
    try {
      //   console.log(c);

      const response = await Axios.get(
        `https://api.publicapis.org/entries?category=${c}`
      );
      setLoading(false);
      setData(response.data.entries);
      //   console.log(response.data.entries);
    } catch (err) {
      //   throw err;
      console.log(err);
    }
  }

  if (loading) {
    return (
      <div className="ml-72">
        Loading page...
        <Spinner
          className="h-5 w-6"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
        />
      </div>
    );
  } else {
    if (data == null || data.length === 0) {
      return "Sorry nothing is in this category!";
    } else {
      return (
        <div>
          <CardGroup data={data} />
        </div>
      );
    }
  }
}
export default Category;
