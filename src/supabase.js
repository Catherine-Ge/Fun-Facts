import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gqrxegrbktihlbxkvapu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxcnhlZ3Jia3RpaGxieGt2YXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0Njk0ODcsImV4cCI6MjAwNjA0NTQ4N30.SCprb9SwXyVKF-J_38JHK8SdS3RVacGWv9f2CN3nQ8k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
