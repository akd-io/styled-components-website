import React from 'react'
import DocsLayout from '../../components/DocsLayout'
import NextPage from '../../components/NextPage'

import Motivation from '../../components/basics/motivation'
import GettingStarted from '../../components/basics/getting-started'
import PassedProps from '../../components/basics/passed-props'
import AdaptingBasedOnProps from '../../components/basics/adapting-based-on-props'
import StylingAnyComponents from '../../components/basics/styling-any-components'
import ExtendingStyles from '../../components/basics/extending-styles'
import Animations from '../../components/basics/animations'
import ReactNative from '../../components/basics/react-native'

const Basics = () => (
  <DocsLayout title="Basics">
    <Motivation />
    <GettingStarted />
    <PassedProps />
    <AdaptingBasedOnProps />
    <StylingAnyComponents />
    <ExtendingStyles />
    <Animations />
    <ReactNative />

    <NextPage
      href="/docs/advanced"
      title="Advanced"
    />
  </DocsLayout>
)

export default Basics
