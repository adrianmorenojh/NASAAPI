import ContentLoader from "react-content-loader";

export const Loader = ({ num }) => {
  const loaders = Array.from({ length: num }, (_, index) => (
    <ContentLoader
      key={index}
      speed={2}
      width={300}
      height={360}
      viewBox="0 0 200 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#d6d6d6"
    >
      <rect x="0" y="0" rx="10" ry="10" width="200" height="260" />
    </ContentLoader>
  ));

  return <>{loaders}</>;
};
