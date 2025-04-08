import BooksCard from "../BookCard";
import SectionHeader from "../SectionHeader";
import styles from "./BooksSection.module.css";

const BooksSection = ({books, renderStars,text, title, viewAllLink}) => {
  return (
    <section className={styles.bookSection}>
      <SectionHeader
        text={text}
        title={title}
        viewAllLink={viewAllLink}
      />

      <div className={styles.booksGrid}>
        {books.map((book) => (
          <BooksCard key={book.id} book={book} renderStars={renderStars}/>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
