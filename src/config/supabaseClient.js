import { createClient } from '@supabase/supabase-js'


//const supabaseUrl = process.env.SUPABASE_URL
//const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabaseUrl = 'https://zawltmxjmmliqyywtohj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphd2x0bXhqbW1saXF5eXd0b2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjU4NDYsImV4cCI6MjAyNjU0MTg0Nn0._ahwHtWBcF2rt_c3aGNxMmxnb1INgVlgv0G9ogpmBuw'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase