
import http from 'k6/http';
import { check, sleep } from 'k6';

 

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.1'],
  },
};

export default function () {
  const res = http.get('http://34.50.152.113/');

  check(res, {
    'status is 200 or 429': (r) => r.status === 200 || r.status === 429,
  });

  if (res.status === 429) {
    console.log(`Rate limited (429) at ${new Date().toISOString()}`);
  }

  sleep(0.5 + Math.random() * 0.5);
}
