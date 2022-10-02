import { useRouter } from "next/router";
import Axios from "axios";
import CardGroup from "../components/CardGroup";
import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Category() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (!router.isReady) {
      return;
    }

    setCategory(router.query.category);
    fetchFunction(router.query.category);
    console.log("This is" + router.query.category + "category");
  }, [router.isReady]);

  async function fetchFunction(c) {
    try {
      const response = await Axios.get(
        `https://api.publicapis.org/entries?category=${c}`
      );
      setLoading(false);
      setData(response.data.entries);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) {
    return (
      <div className="text-center mt-20">
        Loading page...
        <Spinner
          className="h-5 w-5"
          thickness="4px"
          speed="0.65s"
          emptyColor="white"
          color="blue"
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
