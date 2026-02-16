export async function fetchItems(): Promise<any[]> {
  return new Promise((res) =>
    setTimeout(() => res([{ id: 1, name: 'Item A' }, { id: 2, name: 'Item B' }]), 300)
  )
}
