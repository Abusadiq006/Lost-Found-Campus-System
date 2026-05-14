const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'YOUR_EMAIL',
    password: 'YOUR_PASSWORD',
  });

  console.log(data.session.access_token);

  if (error) {
    console.log(error);
  }
}

login();