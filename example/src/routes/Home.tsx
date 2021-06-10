import React from 'react'
import { Link } from '@datnq/react-tw'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Syntax from '../components/Syntax'

const Home = () => {
  return (
    <>
      <PageHeader
        title='Getting Started'
        subtitle='Install and configuration'
      />
      <Section title='Overview'></Section>
      <Section title='Dependencies'>
        <div className='prose'>
          <h4>Required</h4>
          <pre>
            @headlessui/react@^1.2.0
            <br />
            react@^16.0.0
            <br />
            tailwindcss@^2.1.4
          </pre>
          <h4>Dependencies</h4>
          <pre>
            clsx
            <br />
            date-fn
            <br />
            react-hot-toast
          </pre>
        </div>
      </Section>
      <Section title='Installation'>
        <div className='prose'>
          <h4>Create React App</h4>
          <p>
            Follow instruction at{' '}
            <Link href='https://create-react-app.dev/docs/getting-started'>
              Getting Started | Create React App
            </Link>
          </p>
          <h4>TailwindCSS</h4>
          <p>
            Follow instruction at{' '}
            <Link href='https://tailwindcss.com/docs/installation'>
              Installation - Tailwind CSS
            </Link>
          </p>
          <h4>Twx</h4>
          <p>Using yarn</p>
          <pre>yarn add @datnq/react-tw</pre>
          <p>Using npm</p>
          <pre>npm install --save @datnq/react-tw</pre>
          <h4>Configure TailwindCSS</h4>
          <p>
            In <code>tailwind.config.js</code>
          </p>
          <Syntax>{`const { presets } = require('@datnq/react-tw')

module.exports = {
  jit: true,
  // ... other props
  presets: [presets]
}`}</Syntax>
          <h4>Add provider</h4>
          <p>
            In <code>App.js</code>
          </p>
          <Syntax>{`import { TwxProvider } from '@datnq/react-tw'

const App = () => {
  return (
    <TwxProvider>
      {/* App components */}
    </TwxProvider>
  )
}

export default App`}</Syntax>
        </div>
      </Section>
      <Section title='License'>
        <div className='prose'>
          <p>
            <strong>Twx is</strong> licensed under the
            <br />
            <Link
              target='_blank'
              rel='noreferrer'
              className='text-xl font-bold'
              href='https://opensource.org/licenses/MIT'
            >
              MIT License
            </Link>
          </p>
          <blockquote>
            <p>
              A short and simple permissive license with conditions only
              requiring preservation of copyright and license notices. Licensed
              works, modifications, and larger works may be distributed under
              different terms and without source code.
            </p>
          </blockquote>
        </div>
      </Section>
    </>
  )
}

export default Home
