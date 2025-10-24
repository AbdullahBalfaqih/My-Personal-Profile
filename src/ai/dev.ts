import { config } from 'dotenv';
config({ path: '.env.local' });


import '@/ai/flows/content-refinement-tool.ts';
import '@/ai/flows/send-email-flow.ts';
