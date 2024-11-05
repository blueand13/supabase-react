import { createClient } from "@supabase/supabase-js";

let url = "https://rddixlijdiretuouscvc.supabase.co"
let key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZGl4bGlqZGlyZXR1b3VzY3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3Mjg3MTksImV4cCI6MjA0NjMwNDcxOX0.nEAgBzO-RTMkLMF3CbDEu4cNuHV3eRLAnHq5JB7SduM"

export const supabase = createClient(url, key);