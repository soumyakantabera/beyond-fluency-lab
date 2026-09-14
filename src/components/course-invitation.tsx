import { courses } from '@/lib/content';
import { LabIcon } from './lab-icon';

export function enrolmentHref(slug: string, source = 'course') {
  return '/enrol?course=' + encodeURIComponent(slug) + '&source=' + encodeURIComponent(source);
}

export function CourseInvitation({course, reason, source = 'course'}: {
  course: typeof courses[number]; reason?: string; source?: string;
}) {
  return <section className="course-invitation" aria-label={'Your next step: ' + course.name}>
    <div className="invitation-heading"><LabIcon name="craft" size={30}/><p className="eyebrow">TURN INSIGHT INTO PRACTICE</p></div>
    <h3>{course.name}</h3>
    <p>{reason || course.short}</p>
    <div className="invitation-fee"><strong>€{course.price}</strong><span>{course.duration} <br />Complete course</span></div>
    <ul>{course.outcomes.map(outcome => <li key={outcome}><LabIcon name="arrow" size={21}/>{outcome}</li>)}</ul>
    <a className="btn" href={enrolmentHref(course.slug, source)}>Ask about this course <LabIcon name="arrow"/></a>
    <a className="text-link" href={'/courses/' + course.slug}>See the course outline <LabIcon name="arrow"/></a>
    <p className="fine">Indicative fee. Confirm your format, schedule and complete fee before enrolment.</p>
  </section>;
}

export function SiteInvitation() {
  return <section className="site-invitation wrap" aria-label="Take your next step">
    <div><p className="eyebrow">YOUR NEXT CONVERSATION STARTS HERE</p><h2>Give your next conversation <br />room to grow.</h2><p>From classrooms and workplaces to life abroad and conversations at home. Live classes and personalised private coaching, shaped around your situation.</p></div>
    <div className="invitation-actions"><a className="btn" href="/contact#trial-booking">Book a free live trial <LabIcon name="arrow"/></a><a className="btn outline" href="/courses">Explore the programmes <LabIcon name="arrow"/></a><a className="text-link" href="/diagnostic">Find your plateau in 90 seconds <LabIcon name="compass"/></a><p className="fine">Request a free trial. The team confirms availability and session scope personally.</p></div>
  </section>;
}
