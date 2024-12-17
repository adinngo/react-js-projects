import './styles/Buttons.css'


function LinkButton({ data, icon }) {
  return (
    <>
      <a {...data}>
        {icon}
      </a>
    </>
  );
}
function ChangeQuoteButton({ handleClick }) {
  return (
    <>
      <button id="new-quote" onClick={handleClick} className='button'>
        New quote
      </button>
    </>
  );
}

function Buttons({ handleClick }) {
  return (
    <div className="buttons">
      <div>
        <LinkButton
          icon={<i className="bx bxl-twitter"></i>}
          data={{
            href: "",
            id: "tweet-quote",
            title: "Tweet this quote!",
            className: "button"
          }}
        />
        <LinkButton
          icon={<i className="bx bxl-tumblr"></i>}
          data={{
            href: "",
            id: "tumblr-quote",
            title: "Post this quote on tumblr!",
            className: "button"
          }}
        />
      </div>
      <ChangeQuoteButton handleClick={handleClick} />
    </div>
  );
}

export default Buttons;
