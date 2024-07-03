// Define an interface for the component's props
interface FooterProps {
  mySolution: string;
  projectNotes: string;
  projectReadme: string;
}

export default function Footer({ mySolution, projectNotes, projectReadme }: FooterProps) {
  return (
    <article>
      <section>
        <h3 className="sr-only">Contact Information</h3>
        <p className="attribution">
          Challenge by <a href={mySolution} target="_blank">Frontend Mentor</a><span className="sr-only"> open in a new tab</span>.
          Coded by <a href="https://melissajkipp.com" target="_blank">Melissa J. Kipp</a><span className="sr-only"> open in a new tab</span>.
        </p>
      </section>
      <br />
      <section>
        <h3 className="sr-only">Project notes</h3>
        <a href={projectNotes} target="_blank">Takeaways and thoughts</a><span className="sr-only"> open in a new tab</span> and <a href={projectReadme} target="_blank">Project Readme</a><span className="sr-only"> open in a new tab</span>.
      </section>
    </article>
  );
}
