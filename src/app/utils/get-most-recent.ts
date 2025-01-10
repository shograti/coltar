interface Element {
  createdAt: string;
}

export function sortByMostRecent(elements: Element[]) {
  return elements.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
