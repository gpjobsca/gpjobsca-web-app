import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/job.module.css';

export default function Job() {
  return (
    <Layout job>
      <Head>
        <title>Job | {siteTitle}</title>
      </Head>

      <div className="bg-white shadow-sm mx-auto rounded border border-gray-300">
        <div className="p-8">
          <header className="mb-12">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="pb-2 text-2xl md:text-3xl text-gray-700">
                  Field Administrator
                </h1>
                <div className="inline-flex">
                  <h2 className="text-gray-400">Sinopec Canada</h2>
                  <span className="text-gray-400 ml-4 md:ml-8">7d ago</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/"
                  className="md:flex bg-blue-500 hover:bg-blue-700 px-4 py-2 font-bold rounded-full text-white transition-colors transition-75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <span className="inline-block ml-2">Apply Now</span>
                </a>
              </div>
            </div>
          </header>

          <div className={styles.jobText}>
            <p>
              Sinopec Canada is a wholly-owned subsidiary of a major
              International upstream oil and gas company, Sinopec International
              Petroleum Exploration and Production Corporation (SIPC)
              headquartered in Beijing, China. Sinopec Canada has been an active
              participant in the Canadian energy industry since 2005. Joining
              Sinopec Canada as a Field Administrator means becoming an
              important part of our team dedicated to making successful
              contributions to a sustainable future.
            </p>
            <p>
              <strong>Primary Purpose of Position</strong>
            </p>
            <p>
              Reporting to the Grande Prairie Area Foreman (office based in
              Grande Prairie), the Field Administrator will be responsible for
              assisting the Operations & Maintenance teams with day-to-day
              administrative and reporting responsibilities.
            </p>
            <p>
              <strong>Roles and Responsibilities</strong>
            </p>
            <p>
              · As the first point of contact, warmly greet visitors, answer
              phones, accept and sort incoming mail, and arrange couriers. ·
              Coordinate with various departments to onboard new operators
              including setting up access to Sinopec Daylight programs, managing
              vehiclehandover, mobile phones, equipment and required
              documentation. · Coordinate with Payroll department to ensure
              operator timecards are submitted accurately in ADP according to
              operator schedules. · Assist HSE department with inputting hazard
              assessments into Sinopec’s safety program as required. · Assist in
              setting up new vendors in ComplyWorks as required. · Generate
              required reports prior to weekly Leadership meeting, record clear
              and concise minutes and distribute to attendees. · Support in
              maintaining and organize all electronic filing in an efficient and
              user-friendly manner. · Order office stationary and supplies as
              required. · Verify and code invoices for area operations in Ariba
              system · Provide support to the Area Production Foreman, including
              (but not limited to): o Track and forward truck tickets and charts
              to Production Accounting at month end. o Perform various PVR
              duties including entering volumes, running reports and trouble
              shooting. o Reconcile receipt summary from Terminals to PVR weekly
              and inform Foreman of any anomalies. o Update all emergency
              response area manuals, and attend emergency response planning and
              training, as well as schedule training o Monitor and track
              operator safety tickets and set up training prior to ticket
              expiration. o Administer the Competency Management and Development
              System (CMDS). o Monitor, troubleshoot, set up new entities and
              provide operator support for ComplyWorks and OPLII software. o
              Track and verify HSE statistics and compile data for weekly and
              month-end reports. o Assist with maintaining the SDS database. o
              Track OPLII and OPEX for the area Foreman on an ongoing basis. o
              Maintain and update the monthly KPI board. · Provide support to
              the Supervisor, Maintenance, including (but not limited to): o
              Maintenance data entry o Hour meter updates o Equipment Management
              using OPLII o Network filing and organization of completed work
              orders Position Knowledge, Skills and Experience · Proficient
              knowledge of Microsoft Office, including but not limited to
              Microsoft Excel, Word, PowerPoint and Outlook with the capability
              to learn new programs quickly. · Strong organizational abilities
              with attention to detail and excellent customer service skills. ·
              Demonstrate strong and effective communication skills. · Ability
              to partner with internal departments and external vendors to
              resolve issues. · Knowledge of ComplyWorks, SAP Ariba, and PVR
              software is considered an asset. · Demonstrate excellent customer
              service. · High level of integrity in all actions, complying with
              and promoting the company’s core values, a respectful work
              environment, and aligning with the code of business conduct. ·
              Demonstrated ability to understand and work well in a diverse and
              multi-cultural environment.
            </p>
            <p>
              <strong>Qualifications</strong>
            </p>
            <p>
              · 7-10 years of office administration experience · Minimum of 5
              years oil and gas administration experience · Post-secondary
              education in administration is preferred · Must be legally
              qualified to work in Canada
            </p>
            <p>
              <strong>Come work with us!</strong>
            </p>
            <p>
              If you are looking for meaningful new challenges and have a
              solutions-oriented attitude, we want to hear from you. Join
              Sinopec Canada for a workplace filled with diversity, rewarding
              work, and opportunities to develop new skills and grow your
              career. To apply, submit your resume and cover letter on the
              careers section of our website, www.sinopeccanada.com. Only those
              selected for an interview will be contacted. Thank you in advance
              for your interest. At Sinopec Canada, we are committed to
              fostering a diverse, inclusive, and accessible environment, where
              all employees feel valued, respected and supported. If you require
              an accommodation for the recruitment/interview process (including
              accessible meeting rooms or other accommodation), please let us
              know and we will work with you to meet your needs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
