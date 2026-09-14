import { Chart } from './site-pages';
import { LabIcon } from './lab-icon';
import { StorySlides, type StorySlide } from './story-slides';

export const plateauContexts: StorySlide[] = [
  {label:'STUDENTS & GRADUATES',title:'You know the subject. Can you make your thinking heard?',text:'A seminar, viva or first interview asks for more than a correct answer. Structure: lead with your point and one example. Pressure: practise a follow-up you did not prepare. Register: explain the same idea to a classmate and an interviewer.',image:'student',icon:'graduate',href:'/courses/academic-fluency'},
  {label:'WORKING PROFESSIONALS',title:'Your work is strong. Your contribution needs to travel.',text:'In a hybrid meeting, your update can disappear into detail. Structure: state the recommendation and its reason. Pressure: recover after an interruption. Register: adapt the detail for a teammate, client or senior stakeholder.',image:'bfl-global-work-v4',icon:'briefcase',href:'/courses/professional-communication'},
  {label:'NRIs & LIFE ABROAD',title:'You can manage the words. Belonging takes another kind of practice.',text:'For NRIs and others building a life abroad, familiar English can meet unfamiliar expectations. Structure: explain what you need at school, work or in your neighbourhood. Pressure: ask for clarification when you lose the thread. Register: practise invitations, boundaries and small talk without pretending to be someone else.',image:'bfl-global-belonging-v4',icon:'globe',href:'/courses/settle-and-belong'},
  {label:'LEADERS & FOUNDERS',title:'The decision matters. So does how you make it understood.',text:'A difficult decision or pitch tests all three dimensions. Structure: make the trade-off and next step clear. Pressure: respond to a challenge without losing the central point. Register: be direct with investors, colleagues or customers while hearing their concerns.',image:'corporate',icon:'enterprise',href:'/courses/executive-communication'},
  {label:'BUSINESS & SALES',title:'You know the value. Help the other person see its relevance.',text:'A client conversation needs listening as well as a convincing explanation. Structure: connect a real need to relevant evidence. Pressure: explore an objection before rushing to defend. Register: adjust the conversation to the customer, without manipulation or a memorised pitch.',image:'bfl-story-rehearsal-v5',icon:'structure',href:'/courses/sales-and-persuasion'},
  {label:'KIDS & TEENS',title:'The answer is there. Give a young voice room to try.',text:'We adapt the language and activity to the learner’s age. Structure becomes telling a short story in order. Pressure becomes trying a gentle follow-up with time to pause. Register becomes listening and taking turns with friends and adults. A guardian helps shape the goal; this is not a label or a developmental assessment.',image:'bfl-young-voices-v3',icon:'cohort',href:'/courses/confident-kids-and-teens'},
  {label:'CROSS-CULTURAL FAMILIES',title:'Shared words do not always carry the same meaning.',text:'Structure: express a need and a clear request. Pressure: pause and return to your point in a difficult conversation. Register: discuss differences in directness, politeness and expectations. Private household communication practice can include up to two adults; it is not relationship therapy.',image:'bfl-global-belonging-v4',icon:'exchange',href:'/courses/cross-cultural-relationships'},
];

export function PlateauFramework() {
  return <section id="plateau-framework" className="v3-wrap v3-section">
    <div className="v3-split">
      <div><p className="v3-kicker"><LabIcon name="structure" size={18}/> THE PLATEAU FRAMEWORK</p>
        <h2>The words are there.<br/><em>What gets in the way?</em></h2>
        <p>Knowing English and using it in a moment that matters are different challenges. We call that gap the fluency plateau. It can show up in a classroom, a meeting, a new country or a conversation at home.</p>
        <p>Our original framework gives the practice a focus: persuasive structure, pressure performance and register control. Your situation determines the exercise and the depth of live coaching.</p>
      </div><Chart />
    </div>
    <div className="v3-moments plateau-dimensions">
      <article><LabIcon name="structure" size={32}/><p className="v3-kicker">CLARITY</p><h3>Persuasive Structure</h3><p>Give your message a shape: a point, relevant detail and a clear next step. For a young learner, that might simply mean telling a story in order.</p></article>
      <article><LabIcon name="pressure" size={32}/><p className="v3-kicker">COMPOSURE</p><h3>Pressure Performance</h3><p>Keep or recover your train of thought when you face a question, an interruption or unfamiliar expectations. Practise a pause and a useful response.</p></article>
      <article><LabIcon name="exchange" size={32}/><p className="v3-kicker">CONNECTION</p><h3>Register Control</h3><p>Adjust your tone, directness and detail for the person and setting. Keep your meaning and identity while making yourself easier to understand.</p></article>
    </div>
    <StorySlides label="One framework, different lives" slides={plateauContexts}/>
    <div className="plateau-followthrough"><p>In a live class or a personalised private programme, bring a real situation, try it, receive focused feedback and try again. Notice a specific change: a clearer opening, a recovered answer or a request the listener understands.</p>
      <p className="v3-fine">An original coaching framework, not a fixed stage of language development or a validated psychological test. The chart is conceptual; individual learning paths vary.</p>
      <a className="v3-link" href="/our-method">Explore the method <LabIcon name="arrow" size={18}/></a>{' '}
      <a className="v3-link" href="/blog/fluency-plateau-report">Read the framework report <LabIcon name="arrow" size={18}/></a>
    </div>
  </section>;
}
