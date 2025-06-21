
import { useEffect } from 'react'
export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor')
    const move = e => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      const trail = document.createElement('div')
      trail.className = 'mouse-trail'
      trail.style.left = e.clientX + 'px'
      trail.style.top = e.clientY + 'px'
      document.body.appendChild(trail)
      setTimeout(() => trail.remove(), 300)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="custom-cursor"></div>
}
