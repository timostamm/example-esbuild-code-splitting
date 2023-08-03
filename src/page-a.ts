import {Enumeration, Example} from "./gen/example_pb";

export function PageA() {
  const e = new Example({
    a: "hello",
    e: Enumeration.A,
  });
  return `Page A: a: ${e.a}, e: ${Enumeration[e.e]}}`
}
