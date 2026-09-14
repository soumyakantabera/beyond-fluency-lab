import { LabIcon } from './lab-icon';
export function TrialInvitation({course}:{course?:string}) {
  return <aside className="trial-invitation" aria-label="Free trial booking">
    <p className="eyebrow"><LabIcon name="mentor" size={20}/> FROM READING TO REAL PRACTICE</p>
    <h2>Bring the conversation you keep putting off.</h2>
    <p>A guide can give you a starting point. A live trial gives you a chance to discuss your goal, experience the coaching approach and ask which programme fits your situation.</p>
    <a className="btn" href={'/contact'+(course?'?course='+encodeURIComponent(course):'')+'#trial-booking'}>Book a free live trial <LabIcon name="arrow" size={18}/></a>
    <p className="fine">Request a slot; the team confirms availability and the session scope personally. No payment or obligation to enrol. A parent or guardian must enquire for a child.</p>
  </aside>;
}
