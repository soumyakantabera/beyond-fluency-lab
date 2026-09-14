import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { programmes } from '../src/lib/programmes';
import { courses } from '../src/lib/content';
import { problemGuides } from '../src/lib/problem-guides';
import { pageSchema } from '../src/lib/page-schema';
import { paths } from '../src/lib/routes';
import { enquirySchema } from '../server/utils/enquiries';
assert.equal(programmes.length, 10);
assert.equal(programmes.flatMap(p => p.offers).length, 14);
assert.equal(new Set(programmes.map(p => p.slug)).size, 10);
assert.deepEqual(courses.slice(0,4).map(c=>c.slug), ['speak-with-confidence','career-interview-intensive','professional-communication','executive-communication']);
const fixture = {id:'00000000-0000-4000-8000-000000000001',kind:'enrolment',name:'Preview Test',email:'preview@example.com',timezone:'Europe/Berlin',availability:'Evenings',message:'Communication practice',privacyAcknowledged:true};
for (const p of programmes) {
 assert.ok(existsSync(`public/assets/${p.image}.webp`), p.image);
 assert.ok(paths.includes('/courses/'+p.slug), p.slug+' missing from sitemap');
 assert.ok(enquirySchema.safeParse({...fixture,course:p.slug}).success, p.slug+' enquiry rejected');
 for(const o of p.offers) assert.ok(o.price>0 && o.sessions && o.capacity && o.feedback);
}
assert.equal(enquirySchema.safeParse({...fixture,course:'invented-programme'}).success,false);
assert.equal(enquirySchema.safeParse({...fixture,course:programmes[0].slug,privacyAcknowledged:false}).success,false);
assert.equal(programmes[3].offers[0].format,'Private 1:1');
assert.equal(programmes[7].offers[0].format,'Private household');
assert.ok(programmes[6].offers[0].capacity.includes('4 learners'));
for(const path of ['/coaches','/assessment','/private-coaching','/live-classes','/for-employers','/for-universities']) assert.ok(paths.includes(path));
console.log(`PASS: 10 course families, 14 offers, all imagery, sitemap coverage, enquiry acceptance/rejection, diagnostic compatibility and special-format constraints. ${new Set(paths).size} public paths.`);

for (const article of problemGuides) {
 assert.ok(paths.includes('/blog/'+article.slug));
 assert.ok(article.image && existsSync('public/assets/'+article.image+'.webp'));
 assert.ok(article.sections.length >= 4);
 const schema = pageSchema('/blog/'+article.slug,article.title,article.description);
 assert.ok(schema['@graph'].some(node => node['@type']==='BlogPosting' && node.image));
}
console.log(`PASS: ${problemGuides.length} original problem guides have live routes, imagery, substantive sections and article structured data.`);
