import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./styles.css";

export const Navigation = ({
  length,
  handlePrevPage,
  handleNextPage,
  page,
}) => {
  const beforeCondition = page !== 1;
  const nextCondition = length >= 25;

  return (
    <div className="navigation">
      {beforeCondition && (
        <NavigateBeforeIcon fontSize="large" onClick={handlePrevPage} />
      )}
      {nextCondition && (
        <NavigateNextIcon fontSize="large" onClick={handleNextPage} />
      )}
    </div>
  );
};
