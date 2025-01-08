import clsx from "clsx";
import languages from "../languages";

interface LanguagesProps {
  wrongGuessCount: number;
}

function Languages({ wrongGuessCount }: LanguagesProps) {
  const items = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const isLost = index < wrongGuessCount;

    const classNames = clsx("chip", isLost && "lost");

    return (
      <span className={classNames} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{items}</section>;
}

export default Languages;
