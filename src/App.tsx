import React from 'react';
import { supabase } from './lib/helper/supabaseclient';

function App() {

  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  return (
    <div className="App">
      <button onClick={() => { signInWithGithub() }}>wwwwwwwwwww</button>
    </div>
  );
}

export default App;
