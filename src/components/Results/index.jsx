import { Loader } from "~/components/Loader";
import { Article } from "~/components/Article";
export const Results = ({ loading, error = null, data }) => {
  return (
    <div className="results">
      {loading ? (
        <Loader num={6} />
      ) : error ? (
        <>
          <h2>Oops! An error has occurred</h2>
          <p>
            Unfortunately, an error has occurred on the page. Please try again
            later.
          </p>
        </>
      ) : (
        data.map((item) => (
          <Article src={item.img_src} key={item.id} id={item.id} />
        ))
      )}
    </div>
  );
};
