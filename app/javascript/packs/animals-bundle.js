import ReactOnRails from 'react-on-rails';

import Animals from '../bundles/Animals/components/Animals';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Animals,
});
