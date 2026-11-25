import { Link } from 'react-router'

function Contact() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-ksu-navy px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-ksu-gold">Contact</h1>

        <p className="mt-4">
          Interested in getting involved or sponsoring the team? 
          <br />
          Reach out to us
          at{' '}
          <a
            href="mailto:ksuroboticsteam@gmail.com"
            className="font-semibold text-ksu-gold underline hover:text-ksu-yellow"
          >
            ksuroboticsteam@gmail.com
          </a>
        </p>

        <p className="mt-3">
          You can also visit our{' '}
          <a
            href="https://www.kent.edu/csi/kent-state-vex-robotics-team"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ksu-gold underline hover:text-ksu-yellow"
          >
            official KSU club page
          </a>
        </p>
      </div>
    </section>
  )
}
export default Contact