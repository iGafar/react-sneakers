import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{
      border: "1px solid rgb(243, 243, 243)",
      borderRadius: "40px",
      background: "rgb(255, 255, 255)",
    }}
    {...props}
  >
    <rect x="48" y="26" rx="0" ry="0" width="0" height="1" />
    <rect x="30" y="36" rx="10" ry="10" width="150" height="91" />
    <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
    <rect x="30" y="162" rx="2" ry="2" width="93" height="15" />
    <rect x="30" y="199" rx="8" ry="8" width="80" height="24" />
    <rect x="148" y="191" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default CardSkeleton;
