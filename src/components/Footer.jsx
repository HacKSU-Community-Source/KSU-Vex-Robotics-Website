import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-ksu-blue text-white">
      <div className="mx-auto grid max-w-6xl gap-120 px-6 py-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="KSU Vex Robotics logo" className="h-12 w-auto" />
            <span className="text-lg font-bold text-ksu-gold">KSU Vex Robotics</span>
          </div>
          <p className="mt-3 text-sm text-ksu-silver">
            A competitive robotics team in the program VEX U.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ksu-gold">
            Get in touch
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="mailto:ksuroboticsteam@gmail.com" className="hover:text-ksu-gold">
                ksuroboticsteam@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.kent.edu/csi/kent-state-vex-robotics-team"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ksu-gold"
              >
                Official KSU club page
              </a>
            </li>
            <li className="text-ksu-silver">
              Advisors: Carl Harrison and Emily Baumgartner
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ksu-blue">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-xs text-ksu-silver sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} KSU Vex Robotics</p>
          <p>
            Built by HackSU
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer