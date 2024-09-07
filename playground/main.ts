import { FluentBundle } from '@fluent/bundle'
import locale from './locale.ftl'

const bundle = new FluentBundle('en-US', { useIsolating: false })
bundle.addResource(locale)
const msg = bundle.getMessage('hello')
if (msg?.value) {
  bundle.formatPattern(msg.value)
  const element = document.getElementById('app')
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  element && (element.innerHTML = bundle.formatPattern(msg.value))
}
