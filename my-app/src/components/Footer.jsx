export default function Footer(props) {
  return (
    <footer className="footer">
      <p>© {props.year} {props.company}</p>

      <p>
        {props.college.name}, {props.college.location} 
        (Est. {props.college.estdyear})
      </p>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}
