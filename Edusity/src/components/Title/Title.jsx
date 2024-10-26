import "./Title.css";

export default function Title({ subTitle, title }) {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h1>{title}</h1>
    </div>
  );
}
