import '../../index.css';
const Section = ({ children, title }) => (
  <section className="container">
    <h1>{title}</h1>
    {children}
  </section>
);
export default Section;
