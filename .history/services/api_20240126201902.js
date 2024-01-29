import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fwiqjkzgmkurwgmbdwen.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aXFqa3pnbWt1cndnbWJkd2VuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTkzMTA2MywiZXhwIjoyMDIxNTA3MDYzfQ.IGiRIox2Oj6qj6CkpiT110TxUcoF97O6CKvAlFHrbPM",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aXFqa3pnbWt1cndnbWJkd2VuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTkzMTA2MywiZXhwIjoyMDIxNTA3MDYzfQ.IGiRIox2Oj6qj6CkpiT110TxUcoF97O6CKvAlFHrbPM"
    }
})

