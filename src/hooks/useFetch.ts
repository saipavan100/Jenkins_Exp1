import { useEffect, useState } from 'react'
import { fetchItems } from '../services/api'

export default function useFetch() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchItems().then((res) => {
      if (!mounted) return
      setData(res)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  return { data, loading }
}
