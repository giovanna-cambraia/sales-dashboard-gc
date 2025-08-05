import '@testing-library/jest-dom'
import 'jest-styled-components'

import { TextEncoder } from 'util'

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder
}
