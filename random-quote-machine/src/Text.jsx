import "boxicons/css/boxicons.min.css";

function Text({ text }) {
  return (
    <div id="text">
      <h2 style={{textAlign: "center", margin: 0}}>
        <i className="bx bxs-quote-left" style={{marginRight: 7}}></i>
        {text}
      </h2>
    </div>
  );
}

export default Text;
