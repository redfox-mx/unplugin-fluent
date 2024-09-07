import { FluentResource } from '@fluent/bundle'

export function compile(raw: string) {
  const resource = new FluentResource(raw)
  return resource.body
}
