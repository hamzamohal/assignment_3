import './quotes.scss';
import quotes from '../../Data/quotes';

const Quotes = () => {
  const takeRandomQuote = (quotes, start = 0) => {
    const index = Math.floor(Math.random() * (quotes.length - start + 1) + start);
    return quotes[index];
  };

  const quote = takeRandomQuote(quotes).split('-');

  return (
    <div className="quotes">
      <blockquote>{quote[1]}</blockquote>
      <p>{quote[0]}</p>
    </div>
  );
};

export default Quotes;
